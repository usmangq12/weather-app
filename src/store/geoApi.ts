import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY;

export const geoApi = createApi({
    reducerPath: "geoApi",
    baseQuery: fetchBaseQuery({
      baseUrl: `${process.env.EXPO_PUBLIC_GEO_API_BASE_URL}`,
    }),
    endpoints: (builder) => ({
      searchCities: builder.query({
        query: ({ query, limit }: { query: string; limit: number }) =>
          `/direct?q=${query}&limit=${limit}&appid=${API_KEY}`,
          providesTags: (result, error, searchTerm) => [{ type: 'Search', id: searchTerm }],
      }),
    }),
  });

  export const { useSearchCitiesQuery } = geoApi;