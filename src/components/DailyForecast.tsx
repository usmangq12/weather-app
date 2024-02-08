import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { DailyForecastItem, ForeCastCard, LoadingSpinner } from "../components";
import { Card } from "react-native-paper";
import { useGetDailyForecastQuery } from "../store/api";

interface ICoord {
  lat: number;
  lon: number;
}

interface HourlyForecastCardProps {
  coord: ICoord;
}

const TITLE = "DAILY FORECAST";

export const DailyForecast: React.FC<HourlyForecastCardProps> = ({
  coord,
}) => {
  const { lat, lon } = coord;

  const {
    data: dailyData,
    isLoading: isDailyLoading,
    isError: isDailyError,
  } = useGetDailyForecastQuery({ lat: lat, lon: lon, cnt: 6 });

  if (isDailyLoading) {
    return <LoadingSpinner/>;
  }

  if (isDailyError) {
    return (
      <ForeCastCard title={TITLE}>
        <Text style={styles.errorContainer}>Something went wrong !</Text>
      </ForeCastCard>
    );
  }

  return (
    <ForeCastCard title={TITLE}>
      <FlatList
        data={dailyData}
        renderItem={(item: any) => <DailyForecastItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ForeCastCard>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  cardContainer: {
    margin: 10,
    padding: 10,
  },
  errorContainer: {
    margin: 10,
    padding: 10,
    color:"#F4F1DE",
    fontSize:20
  },
});
