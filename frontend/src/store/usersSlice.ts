import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { UsersArgsTypes, UsersValuesTypes } from "../types/store.types.ts";

export const getUsers = createAsyncThunk(
  "/users/getUsers",
  async (args: UsersArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/user?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&limit=${
        args?.limit || import.meta.env.VITE_LIMIT_PAGES
      }&role=${args?.role || ""}&status=${args?.status || ""}&page=${
        args?.page || 0
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: UsersValuesTypes = {
  isLoading: true,
  users: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    });
    builder.addCase(getUsers.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default usersSlice.reducer;
