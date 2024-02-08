import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";
import { CitiesSelection } from "./src/screens/CitiySelection";
import { SearchCity } from "./src/screens/SearchCity";

const routes = [
  {
    name: "home",
    headerTitle: "",
    screen: Home,
    options: {
      headerShown: false,
      headerTitle: "",
    },
  },
  {
    name: "city",
    headerTitle: "Select City",
    screen: CitiesSelection,
    options: {
      headerShown: true,
      headerTitle: "Select City ",
      headerStyle: {
        backgroundColor: "#E07A5F",
        shadowColor: "#E07A5F",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 22,
      },
      headerTintColor: "#F4F1DE",
    },
  },
  {
    name: "search",
    headerTitle: "Search City",
    screen: SearchCity,
    options: {
      headerShown: true,
      headerTitle: "Search City ",
      headerStyle: {
        backgroundColor: "#E07A5F",
        shadowColor: "#E07A5F",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 22,
      },
      headerTintColor: "#F4F1DE",
    },
  },
];

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0F0F0F" barStyle={"default"} />
      <Stack.Navigator initialRouteName="main">
        {routes.map(({ name, screen, options }, index) => (
          <Stack.Screen
            key={`route-${index}`}
            name={name}
            component={screen}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
