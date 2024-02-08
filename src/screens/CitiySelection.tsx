import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const Item: React.FC<any> = ({ navigation, itemDetails }) => {
  const { areaName, temperature, status } = itemDetails;

  const handleSelect = (cityName: string) => {
    navigation.navigate("home", { selectedCity: cityName });
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handleSelect(areaName)}>
        <View
          style={{
            backgroundColor: "#E07A5F",
            borderRadius: 12,
            overflow: "hidden",
            padding: 8,
          }}
        >
          <Text style={styles.title}>{areaName}</Text>
          <Text style={styles.temperatue}>{temperature}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const data = [
  {
    areaName: "Multan",
    temperature: "16℃",
    status: "smoke",
  },
  {
    areaName: "Lahore",
    temperature: "12℃",
    status: "clear",
  },
  {
    areaName: "Islamabad",
    temperature: "8℃",
    status: "cloudy",
  },
  {
    areaName: "Skardu",
    temperature: "16℃",
    status: "cloudy",
  },
  {
    areaName: "Karachi",
    temperature: "12℃",
    status: "clear",
  },
  {
    areaName: "Skardu",
    temperature: "8℃",
    status: "cloudy",
  },
];

export const CitiesSelection: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("search")}
      >
        <AntDesign name="pluscircle" size={48} color="white" />
      </Pressable>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item navigation={navigation} itemDetails={item} />}
          keyExtractor={(item) => item?.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  pressable: {
    position: "absolute",
    bottom: 24,
    right: 24,
    zIndex: 999,
    backgroundColor: "#E07A5F",
    borderRadius: 100,
  },
  safeAreaContainer: {
    flex: 1,
    padding: 12,
    position: "relative",
  },
  item: {
    marginVertical: 8,
  },
  temperatue: {
    color: "#F4F1DE",
    fontSize: 22,
    marginBottom: 2,
    fontWeight: "600",
  },
  title: {
    color: "#F4F1DE",
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 12,
  },
  status: {
    color: "#F4F1DE",
    fontSize: 16,
    fontStyle: "normal",
    marginBottom: 8,
    marginLeft: 4,
  },
});
