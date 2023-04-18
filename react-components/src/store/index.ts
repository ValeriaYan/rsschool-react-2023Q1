import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import usersReducer from './usersSlice';
import { charactersApi } from '../services/charactersService';

const rootReducer = combineReducers({
  search: searchReducer,
  users: usersReducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(charactersApi.middleware);
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
