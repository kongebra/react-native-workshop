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
    Card,
    CardItem,
    Thumbnail,
    Body,
    Left,
    Right
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
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{ uri: f.strDrinkThumb }}
                                    />
                                    <Body>
                                        <Text>{f.strDrink}</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Button
                                        rounded
                                        onPress={() =>
                                            navigate("Detail", {
                                                id: f.idDrink
                                            })
                                        }
                                    >
                                        <Icon name="arrow-forward" />
                                    </Button>
                                </Right>
                            </CardItem>
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
