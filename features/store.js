"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "@/features/map/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
