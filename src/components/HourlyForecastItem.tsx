import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

interface Clouds {
  all: number;
}

interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  pod: string;
}

interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

interface ITem {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Main;
  pop: number;
  sys: Sys;
  visibility: number;
  wind: Wind;
}

interface HourlyForecastItemProps {
  item: ITem;
}

export const HourlyForecastItem: React.FC<HourlyForecastItemProps> = ({
  item,
}) => {
  const unixTimestampToTime = (unixTimestamp: number): string => {
    const date = new Date(unixTimestamp * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const period = hours < 12 ? "AM" : "PM";

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${period}`;
  };
  
  const date = unixTimestampToTime(item?.dt);

  const tempCelsius = (item?.main?.temp - 273.15).toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.data}>{date}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="sunny" size={24} color="#F4F1DE" />
      </View>
      <View style={styles.row}>
        <Text style={styles.data}>{tempCelsius} °C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    color: "#F4F1DE",
  },
});
