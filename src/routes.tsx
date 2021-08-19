import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import Home from "./screens/Home";
import Onboard from "./screens/Onboard";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f0f0f0" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Onboard" component={Onboard} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
