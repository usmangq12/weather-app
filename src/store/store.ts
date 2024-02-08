import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './api';
import { geoApi } from './geoApi'; 

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [geoApi.reducerPath]: geoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    api.middleware,
    geoApi.middleware
  ),
});

setupListeners(store.dispatch);