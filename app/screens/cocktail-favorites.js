import React, { useContext } from "react";

import { useObserver } from "mobx-react-lite";
import { useNavigation } from "react-navigation-hooks";
import { cocktailContext } from "../providers/cocktail-context";

import {
    Container,
    Content,
    Text,
    Icon,
    Button,
    Footer,
    FooterTab,
    Card
} from "native-base";
import { ScrollView } from "react-native";

export default function CocktailFavorites() {
    const store = useContext(cocktailContext);
    const { navigate } = useNavigation();

    return useObserver(() => (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>
                <ScrollView>
                    {store.favorites.map((f, i) => (
                        <Card key={i}>
                            <Text>{f.strDrink}</Text>
                        </Card>
                    ))}
                </ScrollView>
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
