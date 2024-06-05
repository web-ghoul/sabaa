import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { EChannelsArgsTypes, EChannelsValuesTypes } from "../types/store.types";

export const getEChannels = createAsyncThunk(
  "/eChannels/getEChannels",
  async (args: EChannelsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/e-channel?search=${
        (args && args.search) || ""
      }&sort=${args?.sort || ""}&type=${args?.type || ""}&status=${
        args?.status || ""
      }&gender=${args?.gender || ""}&limit=${
        args?.limit
          ? args.limit == -1
            ? ""
            : args.limit
          : import.meta.env.VITE_LIMIT_PAGES
      }&page=${args?.page || 0}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: EChannelsValuesTypes = {
  isLoading: true,
  eChannels: null,
};

export const eChannelsSlice = createSlice({
  name: "eChannels",
  initialState,
  reducers: {
    reverseEChannels: (state) => {
      if (state.eChannels) {
        state.eChannels = state.eChannels.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEChannels.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEChannels.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.eChannels = payload;
    });
    builder.addCase(getEChannels.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export const { reverseEChannels } = eChannelsSlice.actions;
export default eChannelsSlice.reducer;
