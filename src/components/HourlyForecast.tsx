import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { HourlyForecastItem, ForeCastCard, LoadingSpinner } from ".";
import { useGetHourlyForecastQuery } from "../store/api";

interface ICoord {
  lat: number;
  lon: number;
}

interface HourlyForecastCardProps {
  coord: ICoord;
}

const TITLE = "HOURLY FORECAST";

export const HourlyForecast: React.FC<HourlyForecastCardProps> = ({
  coord,
}) => {
  const { lat, lon } = coord;

  const {
    data: hourlyData,
    isLoading: isHourlyLoading,
    isError: isHourlyError,
  } = useGetHourlyForecastQuery({ lat: lat, lon: lon });

  if (isHourlyLoading) {
    return <LoadingSpinner />;
  }

  if (isHourlyError) {
    return (
      <ForeCastCard title={TITLE}>
        <Text style={styles.errorContainer}>Something went wrong...</Text>
      </ForeCastCard>
    );
  }

  return (
    <ForeCastCard title={TITLE}>
      <FlatList
        style={styles.cardContainer}
        data={hourlyData.list}
        renderItem={(item: any) => <HourlyForecastItem item={item?.item} />}
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
    padding: 10,
  },
  errorContainer: {
    padding: 10,
  },
});
