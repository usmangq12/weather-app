import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

interface Weather {
  description: string;
}

interface Main {
  temp: number;
  feels_like: number;
}

interface Rain {
  "1h"?: number;
}

interface ForecastSnapshotProps {
  data: {
    main: Main;
    weather: Weather[];
    rain?: Rain;
  };
}

export const ForecastSnapshot: React.FC<ForecastSnapshotProps> = ({ data }) => {
  const { main, weather, rain } = data;
  const tempCelsius = (main.temp - 273.15).toFixed(1);
  const feelsLikeCelsius = (main.feels_like - 273.15).toFixed(1);
  const weatherDescription = weather[0].description;
  const rainChances = rain ? `${rain["1h"]}%` : "0%";

  // Animations for icons
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <View style={styles.content}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text style={styles.temperature}>{tempCelsius}°C</Text>
          <Text style={styles.description}>{weatherDescription}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.infoContainer}>
            <FontAwesome5 name="cloud-rain" size={16} color="#F4F1DE" />
            <Text style={styles.detailText}>{rainChances}</Text>
          </View>

          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="human" size={20} color="#F4F1DE" />
            <Text style={styles.detailText}>{feelsLikeCelsius}°C</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 50,
    backgroundColor: "transparent",
    borderWidth: 0,
    elevation: 0,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#E07A5F",
  },
  description: {
    fontSize: 24,
    fontWeight: "600",
    color: "#E07A5F",
  },
  details: {
    alignItems: "center",
    justifyContent: "space-around",
    // width: "100%",
    gap: 4,
  },
  detailText: {
    marginLeft: 8,
    color: "#F4F1DE",
    fontSize: 16,
    fontWeight: "600",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "space-around",
    width: 90,
    padding: 5,
    backgroundColor: "#E07A5F",
    shadowColor: "#E07A5F",
    shadowOffset: {
      width: 0, 
      height: 4, 
    },
    shadowOpacity: 0.7, 
    shadowRadius: 22, 
  },
});
