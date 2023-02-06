import { combineReducers } from 'redux';
import cardsSlice from './cardsSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  cards: cardsSlice,
  user: userSlice,
});

export default rootReducer;
