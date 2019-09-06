import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CocktailHome from "../screens/cocktail-home";
import CocktailDetail from "../screens/cocktail-detail";
import Settings from "../screens/settings";

const MainNavigation = createStackNavigator(
    {
        CocktailHome,
        CocktailDetail,
        Settings
    },
    {
        initialRouteName: "CocktailDetail",
        headerMode: "none"
    }
);

const RootNavigation = createAppContainer(MainNavigation);

export default RootNavigation;
