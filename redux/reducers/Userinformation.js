import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'userInformationReducer',
  initialState: {
    userInfo: {},
  },
  reducers: {
    storeUserInformation: (state, action) => {
      state.userInfo = {...state.userInfo, ...action.payload};
      // return {
      //   userInfo: action.payload,
      // };
    },
  },
});

const {actions, reducer} = counterSlice;
export const {storeUserInformation} = actions;
export default reducer;
