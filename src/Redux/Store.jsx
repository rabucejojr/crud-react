import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/ToDo/counterSlice'

const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
export default Store
