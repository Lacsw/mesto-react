import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

import api from '../utils/api';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});

export default store;
