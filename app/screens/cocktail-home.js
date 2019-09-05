import React, { useContext, useEffect, useState } from "react";
import { useObserver } from "mobx-react-lite";
import { useNavigation } from "react-navigation-hooks";
import { cocktailContext } from "../providers/cocktail-context";

import { SafeAreaView, Image } from "react-native";
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
    Body,
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
        <Container>
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
                                                <Text>{item.strDrink}</Text>
                                                <Text note>
                                                    {item.strCategory}
                                                </Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem cardBody>
                                            <Image
                                                style={{
                                                    height: 300,
                                                    flex: 1
                                                }}
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
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                            position: "absolute",
                            bottom: 50,
                            left: 0,
                            right: 0,
                            justifyContent: "space-between",
                            padding: 15
                        }}
                    >
                        <Button
                            iconLeft
                            onPress={() => {
                                this._deckSwiper._root.swipeLeft();
                                handleSwipeLeft();
                            }}
                        >
                            <Icon name="arrow-back" />
                            <Text>Swipe Left</Text>
                        </Button>
                        <Button
                            iconRight
                            onPress={() => {
                                this._deckSwiper._root.swipeRight();
                                handleSwipeRight();
                            }}
                        >
                            <Text>Swipe Right</Text>
                            <Icon name="arrow-forward" />
                        </Button>
                    </View>
                </>
            )}
        </Container>
    ));
}
