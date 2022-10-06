import { configureStore } from '@reduxjs/toolkit'
import login from "./slices/login";
import userInfo from './slices/userInfo';

export default configureStore({
  reducer: {
    login,
    userInfo
  }
})