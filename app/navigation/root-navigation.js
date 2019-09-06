import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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
        initialRouteName: "cocktailHome",
        headerMode: "none"
    }
);

const RootNavigation = createAppContainer(MainNavigation);

export default RootNavigation;
