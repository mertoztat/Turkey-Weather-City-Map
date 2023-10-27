"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mapCounter from "@/features/map/mapSlice";

const rootReducer = combineReducers({
  map: mapCounter,
});

export const store = configureStore({
  reducer: rootReducer,
});
