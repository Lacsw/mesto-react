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

export const setCardsThunk =
  () => async (dispatch, getState, extraArgument) => {
    const { api } = extraArgument;
    try {
      const initialCards = await api.getInitialCards();
      dispatch(setCards(initialCards));
    } catch (error) {
      console.log(error);
    }
  };

export const addCardThunk =
  (card) => async (dispatch, getState, extraArgument) => {
    const { api } = extraArgument;
    try {
      const newCard = await api.addNewCard(card);
      dispatch(addCard(newCard));
    } catch (error) {
      console.log(error);
    }
  };

export const removeCardThunk =
  (cardId) => async (dispatch, getState, extraArgument) => {
    const { api } = extraArgument;
    try {
      api.deleteCard(cardId);
      dispatch(removeCard(cardId));
    } catch (error) {
      console.log(error);
    }
  };

export const likeCardThunk =
  (card, isLiked) => async (dispatch, getState, extraArgument) => {
    const { api } = extraArgument;
    try {
      const newCard = await api.toggleLikes(card._id, isLiked);
      dispatch(likeCard(newCard));
    } catch (error) {
      console.log(error);
    }
  };

export const { setCards, addCard, removeCard, likeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
