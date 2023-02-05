import { createSlice } from '@reduxjs/toolkit';

import api from '../../utils/api';

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

export const addCardThunk = (card) => async (dispatch) => {
  try {
    const newCard = await api.addNewCard(card);
    dispatch(addCard(newCard));
  } catch (error) {
    console.log(error);
  }
};

export const removeCardThunk = (cardId) => async (dispatch) => {
  try {
    api.deleteCard(cardId);
    dispatch(removeCard(cardId));
  } catch (error) {
    console.log(error);
  }
};

export const likeCardThunk = (card, isLiked) => async (dispatch) => {
  try {
    const newCard = await api.toggleLikes(card._id, isLiked);
    dispatch(likeCard(newCard));
  } catch (error) {
    console.log(error);
  }
};

export const { setCards, addCard, removeCard, likeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
