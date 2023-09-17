import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [fetchCars.rejected]: handleRejected,
    // [addContact.pending]: handlePending,
    // [addContact.fulfilled](state, action) {
    //   handleFulfilled(state);
    //   state.items.push(action.payload);
    // },
    // [addContact.rejected]: handleRejected,
    // [deleteContact.pending]: handlePending,
    // [deleteContact.fulfilled](state, action) {
    //   handleFulfilled(state);
    //   const index = state.items.findIndex(
    //     entry => entry.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    // [deleteContact.rejected]: handleRejected,
  },
});

export const carReducer = carSlice.reducer;
