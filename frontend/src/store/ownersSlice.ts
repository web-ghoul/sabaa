import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { OwnersArgsTypes, OwnersValuesTypes } from "../types/store.types.ts";

export const getOwners = createAsyncThunk(
  "/owners/getOwners",
  async (args: OwnersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    console.log(args);

    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${
        args?.limit || import.meta.env.VITE_LIMIT_PAGES
      }&date=${args?.date || ""}&state=${args?.state || ""}&nationality=${
        args?.nationality || ""
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

const initialState: OwnersValuesTypes = {
  isLoading: true,
  owners: null,
};

export const ownersSlice = createSlice({
  name: "owners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOwners.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOwners.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.owners = payload;
    });
    builder.addCase(getOwners.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default ownersSlice.reducer;
