import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { TasheelsCounterValuesTypes } from "../types/store.types.ts";

export const getTasheelsCounter = createAsyncThunk(
  "/tasheelsCounter/getTasheelsCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/tasheels/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: TasheelsCounterValuesTypes = {
  isLoading: true,
  tasheelsCounter: 0,
};

export const tasheelsCounterSlice = createSlice({
  name: "tasheelsCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasheelsCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTasheelsCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.tasheelsCounter = payload;
    });
    builder.addCase(getTasheelsCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default tasheelsCounterSlice.reducer;
