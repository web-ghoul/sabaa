import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { OwnersArgsTypes, OwnersValuesTypes } from "../types/store.types.ts";

export const getOwners = createAsyncThunk(
  "/owners/getOwners",
  async (args: OwnersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${
        args?.limit || import.meta.env.VITE_LIMIT_PAGES
      }&dobTo=${args?.dobTo || ""}&dobFrom=${args?.dobFrom || ""}&state=${
        args?.state || ""
      }&nationality=${args?.nationality || ""}&page=${args?.page || 0}`,
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
  reducers: {
    reverseOwners: (state) => {
      if (state.owners) {
        state.owners = state.owners.reverse();
      }
    },
  },
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

export const { reverseOwners } = ownersSlice.actions;
export default ownersSlice.reducer;
