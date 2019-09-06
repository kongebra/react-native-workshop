import React, { useContext, useEffect, useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useNavigation } from "react-navigation-hooks";
import { cocktailContext } from "../providers/cocktail-context";

import { Dimensions, SafeAreaView, Image } from "react-native";
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
    Fab
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
        console.log("RIGHT", current.strDrink);
    };

    const handleSwipeLeft = () => {
        console.log("LEFT", current.strDrink);
    };

    return useObserver(() => (
        <SafeAreaView>
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {store.isLoading ? (
                        <Text>Loading...</Text>
                    ) : (
                        <>
                            <View>
                                <DeckSwiper
                                    ref={c => (this._deckSwiper = c)}
                                    dataSource={store.cocktails}
                                    looping={false}
                                    renderEmpty={() => (
                                        <View style={{ alignSelf: "center" }}>
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
                                            <Card style={{ elevation: 3 }}>
                                                <CardItem>
                                                    <Body>
                                                        <Text>
                                                            {item.strDrink}
                                                        </Text>
                                                        <Text note>
                                                            {item.strCategory}
                                                        </Text>
                                                    </Body>
                                                </CardItem>
                                                <CardItem cardBody>
                                                    <Image
                                                        style={{
                                                            height: Math.round(
                                                                Dimensions.get(
                                                                    "window"
                                                                ).height *
                                                                    0.66666
                                                            ),
                                                            flex: 1
                                                        }}
                                                        source={{
                                                            uri:
                                                                item.strDrinkThumb
                                                        }}
                                                    />
                                                </CardItem>
                                            </Card>
                                        );
                                    }}
                                    onSwipeRight={handleSwipeRight}
                                    onSwipeLeft={handleSwipeLeft}
                                />
                            </View>
                        </>
                    )}
                </Content>
            </Container>
        </SafeAreaView>
    ));
}
