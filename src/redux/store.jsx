import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './api/home_slice'

export const store = configureStore({
  reducer: {
        home:homeReducer, 
        //home page                                       
  },
})