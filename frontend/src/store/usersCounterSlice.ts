import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { UsersCounterValuesTypes } from "../types/store.types.ts";

export const getUsersCounter = createAsyncThunk(
  "/usersCounter/getUsersCounter",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/user/counters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: UsersCounterValuesTypes = {
  isLoading: true,
  usersCounter: 0,
};

export const usersCounterSlice = createSlice({
  name: "usersCounter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsersCounter.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      let total = 0;
      payload.map((role: { count: number }) => {
        total += role.count;
      });
      state.usersCounter = total;
    });
    builder.addCase(getUsersCounter.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default usersCounterSlice.reducer;
