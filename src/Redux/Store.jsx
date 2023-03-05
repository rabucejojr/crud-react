import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Features/ToDo/counterSlice'

const Store = configureStore({
  reducer: {
    counter: counterSlice,
    
  },
})
export default Store
