import { createSlice } from '@reduxjs/toolkit'

const name = 'play'

const initialState = {
  playerState: 0,
  loaded: false,
  error: false,
}

const playerSlice = createSlice({
  name,
  initialState,
  reducers: {
    PLAYER_STATE_SELECTED: (state, action) => {
      if (!action.payload) {
        state.playerState = (action.payload + 1) % 2
      } else {
        state.playerState = action.payload
      }
    },
  },
})

export const { PLAYER_STATE_SELECTED } = playerSlice.actions

export default playerSlice.reducer

export const selectedSongPlay = (state) => state.SongPlay
