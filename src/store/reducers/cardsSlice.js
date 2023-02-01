import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    addCard: (state, action) => {
      state.cards.unshift(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card._id !== action.payload);
    },
    likeCard: (state, action) => {
      state.cards = state.cards.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    },
  },
});

export const { setCards, addCard, removeCard, likeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
