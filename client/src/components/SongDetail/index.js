import { connect, useDispatch } from "react-redux";

<<<<<<< Updated upstream
import { selectAlbum, setPlayerState } from "../../actions";
=======
import { selectSong, setPlayerState } from "../actions";
>>>>>>> Stashed changes
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SongDetail.module.scss";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const SongDetail = ({
<<<<<<< Updated upstream
  selectedAlbumId = -1,
  defaultAlbum,
  selectAlbum,
  albums,
  playerState,
  album,
=======
  selectedSongId = -1,
  defaultSong,
  selectSong,
  songs,
  playerState,
  song,
>>>>>>> Stashed changes
  index,
}) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();
  const phaser = () => {
<<<<<<< Updated upstream
    if (selectedAlbumId === album.id && playerState) {
=======
    if (selectedSongId === song.id && playerState) {
>>>>>>> Stashed changes
      return (
        <div>
          <img alt="" src="/playing.gif" id="focused" />
        </div>
      );
    } else {
      return <div>{index + 1}</div>;
    }
  };
  const playImg = () => {
    if (!playerState) {
      return (
        <div className={cx("album-img")}>
          <img
<<<<<<< Updated upstream
            src={albums[selectedAlbumId].links.images[1].url}
            alt={albums[selectedAlbumId].name}
=======
            src={songs[selectedSongId].links.images[1].url}
            alt={songs[selectedSongId].name}
>>>>>>> Stashed changes
            className={cx("pause-img")}
          />
        </div>
      );
    } else {
      return (
        <div className={cx("album-img")}>
          <img
<<<<<<< Updated upstream
            src={albums[selectedAlbumId].links.images[1].url}
            alt={albums[selectedAlbumId].name}
=======
            src={songs[selectedSongId].links.images[1].url}
            alt={songs[selectedSongId].name}
>>>>>>> Stashed changes
            className={cx("play-img")}
          />
        </div>
      );
    }
  };

  const songData = () => {
<<<<<<< Updated upstream
    if (selectedAlbumId >= 0) {
      return (
        <>
          <div className={cx("artist-img")}>
            <div className={cx("header", "pad")}>
              {albums[selectedAlbumId].name}
            </div>

            {/* <p className={cx("artist-name", "pad")}>
              {songs[selectedSongId].author}
            </p> */}
=======
    if (selectedSongId >= 0) {
      return (
        <>
          {/* <div className={cx("now-playing")}>
            <div id={cx("now-playing")}>
             
            </div>
            <div className={cx("header")}>{songs[selectedSongId].name}</div>
          </div> */}

          <div className={cx("artist-img")}>
            <div className={cx("header", "pad")}>
              {songs[selectedSongId].name}
            </div>
            {/* <img
              src={songs[selectedSongId].links.images[0].url}
              alt={songs[selectedSongId].author}
              className={cx("pad")}
            /> */}
            <p className={cx("artist-name", "pad")}>
              {songs[selectedSongId].author}
            </p>
>>>>>>> Stashed changes
          </div>
        </>
      );
    } else {
<<<<<<< Updated upstream
      selectAlbum(defaultAlbum);
=======
      selectSong(defaultSong);
>>>>>>> Stashed changes
      return null;
    }
  };

  return (
    <div
      className={cx("song-detail")}
      // style={{
      //   backgroundImage: `url(
      //     ${songs[selectedSongId].links.images[1].url}
      //   )`,
      // }}
    >
      {/* {phaser()} */}
      {playImg()}
      {songData()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
<<<<<<< Updated upstream
    selectedAlbumId: state.selectedAlbumId,
    defaultAlbum: state.albums[0],
    albums: state.albums,
=======
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    songs: state.songs,
>>>>>>> Stashed changes
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, {
  setPlayerState,
<<<<<<< Updated upstream
  selectAlbum: selectAlbum,
=======
  selectSong: selectSong,
>>>>>>> Stashed changes
})(SongDetail);
