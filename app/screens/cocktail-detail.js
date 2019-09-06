import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { useNavigationParam } from "react-navigation-hooks";

import { useObserver } from "mobx-react-lite";
import { useNavigation } from "react-navigation-hooks";
import { cocktailContext } from "../providers/cocktail-context";

export default function CocktailDetail() {
    const store = useContext(cocktailContext);

    const id = useNavigationParam("id");

    useEffect(() => {
        populateDetail();
    }, []);

    const populateDetail = async () => {
        await store.getSingleCocktailById(id);
    };

    return useObserver(() => (
        <View>
            {store.isLoading ? (
                <Text>LOADING...</Text>
            ) : (
                <Text>{store.detail.strDrink}</Text>
            )}
        </View>
    ));
}
