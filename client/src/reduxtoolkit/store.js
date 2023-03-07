import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerReducer'
import songPlayReducer from './songPlayReducer'

// const initialState = {};
const stored = configureStore({
  reducer: {
    player: playerReducer,
    songPlay: songPlayReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
})

export default stored
