import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { NatwasalsArgsTypes, NatwasalsValuesTypes } from "../types/store.types";

export const getNatwasals = createAsyncThunk(
  "/natwasals/getNatwasals",
  async (args: NatwasalsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/natwasals?search=${
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

const initialState: NatwasalsValuesTypes = {
  isLoading: true,
  natwasals: null,
};

export const natwasalsSlice = createSlice({
  name: "natwasals",
  initialState,
  reducers: {
    reverseNatwasals: (state) => {
      if (state.natwasals) {
        state.natwasals = state.natwasals.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNatwasals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNatwasals.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.natwasals = payload;
    });
    builder.addCase(getNatwasals.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reverseNatwasals } = natwasalsSlice.actions;
export default natwasalsSlice.reducer;
