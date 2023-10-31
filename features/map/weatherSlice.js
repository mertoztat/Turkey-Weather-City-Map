"use client";

import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "izmir",
    weather: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },

    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { setCity, setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
