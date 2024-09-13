import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  avatar: '',
  collectionId: '',
  collectionName: '',
  created: '',
  email: '',
  emailVisibility: false,
  id: '',
  name: '',
  updated: '',
  username: '',
  verified: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
