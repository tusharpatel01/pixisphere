import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch photographers
export const fetchPhotographers = createAsyncThunk(
  'photographers/fetchPhotographers',
  async () => {
    const response = await fetch('https://mock-api-1-1ayv.onrender.com/photographers');
    const data = await response.json();
    return data;
  }
);

const photographersSlice = createSlice({
  name: 'photographers',
  initialState: {
    photographers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotographers.fulfilled, (state, action) => {
        state.loading = false;
        state.photographers = action.payload;
      })
      .addCase(fetchPhotographers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default photographersSlice.reducer;
