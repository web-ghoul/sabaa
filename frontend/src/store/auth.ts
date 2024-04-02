import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthValuesTypes } from "../types/store.types.ts";

export const getProfile = createAsyncThunk("/auth/getProfile", async () => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
  const userId = Cookies.get(`${import.meta.env.VITE_USER_ID_TITLE}`);
  const res = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/user/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
});

const initialState: AuthValuesTypes = {
  token: null,
  userId: null,
  user: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      Cookies.set(`${import.meta.env.VITE_TOKEN_TITLE}`, action.payload.token);
      Cookies.set(
        `${import.meta.env.VITE_USER_ID_TITLE}`,
        action.payload.userId
      );
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
      Cookies.remove(`${import.meta.env.VITE_TOKEN_TITLE}`);
      Cookies.remove(`${import.meta.env.VITE_USER_ID_TITLE}`);
    },
    setAuth: (state, action) => {
      if (action.payload) {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(getProfile.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { login, setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
