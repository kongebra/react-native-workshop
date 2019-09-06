import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CocktailHome from "../screens/cocktail-home";
import CocktailDetail from "../screens/cocktail-detail";
import CocktailFavorites from "../screens/cocktail-favorites";

const MainNavigation = createStackNavigator(
    {
        Home: {
            screen: CocktailHome,
            navigationOptions: () => ({
                title: "Home"
            })
        },
        Detail: {
            screen: CocktailDetail,
            navigationOptions: () => ({
                title: "Detail"
            })
        },
        Favorites: {
            screen: CocktailFavorites,
            navigationOptions: () => ({
                title: "Favorites"
            })
        }
    },
    {
        initialRouteName: "Home"
    }
);

const RootNavigation = createAppContainer(MainNavigation);

export default RootNavigation;
