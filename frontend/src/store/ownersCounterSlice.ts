import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { OwnersCounterValuesTypes } from "../types/store.types.ts";

export const getOwnersCounter = createAsyncThunk(
  "/ownersCounter/getOwnersCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: OwnersCounterValuesTypes = {
  isLoading: true,
  ownersCounter: 0,
};

export const ownersCounterSlice = createSlice({
  name: "ownersCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOwnersCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOwnersCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.ownersCounter = payload;
    });
    builder.addCase(getOwnersCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default ownersCounterSlice.reducer;
