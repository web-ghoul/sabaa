import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { SelectorValuesTypes } from "../types/store.types.ts";

export const getSelector = createAsyncThunk(
  "/selector/getSelector",
  async (query: { selector: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/selectors?selector=${
        query && query.selector
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

const initialState: SelectorValuesTypes = {
  isLoading: true,
  selector: null,
};

export const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSelector.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSelector.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.selector = payload;
    });
    builder.addCase(getSelector.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default selectorSlice.reducer;
