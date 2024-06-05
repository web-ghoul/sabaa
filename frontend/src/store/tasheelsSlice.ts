import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { TasheelsArgsTypes, TasheelsValuesTypes } from "../types/store.types";

export const getTasheels = createAsyncThunk(
  "/tasheels/getTasheels",
  async (args: TasheelsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/tasheels?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&type=${args?.type || ""}&status=${
        args?.status || ""
      }&gender=${args?.gender || ""}&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
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

const initialState: TasheelsValuesTypes = {
  isLoading: true,
  tasheels: null,
};

export const tasheelsSlice = createSlice({
  name: "tasheels",
  initialState,
  reducers: {
    reverseTasheels: (state) => {
      if (state.tasheels) {
        state.tasheels = state.tasheels.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasheels.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTasheels.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.tasheels = payload;
    });
    builder.addCase(getTasheels.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reverseTasheels } = tasheelsSlice.actions;
export default tasheelsSlice.reducer;
