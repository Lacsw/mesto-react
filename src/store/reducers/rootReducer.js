import { combineReducers } from 'redux';
import cardsSlice from './cardsSlice';

const rootReducer = combineReducers({
  cards: cardsSlice,
});

export default rootReducer;