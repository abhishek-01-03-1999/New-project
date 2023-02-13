import {combineReducers} from 'redux';
// // here we will import our all reducers
import userInformationReducer from './Userinformation';

export default combineReducers({
  userSignUpInfo: userInformationReducer,
});
