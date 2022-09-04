import { connect, useDispatch } from "react-redux";

import { selectSong, setPlayerState } from "../../actions";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Player.module.scss";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const MiniSong = ({
  selectedSongPlay,
  defaultSong,
  selectSong,
  songs,
  playerState,
  song,
  index,
}) => {
  const dispatch = useDispatch();
  const img = () => {
    return selectedSongPlay.links.images[1].url;
  };
  return (
    <div className={cx("song-detail")}>
      <div className={cx("player-img")}>
        <img
          src={img()}
          alt={selectedSongPlay.name}
          className={cx("pause-img")}
        />
      </div>
      <div className={cx("artist-img")}>
        <div className={cx("header", "pad")}>{selectedSongPlay.name}</div>
        <p className={cx("artist-name", "pad")}>{selectedSongPlay.singer}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongPlay: state.selectedSongPlay,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, {
  setPlayerState,
  selectSong: selectSong,
})(MiniSong);
