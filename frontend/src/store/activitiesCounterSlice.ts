import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { ActivitiesCounterValuesTypes } from "../types/store.types.ts";

export const getActivitiesCounter = createAsyncThunk(
  "/activitiesCounter/getActivitiesCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/activity/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: ActivitiesCounterValuesTypes = {
  isLoading: true,
  activitiesCounter: 0,
};

export const activitiesCounterSlice = createSlice({
  name: "activitiesCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActivitiesCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getActivitiesCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.activitiesCounter = payload;
    });
    builder.addCase(getActivitiesCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default activitiesCounterSlice.reducer;
