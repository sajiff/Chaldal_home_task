import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import FilterBox from "../components/FilterBox";
import COLORS from "../constants/colors";
import GenerateApi from "../api/GenerateApi";

const { width, height } = Dimensions.get("screen");

export default function SelectFilterOption({ navigation }) {
  const [Fromdate, setFromdate] = useState(new Date());
  const [Todate, setTodate] = useState(new Date());
  const [ActiveToggle, setActiveToggle] = useState(false);
  const [SuperActiveToggle, setSuperActiveToggle] = useState(false);
  const [BoredToggle, setBoredToggle] = useState(false);
  const [Loading, setLoading] = useState(false);

  const onChangeFrom = (event, selectedDate) => {
    //console.log(event);
    const currentDate = selectedDate || Fromdate;
    //setFromshow(false);
    setFromdate(currentDate);
  };

  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate || Todate;
    //setToshow(false);
    setTodate(currentDate);
  };

  const HandleGenerate = () => {
    const data = GenerateApi(
      Fromdate,
      Todate,
      ActiveToggle,
      SuperActiveToggle,
      BoredToggle
    );
    //console.log(data);
    setLoading(false);
    navigation.navigate("ShowUserGrid", {
      data: data,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>User Analayzer</Text>
      <Text style={{ fontSize: 15, color: COLORS.BLACK }}>
        Select filters to generate report
      </Text>
      <FilterBox
        Fromdate={Fromdate}
        onChangeFrom={onChangeFrom}
        Todate={Todate}
        onChangeTo={onChangeTo}
        ActiveToggle={ActiveToggle}
        setActiveToggle={setActiveToggle}
        SuperActiveToggle={SuperActiveToggle}
        setSuperActiveToggle={setSuperActiveToggle}
        BoredToggle={BoredToggle}
        setBoredToggle={setBoredToggle}
        onPress={() => {
          setLoading(true);
          HandleGenerate();
        }}
        loading={Loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  TitleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.text,
    marginVertical: 10,
  },
});
