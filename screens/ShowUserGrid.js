import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import GenerateApi from "../api/GenerateApi";
import FilterBox from "../components/FilterBox";
import COLORS from "../constants/colors";

const { width, height } = Dimensions.get("screen");

const ShowUserGrid = ({ route }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [Fromdate, setFromdate] = useState(new Date());
  const [Todate, setTodate] = useState(new Date());
  const [ActiveToggle, setActiveToggle] = useState(false);
  const [SuperActiveToggle, setSuperActiveToggle] = useState(false);
  const [BoredToggle, setBoredToggle] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(route.params.data);
  const [SearchedData, setSearchedData] = useState(null);

  // useEffect(() => {
  //   setData(route.params.data);
  // }, []);

  const onChangeSearch = (query) => {
    if (query.length > 0) {
      const d = Data.filter((a) => {
        let name = a.name.toLowerCase();
        return name.includes(query);
      });
      //console.log(d);
      setSearchedData(d);
      setSearchQuery(query);
    } else {
      setSearchedData(null);
      //console.log("null");
      setSearchQuery(query);
    }
  };

  const renderEditFilter = () => (
    <View
      style={{
        alignItems: "flex-end",
        padding: 10,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontSize: 20, color: COLORS.text, margin: 5 }}>
          Edit Filter
        </Text>
        <FontAwesome
          name="sliders"
          size={24}
          color={COLORS.text}
          style={{ margin: 5 }}
        />
      </TouchableOpacity>
    </View>
  );

  const renderResultBox = ({ item }) => (
    <View style={styles.resultBoxContainer}>
      <View
        style={{
          width: width * 0.45,
          height: width * 0.4,
          backgroundColor: "white",
        }}
      >
        <Image
          source={{
            uri: item.pictureUrl,
          }}
          style={{ width: width * 0.45, height: width * 0.4 }}
          resizeMode="cover"
        />
        <View style={styles.resultBoxStatus}>
          <Text style={{ color: "white" }}>{item.status}</Text>
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
      </View>
    </View>
  );

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
    setData(data);
    setModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {renderEditFilter()}
        <View>
          <Searchbar
            placeholder="Search by name"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.SearchBar}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            paddingBottom: 150,
          }}
        >
          <FlatList
            data={SearchedData ? SearchedData : Data}
            renderItem={renderResultBox}
            keyExtractor={(item) => item.name}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Modal
          animationType="slide"
          //transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <View
              style={{
                alignItems: "flex-end",
                padding: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => setModalVisible(false)}
              >
                <AntDesign name="close" size={35} color={COLORS.text} />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 20, color: COLORS.text }}>
                Edit Filter
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
                onPress={HandleGenerate}
                loading={Loading}
              />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShowUserGrid;

const styles = StyleSheet.create({
  SearchBar: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: "transparent",
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  resultBoxContainer: {
    width: width * 0.45,
    height: height * 0.3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
    margin: 5,
    marginVertical: 10,
  },
  resultBoxStatus: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
    margin: 10,
    padding: 5,
  },
  modalView: {
    width: width,
    height: height,
  },
});
