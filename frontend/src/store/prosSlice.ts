import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { ProsArgsTypes, ProsValuesTypes } from "../types/store.types.ts";

export const getPros = createAsyncThunk(
  "/pros/getPros",
  async (args: ProsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
      }&dobTo=${args?.dobTo || ""}&dobFrom=${args?.dobFrom || ""}&state=${
        args?.state || ""
      }&nationality=${args?.nationality || ""}&page=${
        args?.page || 0
      }&type=pro`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: ProsValuesTypes = {
  isLoading: true,
  pros: null,
};

export const prosSlice = createSlice({
  name: "pros",
  initialState,
  reducers: {
    reversePros: (state) => {
      if (state.pros) {
        state.pros = state.pros.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPros.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPros.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.pros = payload;
    });
    builder.addCase(getPros.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reversePros } = prosSlice.actions;
export default prosSlice.reducer;
