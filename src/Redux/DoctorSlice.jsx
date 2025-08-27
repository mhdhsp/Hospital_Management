import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDoctor = createAsyncThunk(
  "fetchDoctor",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("https://localhost:7023/api/Doctor");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const DoctorSlice = createSlice({
  name: "fetchDoctor",
  initialState: {
    loading: false,
    doctors: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.doctors = action.payload;
        state.loading = false;
      })
      .addCase(fetchDoctor.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default DoctorSlice.reducer;
