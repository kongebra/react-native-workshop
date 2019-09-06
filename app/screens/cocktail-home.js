import React, { useContext, useEffect, useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useNavigation } from "react-navigation-hooks";
import { cocktailContext } from "../providers/cocktail-context";

import { StyleSheet, Dimensions, SafeAreaView, Image } from "react-native";
import {
<<<<<<< HEAD
    Container,
    Content,
    Header,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Right,
    Body,
    Title,
    Icon,
    Button,
    Footer,
    FooterTab,
    Fab
=======
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Button
>>>>>>> 39953f6d29df2eb9443944fcf1122acb26321674
} from "native-base";

export default function CocktailHome() {
    const store = useContext(cocktailContext);
    const [current, setCurrent] = useState({});

    const { navigate } = useNavigation();

    useEffect(() => {
        populateItems();
    }, []);

    const populateItems = async () => {
        await store.getRandom();
    };

    const handleSwipeRight = () => {
        store.addToFavorties(current);
    };

    const handleSwipeLeft = () => {
        console.log("LEFT", current.strDrink);
    };

    return useObserver(() => (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>
                {store.isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    <DeckSwiper
                        ref={c => (this._deckSwiper = c)}
                        dataSource={store.cocktails}
                        looping={false}
                        renderEmpty={() => (
                            <View style={styles.viewStyle}>
                                <Text>Over</Text>

                                <Button
                                    onPress={() => {
                                        populateItems();
                                    }}
                                >
                                    <Text>Load more...</Text>
                                </Button>
                            </View>
                        )}
                        renderItem={item => {
                            setCurrent(item);

                            return (
                                <Card style={styles.cardStyle}>
                                    <CardItem>
                                        <Body>
                                            <Text>{item.strDrink}</Text>
                                            <Text note>{item.strCategory}</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image
                                            style={styles.imageStyle}
                                            source={{
                                                uri: item.strDrinkThumb
                                            }}
                                        />
                                    </CardItem>
                                </Card>
                            );
                        }}
                        onSwipeRight={handleSwipeRight}
                        onSwipeLeft={handleSwipeLeft}
                    />
                )}
            </Content>

            <Footer>
                <FooterTab>
                    <Button
                        onPress={() => {
                            navigate("Home");
                        }}
                    >
                        <Icon name="home" />
                    </Button>
                    <Button
                        onPress={() => {
                            navigate("Favorites");
                        }}
                    >
                        <Icon name="heart" />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    ));
}

const styles = StyleSheet.create({
    viewStyle: {
        alignSelf: "center"
    },
    cardStyle: {
        elevation: 3
    },
    imageStyle: {
        height: Math.round(Dimensions.get("window").height * 0.66666),
        flex: 1
    }
});
