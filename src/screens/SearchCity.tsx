import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSearchCitiesQuery } from "../store/geoApi";
import { Searchbar } from "react-native-paper";
import { LoadingSpinner } from "../components";
import { useDebounce } from "../hooks/useDebounce";

const LIMIT = 4;

export const SearchCity: React.FC<any> = ({ navigation }) => {
  const [query, setQuery] = useState<string>("");
  const { debouncedValue } = useDebounce(query, 1000);
  const { data, isError, isLoading } = useSearchCitiesQuery({
    query: debouncedValue,
    limit: LIMIT,
  });

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleSelect = (cityName: string) => {
    setQuery(cityName);
    navigation.navigate('home', { selectedCity: cityName });
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 12 }}>
      <View style={{ marginTop: 12 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={handleChange}
          value={query}
          placeholderTextColor="#F4F1DE"
          iconColor="#F4F1DE"
          style={{
            backgroundColor: "#E07A5F",
            borderColor: "#E07A5F",
            borderWidth: 1,
            borderRadius: 8,
          }}
          inputStyle={{ color: "white" }}
        />
      </View>
      {query && !isLoading && data && (
        <View style={{ paddingHorizontal: 3 }}>
          <View style={{ borderColor: "#E07A5F", marginTop: 2 }}>
            <FlatList
              data={data || []}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item?.name)}
                  style={{
                    backgroundColor: "#E07A5F",
                    marginBottom: 1,
                    borderRadius: 4,
                  }}
                >
                  <View style={{ padding: 6 }}>
                    <Text
                      style={{
                        color: "#F4F1DE",
                        fontWeight: "800",
                        fontSize: 18,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: "#F4F1DE",
                        fontWeight: "normal",
                        fontSize: 12,
                      }}
                    >
                      {item.state} {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}

      {isLoading && <LoadingSpinner />}

      {isError && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#E07A5F", fontSize: 24 }}>
            No Results Found
          </Text>
        </View>
      )}
    </View>
  );
};
