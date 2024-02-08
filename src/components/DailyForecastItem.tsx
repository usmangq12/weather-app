import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

interface ForecastItem {
  time: string;
  temperature: string;
}

interface DailyForecastCardProps {
  item: ForecastItem;
}

export const DailyForecastItem: React.FC<DailyForecastCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item?.temperature}</Text>
      <Text style={styles.subtitle}>{item?.temperature}</Text>
      {/* <View style={styles.weatherContainer}> */}
      <Ionicons name="sunny" size={24} color="#000000" />
        {/* <Ionicons name={getWeatherIcon(weatherCondition)} size={24} color="#000000" /> */}
        <Text style={styles.weatherText}>{item?.temperature}</Text>
      {/* </View> */}
    </View>
  );
};

const getWeatherIcon = (weatherCondition: string) => {
  
  // if (weatherCondition === 'sunny') return 'sunny-icon';
  // else if (weatherCondition === 'rainy') return 'rainy-icon';
  return 'sunny'; 
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    marginLeft: 5,
  },
});

 
