import React from "react";
import { Image } from "react-native";
import {
    Container,
    Button,
    Title,
    Right,
    Content,
    Footer,
    FooterTab,
    Header,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon
} from "native-base";

const cards = [
    {
        text: "Lorem ipsum",
        name: "Foo bar",
        image: {
            uri: "http://placehold.it/500x500"
        }
    },
    {
        text: "Dolor sit amet",
        name: "Baz",
        image: {
            uri: "http://placehold.it/500x500?text=Second"
        }
    }
];

export default function CocktailDetail() {
    return (
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

            <Content contentContainerStyle={{ flex: 1 }}>
                <Text>This is Content Section</Text>

                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item => (
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image
                                        style={{ height: 300, flex: 1 }}
                                        source={item.image}
                                    />
                                </CardItem>
                                <CardItem>
                                    <Icon
                                        name="heart"
                                        style={{ color: "#ED4A6A" }}
                                    />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        )}
                    />
                </View>
            </Content>

            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
