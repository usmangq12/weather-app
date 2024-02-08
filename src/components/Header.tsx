import React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
  navigation: any;
}

const UPDATED = "Updated 20 min ago";

const Header: React.FC<HeaderProps> = ({ title,navigation }) => {
  return (
    <View style={styles.header}>
         <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={18} color="#F4F1DE" />
          <Text style={styles.location}>{UPDATED}</Text>
        </View>
      </View>
      <View style={styles.locationContainer}>
      <Pressable onPress={()=>navigation.navigate("city")}>
        <Ionicons name="business" size={24} color="#F4F1DE" style={styles.icon} />
        </Pressable>
        <Ionicons name="ellipsis-vertical" size={24} color="#F4F1DE" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
   
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E07A5F',
    shadowColor: "#E07A5F",
    shadowOffset: {
      width: 0, // corresponds to the 0px X-axis offset
      height: 4, // corresponds to the 4px Y-axis offset
    },
    shadowOpacity: 0.7, // This is an approximate conversion from the B2 hex opacity value
    shadowRadius: 22, //
    
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    color: '#F4F1DE',
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    paddingTop:4,
    gap:2
  },
  location: {
    fontSize: 16,
    color: '#F4F1DE',
    marginRight: 5,
  },
  icon: {
    marginLeft: 10,
  },
});

export default Header;
