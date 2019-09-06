import React, { useContext, useEffect, useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useNavigation } from "react-navigation-hooks";
import { cocktailContext } from "../providers/cocktail-context";

import { StyleSheet, Dimensions, SafeAreaView, Image } from "react-native";
import {
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
    Spinner,
    Badge
} from "native-base";

const DEFAULT_LOAD_AMOUNT = 3;

export default function CocktailHome() {
    const store = useContext(cocktailContext);
    const [current, setCurrent] = useState({});

    const { navigate } = useNavigation();

    useEffect(() => {
        populateItems();
    }, []);

    const populateItems = async () => {
        await store.getRandom(DEFAULT_LOAD_AMOUNT);
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
                    <React.Fragment>
                        <Spinner color="blue" />
                        <Text style={styles.loadingText}>
                            Loading cocktail list
                        </Text>
                    </React.Fragment>
                ) : (
                    <DeckSwiper
                        style={styles.DeckSwiper}
                        dataSource={store.cocktails}
                        looping={false}
                        renderEmpty={() => (
                            <View style={styles.viewStyle}>
                                <Badge style={styles.viewStyleBadge} warning>
                                    <Text>List is empty currently empty</Text>
                                </Badge>
                                <Button
                                    style={styles.moreButton}
                                    onPress={() => {
                                        populateItems();
                                    }}
                                >
                                    <Text style={styles.moreButtonText}>
                                        Load more cocktails
                                    </Text>
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
    viewStyleBadge: {
        alignSelf: "center",
        marginTop: 50
    },
    cardStyle: {
        elevation: 3
    },
    imageStyle: {
        height: Math.round(Dimensions.get("window").height * 0.66666),
        flex: 1
    },
    deckSwiper: {},
    moreButton: {
        marginTop: 50
    },
    moreButtonText: {
        fontSize: 24
    },
    loadingText: {
        textAlign: "center"
    }
});
