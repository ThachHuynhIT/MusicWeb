import { createSlice } from '@reduxjs/toolkit'

const name = 'songPlay'

const initialState = {
  data: 0,
  loaded: false,
  error: false,
}

const songPlaySlice = createSlice({
  name,
  initialState,
  reducers: {
    SONG_SELECTED: (state, action) => {
      state.data = action.payload
    },
    SONG_SELECTED_BY_ID: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { SONG_SELECTED, SONG_SELECTED_BY_ID } = songPlaySlice.actions

export default songPlaySlice.reducer

export const selectedSongPlay = (state) => state.SongPlay
