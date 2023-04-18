import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import User from '../models/IUser';

type UserState = {
  users: User[];
};

const initialState: UserState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addUser } = usersSlice.actions;
