import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    users: usersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
