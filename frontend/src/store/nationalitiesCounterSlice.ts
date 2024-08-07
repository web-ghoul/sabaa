import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { NationalitiesCounterValuesTypes } from "../types/store.types.ts";

export const getNationalitiesCounter = createAsyncThunk(
  "/nationalitiesCounter/getNationalitiesCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/nationalities/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: NationalitiesCounterValuesTypes = {
  isLoading: true,
  nationalitiesCounter: 0,
};

export const nationalitiesCounterSlice = createSlice({
  name: "nationalitiesCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNationalitiesCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNationalitiesCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.nationalitiesCounter = payload;
    });
    builder.addCase(getNationalitiesCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default nationalitiesCounterSlice.reducer;
