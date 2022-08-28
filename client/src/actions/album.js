//album

export const selectAlbum = (album) => {
  return {
    type: "ALBUM_SELECTED",
    payload: album,
  };
};
export const selectAlbumId = (id) => {
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
