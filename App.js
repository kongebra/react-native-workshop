import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import NavigationWrapper from "./app/navigation/navigation-wrapper";
import { useScreens } from "react-native-screens";

/*
import firebase from "firebase";
import { firebaseConfig } from "./config";
firebase.initializeApp(firebaseConfig);
*/

console.disableYellowBox = true;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            ...Ionicons.font
        });

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        // Optimizing rendering
        useScreens();

        return <NavigationWrapper></NavigationWrapper>;
    }
}
