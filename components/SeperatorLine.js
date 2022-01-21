import React from "react";
import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/colors";

const SeperatorLine = ({ color }) => {
  return (
    <View
      style={[
        styles.Line,
        { borderBottomColor: color, backgroundColor: color },
      ]}
    ></View>
  );
};

export default SeperatorLine;

const styles = StyleSheet.create({
  Line: {
    width: "100%",
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
