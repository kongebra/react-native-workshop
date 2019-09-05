import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CocktailHome from "../screens/cocktail-home";
import Settings from "../screens/settings";

const MainNavigation = createStackNavigator(
    {
        cocktailHome: {
            screen: CocktailHome,
            navigationOptions: () => ({
                title: "Homescreen"
            })
        },
        settings: {
            screen: Settings,
            navigationOptions: () => ({
                title: "Settings"
            })
        }
    },
    {
        initialRouteName: "cocktailHome"
    }
);

const RootNavigation = createAppContainer(MainNavigation);

export default RootNavigation;
