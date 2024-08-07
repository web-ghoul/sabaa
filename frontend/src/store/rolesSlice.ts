import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {  RolesValuesTypes } from "../types/store.types.ts";

export const getRoles = createAsyncThunk(
  "/roles/getRoles",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/permissions`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: RolesValuesTypes = {
  isLoading: true,
  roles: null,
};

export const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getRoles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRoles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.roles = payload;
    });
    builder.addCase(getRoles.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default rolesSlice.reducer;
