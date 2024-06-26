import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { UserValuesTypes } from "../types/store.types.ts";

export const getUser = createAsyncThunk(
  "/user/getUser",
  async (args: { id: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/user/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: UserValuesTypes = {
  isLoading: true,
  user: null,
  activities: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.activities = payload.activities;
    });
    builder.addCase(getUser.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default userSlice.reducer;
