import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { EChannelsCounterValuesTypes } from "../types/store.types.ts";

export const getEChannelsCounter = createAsyncThunk(
  "/eChannelsCounter/getEChannelsCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/e-channel/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: EChannelsCounterValuesTypes = {
  isLoading: true,
  eChannelsCounter: 0,
};

export const eChannelsCounterSlice = createSlice({
  name: "eChannelsCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEChannelsCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEChannelsCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.eChannelsCounter = payload;
    });
    builder.addCase(getEChannelsCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default eChannelsCounterSlice.reducer;
