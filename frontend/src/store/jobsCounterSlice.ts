import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { JobsCounterValuesTypes } from "../types/store.types.ts";

export const getJobsCounter = createAsyncThunk(
  "/jobsCounter/getJobsCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/Job-Title/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.count;
  }
);

const initialState: JobsCounterValuesTypes = {
  isLoading: true,
  jobsCounter: 0,
};

export const jobsCounterSlice = createSlice({
  name: "jobsCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobsCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getJobsCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.jobsCounter = payload;
    });
    builder.addCase(getJobsCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default jobsCounterSlice.reducer;
