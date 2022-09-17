import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models/user';

interface CardState {
  isVisible: boolean;
  user: IUser;
}

const initialState: CardState = {
  isVisible: false,
  user: {} as IUser,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    openUserCard(state, action: PayloadAction<IUser>) {
      state.isVisible = true;
      state.user = action.payload;
    },
    closeUserCard(state) {
      state.isVisible = false;
      state.user = {} as IUser;
    },
  },
});

export const { openUserCard, closeUserCard } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
