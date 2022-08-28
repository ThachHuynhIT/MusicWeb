import { combineReducers } from "redux";
import albums from "../data/albums.json";
const albumsReducer = () => {
  return albums;
};
const selectedAlbum = (selectedAlbum = 0, action) => {
  if (action.type === "ALBUM_SELECTED") {
    return action.payload;
  }

  return selectedAlbum;
};
const getAlbumSongsReducer = (songs = [], action) => {
  if (action.type === "GET_ALBUM_SONGS") {
    return action.payload.songs;
  }
  return songs;
};

export default combineReducers({
  albums: albumsReducer,
  selectedAlbum: selectedAlbum,
  getAlbumSongs: getAlbumSongsReducer,
});
