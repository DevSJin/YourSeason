import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
// auth
import AuthReducer from 'features/auth/authSlice'
// consulting
import ConsultantListReducer from 'features/consulting/consultantListSlice'
// mypage
import MypageSlice from "features/mypage/mypageSlice";
// common
import AvatarReducer from "common/avatar/avatarSlice";
import ColorSetReducer from 'common/colorset/colorSetSlice'

const reducers = combineReducers({
  auth: AuthReducer,
  mypage: MypageSlice,
  consultantList: ConsultantListReducer,
  avatar: AvatarReducer,
  colorSetList: ColorSetReducer,
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