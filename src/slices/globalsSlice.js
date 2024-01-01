import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../redux/initialState";

export const globalsSlice = createSlice({
  name: "globals",
  initialState: initialState.globals,
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpened = action.payload;
    }
  },
  extraReducers(builder) {
  },
});

export const { toggleSidebar } = globalsSlice.actions;

export const globalsReducer = globalsSlice.reducer;
