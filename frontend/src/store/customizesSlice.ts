import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { CustomizesValuesTypes } from "../types/store.types.ts";

export const getCustomizes = createAsyncThunk(
  "/customizes/getCustomizes",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/customize`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: CustomizesValuesTypes = {
  isLoading: true,
  customizes: undefined,
};

export const customizesSlice = createSlice({
  name: "customizes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomizes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCustomizes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.customizes = payload;
    });
    builder.addCase(getCustomizes.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default customizesSlice.reducer;
