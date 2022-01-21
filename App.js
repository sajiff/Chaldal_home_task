import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";

// You can import from local files
import Screens from "./navigation/screens";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.Container}>
        <Screens />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
