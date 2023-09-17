import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './carSlice';
// import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'rent-favorites',
  storage,
  whitelist: ['favorite'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorite: favoriteReducer,
  })
);

export const store = configureStore({
  reducer: {
    cars: carReducer,
    // filter: filterReducer,
  },
});
