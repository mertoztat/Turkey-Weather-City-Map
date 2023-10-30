"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "izmir",
    weather: "",
    temp: "",
    data: JSON.parse(localStorage.getItem("data") || null),
    name: "",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setTemp: (state, action) => {
      state.temp = action.payload;
    },
    setData: (state, action) => {
      if (action.payload) {
        localStorage.setItem("data", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("data");
      }
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setCity, setWeather, setTemp, setData, setName } =
  weatherSlice.actions;

export default weatherSlice.reducer;
