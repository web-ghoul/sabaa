import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { ProValuesTypes } from "../types/store.types.ts";

export const getPro = createAsyncThunk(
  "/pro/getPro",
  async (args: { id: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: ProValuesTypes = {
  isLoading: true,
  pro: null,
  companies: null,
  activities: null,
  eChannel: null,
  natwasal: null,
  tasheel: null,
};

export const proSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPro.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPro.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.pro = payload.owner;
      state.companies = payload.companies;
      state.activities = payload.activities;
      state.eChannel = payload.eChannel;
      state.natwasal = payload.eNatwasal;
      state.tasheel = payload.eTasaheel;
    });
    builder.addCase(getPro.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default proSlice.reducer;
