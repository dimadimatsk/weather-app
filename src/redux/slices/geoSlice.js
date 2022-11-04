import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGeoData = createAsyncThunk('geo/fetchGeoStatus', async (city) => {
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/search?city=${city}&apiKey=492a13bf2b5549489e78e7ce89418ad8`,
  );

  return data;
});

const initialState = {
  cities: [],
  status: 'success',
  cityName: '',
  lat: 1,
  lon: 1,
};

const geoSlice = createSlice({
  name: 'geo',
  initialState,
  reducers: {
    setCitiesDefault(state, action) {
      state.cities = action.payload;
      state.status = 'success';
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setCoordinates(state, action) {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    setCityName(state, action) {
      state.cityName = action.payload.formatted;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGeoData.pending, (state) => {
      state.status = 'loading';
      state.cities = [];
    });
    builder.addCase(fetchGeoData.fulfilled, (state, action) => {
      state.status = 'success';
      state.cities = action.payload.features;
    });
    builder.addCase(fetchGeoData.rejected, (state) => {
      state.status = 'error';
      state.cities = [];
    });
  },
});

export default geoSlice.reducer;
export const { setCitiesDefault, setStatus, setCoordinates, setCityName } = geoSlice.actions;
