import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { OwnerValuesTypes } from "../types/store.types.ts";

export const getOwner = createAsyncThunk(
  "/owner/getOwner",
  async (args: { id: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/owner/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: OwnerValuesTypes = {
  isLoading: true,
  owner: null,
  companies: null,
};

export const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOwner.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOwner.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.owner = payload.owner;
      state.companies = payload.companies;
    });
    builder.addCase(getOwner.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default ownerSlice.reducer;
