import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import {
  ForecastSnapshot,
  DailyForecast,
  HourlyForecast,
  DetailsCard,
  LoadingSpinner,
} from "../components";
import { useGetWeatherDataQuery } from "../store/api";
import { useLocation } from "../hooks/useLocation";

export const Home: React.FC<any> = ({ route, navigation }) => {
  const { location, city, errorMsg, getLocation } = useLocation();
  const selectedCity = route?.params?.selectedCity;
  const { data, isLoading, isError } = useGetWeatherDataQuery(selectedCity || city);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <Text>Error fetching weather data</Text>;
  }

  const { coord } = data;

  return (
    <SafeAreaView>
      <Header title={selectedCity || city} navigation={navigation} />
      <View style={styles.container}>
        <ForecastSnapshot data={data} />
        <HourlyForecast coord={coord} />
        <DailyForecast coord={coord} />
        <DetailsCard
        details={data?.main}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  cardContainer: {
    margin: 10,
    padding: 12,
  },
});
