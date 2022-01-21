import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import COLORS from "../constants/colors";
import BoxDateRow from "./BoxDateRow";
import Button from "./Button";
import SeperatorLine from "./SeperatorLine";

const FilterBox = ({
  Fromdate,
  onChangeFrom,
  Todate,
  onChangeTo,
  ActiveToggle,
  setActiveToggle,
  SuperActiveToggle,
  setSuperActiveToggle,
  BoredToggle,
  setBoredToggle,
  onPress,
  loading,
}) => {
  const [Fromshow, setFromshow] = useState(false);
  const [Toshow, setToshow] = useState(false);
  return (
    <View style={styles.BoxContainer}>
      <Text style={{ fontSize: 20, color: COLORS.text, margin: 5 }}>Date</Text>
      <SeperatorLine color={COLORS.MUTED} />
      <BoxDateRow
        onPress={() => setFromshow(true)}
        date={Fromdate}
        show={Fromshow}
        onChange={(event, selectedDate) => {
          setFromshow(false);
          onChangeFrom(event, selectedDate);
        }}
        text="From"
      />
      <BoxDateRow
        onPress={() => setToshow(true)}
        date={Todate}
        show={Toshow}
        onChange={(event, selectedDate) => {
          setToshow(false);
          onChangeTo(event, selectedDate);
        }}
        text="To"
      />
      <View style={{ marginVertical: 10 }}></View>
      <Text style={{ fontSize: 20, color: COLORS.text, margin: 5 }}>
        Status
      </Text>
      <SeperatorLine color={COLORS.MUTED} />
      <View style={styles.StatusRow}>
        <Checkbox
          disabled={false}
          value={ActiveToggle}
          onValueChange={(newValue) => setActiveToggle(newValue)}
        />
        <TouchableWithoutFeedback
          onPress={() => setActiveToggle(!ActiveToggle)}
        >
          <Text style={{ fontSize: 15, marginHorizontal: 5 }}>Active</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.StatusRow}>
        <Checkbox
          disabled={false}
          value={SuperActiveToggle}
          onValueChange={(newValue) => setSuperActiveToggle(newValue)}
        />
        <TouchableWithoutFeedback
          onPress={() => setSuperActiveToggle(!SuperActiveToggle)}
        >
          <Text style={{ fontSize: 15, marginHorizontal: 5 }}>
            Super Active
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.StatusRow}>
        <Checkbox
          disabled={false}
          value={BoredToggle}
          onValueChange={(newValue) => setBoredToggle(newValue)}
        />
        <TouchableWithoutFeedback onPress={() => setBoredToggle(!BoredToggle)}>
          <Text style={{ fontSize: 15, marginHorizontal: 5 }}>Bored</Text>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          width: "100%",

          alignItems: "center",
        }}
      >
        <Button text={"Generate"} onPress={onPress} loading={loading} />
      </View>
    </View>
  );
};

export default FilterBox;

const styles = StyleSheet.create({
  BoxContainer: {
    width: "100%",
    marginVertical: 25,
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  StatusRow: {
    flexDirection: "row",
    alignContent: "center",
    margin: 5,
  },
});
