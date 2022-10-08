import { configureStore } from '@reduxjs/toolkit'
import login from "./slices/login";
import userInfo from './slices/userInfo';
import products from './slices/products';

export default configureStore({
  reducer: {
    login,
    userInfo,
    products
  }
})