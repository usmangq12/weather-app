import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

interface DetailCard {
  humidity: number;
  wind: number;
  pressure: number;
  visibility: number;
}

interface Props {
  details: DetailCard;
}

const TITLE = "Details";

export const DetailsCard: React.FC<Props> = ({ details }) => {
  const { humidity, wind, pressure, visibility } = details;

  return (
    <Card style={styles.container}>
      <Text style={styles.title}>{TITLE}</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="water" size={24} color="#F4F1DE" />
            <View>
              <Text style={styles.values}> {humidity}</Text>
              <Text style={styles.label}>Humidity</Text>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="gauge" size={24} color="#F4F1DE" />
            <View>
              <Text style={styles.values}>{pressure} hPa</Text>
              <Text style={styles.label}>Pressure</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#E07A5F",
    shadowColor: "#E07A5F",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 22,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#F4F1DE",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  values: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F4F1DE",
    textAlign: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
});
