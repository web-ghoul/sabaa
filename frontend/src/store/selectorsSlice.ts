import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { SelectorsValuesTypes } from "../types/store.types.ts";

export const getSelectors = createAsyncThunk("/selectors/getSelectors", async () => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
  const res = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/selectors?selector=all`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
});

const initialState: SelectorsValuesTypes = {
  isLoading: true,
  selectors: null,
};

export const selectorsSlice = createSlice({
  name: "selectors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSelectors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSelectors.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.selectors = payload;
    });
    builder.addCase(getSelectors.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default selectorsSlice.reducer;
