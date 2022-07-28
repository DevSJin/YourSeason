import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import LoginReducer from '../components/login/loginSlice';
import ModifyReducer from '../components/modify/modifySlice';
import UserReviewReducer from '../components/consultantmypage/userReviewSlice';
import consultantProfileReducer from '../components/consultantmypage/consultantProfileSlice';
import SignUpReducer from '../components/signup/signUpSlice';
import myPageReducer from '../components/mypage/myPageSlice';
import ConsultantListReducer from '../components/consultantList/consultantListSlice'

const reducers = combineReducers({
	signup: SignUpReducer,
  login: LoginReducer,
  modify: ModifyReducer,
  review: UserReviewReducer,
	customerMyPage: myPageReducer,
  consultantprofile: consultantProfileReducer,
	consultantList: ConsultantListReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
