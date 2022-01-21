import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SelectFilterOption from "../screens/SelectFilterOption";
import ShowUserGrid from "../screens/ShowUserGrid";

import COLORS from "../constants/colors";

const Stack = createStackNavigator();

export default function SelectFilterOptionStack(props) {
  return (
    <Stack.Navigator initialRouteName="selectFilterOption" headerMode="screen">
      <Stack.Screen
        name="selectFilterOption"
        component={SelectFilterOption}
        options={{
          headerShown: true,
          title: null,
          headerStyle: {
            backgroundColor: COLORS.primary,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        }}
      />
      <Stack.Screen
        name="ShowUserGrid"
        component={ShowUserGrid}
        options={{
          headerShown: true,
          title: null,
          headerStyle: {
            backgroundColor: COLORS.primary,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
