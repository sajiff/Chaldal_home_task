import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import COLORS from "../constants/colors";

const BoxDateRow = ({ onPress, date, show, onChange, text }) => {
  return (
    <View style={styles.BoxDateRow}>
      <Text style={styles.BoxDateRowText}>{text}</Text>
      <View style={styles.BoxDateRowDateSelector}>
        <TouchableHighlight
          style={{
            padding: 10,
          }}
          onPress={onPress}
          underlayColor="transparent"
          activeOpacity={0}
        >
          <Text>{moment(date).format("D MMM YYYY")}</Text>
        </TouchableHighlight>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default BoxDateRow;

const styles = StyleSheet.create({
  BoxDateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  BoxDateRowDateSelector: {
    flex: 1,
    width: "100%",
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  BoxDateRowText: {
    fontSize: 20,
    color: COLORS.primary,
    margin: 5,
    width: "15%",
  },
});
