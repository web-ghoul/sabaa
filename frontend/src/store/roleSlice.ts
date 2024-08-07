import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { RoleValuesTypes } from "../types/store.types.ts";

export const getRole = createAsyncThunk(
  "/role/getRole",
  async (args: { id: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/permissions/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: RoleValuesTypes = {
  isLoading: true,
  role: null,
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRole.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRole.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.role = payload;
    });
    builder.addCase(getRole.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default roleSlice.reducer;
