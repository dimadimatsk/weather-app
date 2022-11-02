import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import geoSlice from './slices/geoSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    geo: geoSlice,
  },
});
