//song

export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const selectSongById = (id) => {
  return {
    type: "SONG_SELECTED_BY_ID",
    payload: id,
  };
};

export const setPlayerState = (val) => {
  return {
    type: "PLAYER_STATE_SELECTED",
    payload: val,
  };
};

export const setVolume = (val) => {
  return {
    type: "SET_VOLUME",
    payload: val,
  };
};

export const setDuration = (val) => {
  return {
    type: "SET_DURATION",
    payload: val,
  };
};

export const setCurrentTime = (val) => {
  return {
    type: "SET_CURRENT_TIME",
    payload: val,
  };
};
<<<<<<< Updated upstream
export const setTime = (val) => {
  return {
    type: "SET_CURRENT_TIME",
    payload: val,
  };
};
//albums
export const selectAlbum = (album) => {
  return {
    type: "ALBUM_SELECTED",
    payload: album,
  };
};
export const selectAlbumById = (id) => {
  return {
    type: "ALBUM_SELECTED_BY_ID",
    payload: id,
  };
};

export const getAlbum = (album) => {
  return {
    type: "GET_ALBUM",
    payload: album,
  };
};
export const getAlbumSongs = (songs) => {
  return {
    type: "GET_ALBUM_SONGS",
    payload: songs,
  };
};

export const toLinkAlbum = (link) => {
  return {
    type: "ALBUM_SELECTED",
    payload: link,
  };
};
=======
>>>>>>> Stashed changes
