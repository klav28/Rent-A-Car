import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action) {
        if (
          state.find(
            el => el.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          alert(`${action.payload.name} is already exists in contacts`);
          return;
        }
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(4),
          },
        };
      },
    },
    deleteEntry(state, action) {
      const index = state.findIndex(entry => entry.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { favoriteEntry } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
