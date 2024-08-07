import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { AlertsValuesTypes } from "../types/store.types.ts";

export const getAlerts = createAsyncThunk("/alerts/getAlerts", async () => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/alert`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

const initialState: AlertsValuesTypes = {
  isLoading: true,
  alerts: null,
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlerts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAlerts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.alerts = payload.data;
    });
    builder.addCase(getAlerts.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default alertsSlice.reducer;
