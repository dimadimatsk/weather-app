import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'Tomsk',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchCityValue: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setSearchCityValue } = searchSlice.actions;
export default searchSlice.reducer;
