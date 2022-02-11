import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/components/redux/TodoSlice';

export default configureStore({
  reducer: {
      todos:todoReducer
  },
})