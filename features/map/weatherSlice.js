"use client";

import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "izmir",
    data: JSON.parse(localStorage.getItem("data") || null),
    weather: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },

    setData: (state, action) => {
      if (action.payload) {
        localStorage.setItem("data", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("data");
      }
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { setCity, setData, setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
