import { createSlice } from '@reduxjs/toolkit';

import api from '../../utils/api';

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const getUserInfoThunk = () => async (dispatch) => {
  const userData = await api.getUserInfo();
  dispatch(setUserInfo(userData));
};

export const setUserThunk = (userInfo) => async (dispatch) => {
  const newUserInfo = await api.setUserInfo(userInfo);
  dispatch(setUserInfo(newUserInfo));
};

export const updateAvatarThunk = (link) => async (dispatch) => {
  const newUserInfo = await api.updateAvatar(link);
  dispatch(setUserInfo(newUserInfo));
};

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
