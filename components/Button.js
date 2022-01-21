import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../constants/colors";

const Button = ({
  text,
  onPress,
  width = 120,
  height = 50,
  loading = false,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.ButtonContainer,
          {
            width: width,
            height: height,
          },
        ]}
        onPress={onPress}
      >
        {loading ? (
          <ActivityIndicator color={"white"} size={"large"} />
        ) : (
          <Text style={{ fontSize: 20, color: "white" }}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  ButtonContainer: {
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});
