import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
export const LoadingSpinner = () => {
  return  (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#E07A5F;
" />
    </View>
  )
};
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'E07A5F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});