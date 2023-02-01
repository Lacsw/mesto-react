import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    likeCard: (state, action) => {
      state.cards = state.cards.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    },
  },
});

export const { addCard, removeCard, likeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
