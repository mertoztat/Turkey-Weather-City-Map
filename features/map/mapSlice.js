"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
});

export const {} = mapSlice.actions;

export default mapSlice.reducer;
