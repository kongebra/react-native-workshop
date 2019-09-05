import React from "react";
import RootNavigation from "./root-navigation";
import { CocktailProvider } from "../providers/cocktail-context";

const store = {};

export default function NavigationWrapper() {
    return (
        <CocktailProvider>
            <RootNavigation />
        </CocktailProvider>
    );
}
