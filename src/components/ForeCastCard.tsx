import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

interface ListProps<T> {
  children: React.ReactNode;
  title:string
}

export const ForeCastCard = <T,>({ title, children }: ListProps<T>) => (
  <Card style={styles.cardContainer}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </Card>
);

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
    color:"#F4F1DE"
  },
  cardContainer: {
    // margin
    marginBottom:15,
    padding: 10,
    backgroundColor: '#E07A5F',
    
  },
  errorContainer: {
    margin: 10,
    padding: 10,
  },
});
