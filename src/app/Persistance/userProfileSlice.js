import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  collectionId: '',
  collectionName: '',
  created: '',
  updated: '',
  user_id: '',
  total_storage: '',
  used_storage: '',
  plan_type: '',
  subscription_end_date: '',
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile(state, action) {
      return { ...state, ...action.payload };
    },
    updateUserProfile(state, action) {
      return { ...state, ...action.payload };
    },
    clearUserProfile(state) {
      return initialState;
    },
  },
});

export const { setUserProfile, updateUserProfile, clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
