import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  ActivitiesArgsTypes,
  ActivitiesValuesTypes,
} from "../types/store.types.ts";

export const getActivities = createAsyncThunk(
  "/activities/getActivities",
  async (args?: ActivitiesArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/activity?page=${
        args?.page || 0
      }&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
      }&to=${args?.to || ""}&from=${args?.from || ""}&operation=${
        args?.operation || ""
      }&type=${args?.type || ""}&search=${args?.search || ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: ActivitiesValuesTypes = {
  isLoading: true,
  activities: null,
};

export const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActivities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getActivities.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.activities = payload;
    });
    builder.addCase(getActivities.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default activitiesSlice.reducer;
