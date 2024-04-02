import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { JobsArgsTypes, JobsValuesTypes } from "../types/store.types.ts";

export const getJobs = createAsyncThunk(
  "/jobs/getJobs",
  async (args: JobsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/job-title?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${
        args?.limit || import.meta.env.VITE_LIMIT_PAGES
      }&page=${args?.page || 0}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: JobsValuesTypes = {
  isLoading: true,
  jobs: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    reverseJobs: (state) => {
      if (state.jobs) {
        state.jobs = state.jobs.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getJobs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload;
    });
    builder.addCase(getJobs.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reverseJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
