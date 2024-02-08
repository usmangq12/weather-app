import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { LocationObject, LocationGeocodedAddress } from 'expo-location';

interface UseLocationResult {
  location: LocationObject | null;
  city: string | null;
  errorMsg: string | null;
  getLocation: () => Promise<void>;
}

export const useLocation = (): UseLocationResult => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let locationResult = await Location.getCurrentPositionAsync({});
    setLocation(locationResult);
    getCityName(locationResult.coords.latitude, locationResult.coords.longitude);
  };

  const getCityName = async (latitude: number, longitude: number) => {
    try {
      const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
      const city = geocode[0]?.city || geocode[0]?.subregion; // Fallback to subregion if city is not available
      setCity(city);
    } catch (error) {
      setErrorMsg('Unable to fetch city name');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, city, errorMsg, getLocation };
};
