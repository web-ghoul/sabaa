import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { CustomersCounterValuesTypes } from "../types/store.types.ts";

export const getCustomersCounter = createAsyncThunk(
  "/customersCounter/getCustomersCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner/counters?type=customer`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: CustomersCounterValuesTypes = {
  isLoading: true,
  customersCounter: 0,
};

export const customersCounterSlice = createSlice({
  name: "customersCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomersCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCustomersCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.customersCounter = payload;
    });
    builder.addCase(getCustomersCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default customersCounterSlice.reducer;
