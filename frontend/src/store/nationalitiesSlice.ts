import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { NationalitiesValuesTypes } from "../types/store.types.ts";

export const getNationalities = createAsyncThunk(
  "/nationalities/getNationalities",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/nationality`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: NationalitiesValuesTypes = {
  isLoading: true,
  nationalities: null,
};

export const nationalitiesSlice = createSlice({
  name: "nationalities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNationalities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNationalities.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.nationalities = payload;
    });
    builder.addCase(getNationalities.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default nationalitiesSlice.reducer;
