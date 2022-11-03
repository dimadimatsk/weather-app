import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherStatus', async (params) => {
  const { lat, lon, dateMinusFiveDays, datePlusFiveDays } = params;
  const { data } = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/${dateMinusFiveDays}/${datePlusFiveDays}?unitGroup=metric&include=days&key=9XG423H95UG9FRTBSY55FH5M4&lang=ru&contentType=json`,
  );

  return data;
});

const initialState = {
  status: 'idle',
  res: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.status = 'loading';
      state.res = [];
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.status = 'success';
      state.res = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.status = 'error';
      state.res = [];
    });
  },
});

export const { setSearchCityValue } = searchSlice.actions;
export default searchSlice.reducer;
