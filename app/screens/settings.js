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
    const { navigate } = useNavigation();

    return useObserver(() => (
        <Container>
            <Content>
                <Text>HELLO WORLD</Text>
            </Content>
        </Container>
    ));
}

const placeholder = [
    {
        id: 1,
        name: "foo"
    },
    {
        id: 2,
        name: "BAR"
    },
    {
        id: 3,
        name: "BAZ"
    }
];
