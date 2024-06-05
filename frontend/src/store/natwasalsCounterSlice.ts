import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { NatwasalsCounterValuesTypes } from "../types/store.types.ts";

export const getNatwasalsCounter = createAsyncThunk(
  "/natwasalsCounter/getNatwasalsCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/natwasals/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: NatwasalsCounterValuesTypes = {
  isLoading: true,
  natwasalsCounter: 0,
};

export const natwasalsCounterSlice = createSlice({
  name: "natwasalsCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNatwasalsCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNatwasalsCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.natwasalsCounter = payload;
    });
    builder.addCase(getNatwasalsCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default natwasalsCounterSlice.reducer;
