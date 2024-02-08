import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_WEATHER_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (city: string | null) =>
        `/weather?q=${city}&appid=${API_KEY}`,
    }),
    getHourlyForecast: builder.query({
      query: ({ lat, lon }: { lat: number | null; lon: number | null; }) =>
        `/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    }),
    getDailyForecast: builder.query({
      query: ({ lat, lon, cnt }: { lat: number | null; lon: number | null; cnt: number }) =>
        `/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${API_KEY}`,
    }),
  }),
});

export const { useGetWeatherDataQuery, useGetHourlyForecastQuery, useGetDailyForecastQuery } = api;
