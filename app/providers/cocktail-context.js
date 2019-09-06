import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import {
    getRandomCocktail,
    getCocktailById
} from "../services/cocktail-service";

export const cocktailContext = createContext();
export const CocktailProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        // Observables
        cocktails: [],
        cocktail: {
            idDrink: "12754",
            strDrink: "Sex on the Beach",
            strDrinkAlternate: null,
            strDrinkES: null,
            strDrinkDE: null,
            strDrinkFR: null,
            "strDrinkZH-HANS": null,
            "strDrinkZH-HANT": null,
            strTags: "IBA,ContemporaryClassic",
            strVideo: null,
            strCategory: "Ordinary Drink",
            strIBA: "Contemporary Classics",
            strAlcoholic: "Alcoholic",
            strGlass: "Highball glass",
            strInstructions:
                "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
            strInstructionsES: null,
            strInstructionsDE:
                "Alle Zutaten in einem mit Eis gefüllten Highball-Glas geben. Mit einer Orangenscheibe garnieren.",
            strInstructionsFR: null,
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/lijtw51551455287.jpg",
            strIngredient1: "Vodka",
            strIngredient2: "Peach schnapps",
            strIngredient3: "Cranberry juice",
            strIngredient4: "Grapefruit juice",
            strIngredient5: "",
            strIngredient6: "",
            strIngredient7: "",
            strIngredient8: "",
            strIngredient9: "",
            strIngredient10: "",
            strIngredient11: "",
            strIngredient12: "",
            strIngredient13: "",
            strIngredient14: "",
            strIngredient15: "",
            strMeasure1: "1 oz ",
            strMeasure2: "3/4 oz ",
            strMeasure3: "",
            strMeasure4: " ",
            strMeasure5: " ",
            strMeasure6: " ",
            strMeasure7: " ",
            strMeasure8: " ",
            strMeasure9: "",
            strMeasure10: "",
            strMeasure11: "",
            strMeasure12: "",
            strMeasure13: "",
            strMeasure14: "",
            strMeasure15: "",
            strCreativeCommonsConfirmed: "No",
            dateModified: "2016-07-21 10:12:45"
        },
        favorites: [],
        detail: {},
        random: {},
        isLoading: false,
        error: "",

        // Actions
        async getRandom(amount) {
            store.isLoading = true;

            try {
                let cocktails = [];

                for (let i = 0; i < amount; i++) {
                    const { data } = await getRandomCocktail();
                    const { drinks } = data;

                    cocktails.push(drinks[0]);
                }

                store.cocktails = cocktails;
            } catch (e) {
                store.error = e.message;
            } finally {
                store.isLoading = false;
            }
        },

        addToFavorties(item) {
            store.favorites.push(item);
        },

        async getSingleCocktailById(id) {
            store.isLoading = true;

            try {
                const { data } = await getCocktailById(id);
                const { drinks } = data;

                store.detail = drinks[0];
            } catch (e) {
                store.error = e.message;
            } finally {
                store.isLoading = false;
            }
        }
    }));

    return (
        <cocktailContext.Provider value={store}>
            {children}
        </cocktailContext.Provider>
    );
};
