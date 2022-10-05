import { configureStore } from '@reduxjs/toolkit'
import myText from "./slices/mytext";

export default configureStore({
  reducer: {
    myText
  }
})