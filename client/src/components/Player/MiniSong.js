import { connect, useDispatch } from "react-redux";

import { selectSong, setPlayerState } from "../../actions";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Player.module.scss";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const MiniSong = ({
  selectedSongId = -1,
  defaultSong,
  selectSong,
  songs,
  playerState,
  song,
  index,
}) => {
  const dispatch = useDispatch();
  const songData = () => {
    if (selectedSongId >= 0) {
      return (
        <>
          <div className={cx("artist-img")}>
            <div className={cx("header", "pad")}>
              {songs[selectedSongId].name}
            </div>
            <p className={cx("artist-name", "pad")}>
              {songs[selectedSongId].author}
            </p>
          </div>
        </>
      );
    } else {
      selectSong(defaultSong);
      return null;
    }
  };

  return (
    <div className={cx("song-detail")}>
      <div className={cx("player-img")}>
        <img
          src={songs[selectedSongId].links.images[1].url}
          alt={songs[selectedSongId].name}
          className={cx("pause-img")}
        />
      </div>
      {songData()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    songs: state.songs,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, {
  setPlayerState,
  selectSong: selectSong,
})(MiniSong);
