import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { BASE_URL } from "src/config/base_url";

const initialState = {
  value: 1000,
  name: "hello",
  age: 49,

  isServiceListLoading: false,
  serviceList: [],
  serviceListError: null,

  isRegistrationLoading: false,
  isGallaryListLoading:false,
  gallaryList:[],
  gallaryListError:null
};

// Fetch Service List
export const fetchServiceList = createAsyncThunk(
  "home/fetchServiceList",
  async (_, { rejectWithValue }) => {
    // api

    try {
      const response = await axios.get(`${BASE_URL}/service`);

      console.log("service response", response);

      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Could not fetch Service list";
      return rejectWithValue(errorMessage);
    }
  }
);
// Add Registration

export const addRegistation = createAsyncThunk(
  "home/addRegistration",
  async (data, { rejectWithValue }) => {
    // api

    console.log("sending data to databse");
    try {
      const response = await axios.post(`${BASE_URL}/registration`, {data});

      console.log("register resposne ", response);

      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage = err?.response?.data?.message || "Failed to register";
      return rejectWithValue(errorMessage);
    }
  }
);


//fetch gallary list
export const fetchGallaryList = createAsyncThunk(
  "home/fetchGallaryList",
  async (_, { rejectWithValue }) => {
    

    try {
      const response = await axios.get(`${BASE_URL}/gallary`);

      console.log("gallary response", response);

      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || "Could not fetch Service list";
      return rejectWithValue(errorMessage);
    }
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,

 
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceList.pending, (state) => {
        state.isServiceListLoading = true;
      })
      .addCase(fetchServiceList.fulfilled, (state, action) => {
        state.isServiceListLoading = false;
        state.serviceList = action?.payload;
      })
      .addCase(fetchServiceList.rejected, (state, action) => {
        state.isServiceListLoading = false;
        state.serviceListError = action?.payload;
      })
      // Add registration
      .addCase(addRegistation.pending, (state) => {
        state.isRegistrationLoading = true;
      })
      .addCase(addRegistation.fulfilled, (state, action) => {
        state.isRegistrationLoading = false;
      })
      .addCase(addRegistation.rejected, (state, action) => {
        state.isRegistrationLoading = false;
      })

  //fetch gallary list
      .addCase(fetchGallaryList.pending, (state) => {
        state.isGallaryListLoading = true;
      })
      .addCase(fetchGallaryList.fulfilled, (state, action) => {
        state.isGallaryListLoading = false;
        state.gallaryList = action?.payload;
      })
      .addCase(fetchGallaryList.rejected, (state, action) => {
        state.isGallaryListLoading = false;
        state.gallaryListError = action?.payload;
      })
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;
