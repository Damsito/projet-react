import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggle: (state, action) => {
      return state.includes(action.payload.id)
        ? state.filter((id) => id !== action.payload.id)
        : [...state, action.payload.id];
    },
  },
});

export const matchesSlice = createSlice({
  name: "matches",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...action.payload.matches];
    },
  },
});
export const matchSlice = createSlice({
  name: "match",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return action.payload.match;
    },
  },
});
export const teamSlice = createSlice({
  name: "teams",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...action.payload.teams];
    },
  },
});
export const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...action.payload.countries];
    },
  },
});
