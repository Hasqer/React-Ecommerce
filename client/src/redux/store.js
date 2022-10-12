import { configureStore } from '@reduxjs/toolkit'
import login from "./slices/login";
import userInfo from './slices/userInfo';
import products from './slices/products';
import search from './slices/search';

export default configureStore({
  reducer: {
    login,
    userInfo,
    products,
    search
  }
})