import { connect, useDispatch } from "react-redux";

import { selectAlbum, setPlayerState } from "../../actions";

import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SongDetail.module.scss";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const SongDetail = ({ selectedAlbumId, playerState, selectedSongPlay }) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();

  const playImg = () => {
    console.log(playerState);

    if (playerState === 1 && selectedAlbumId.name === selectedSongPlay.album) {
      return (
        <div className={cx("album-img")}>
          <img
            src={selectedAlbumId.img}
            alt={selectedAlbumId.name}
            className={cx("play-img")}
          />
        </div>
      );
    } else {
      return (
        <div className={cx("album-img")}>
          <img
            src={selectedAlbumId.img}
            alt={selectedAlbumId.name}
            className={cx("pause-img")}
          />
        </div>
      );
    }
  };

  return (
    <div className={cx("song-detail")}>
      {/* {phaser()} */}
      {playImg()}
      <div className={cx("artist-img")}>
        <div className={cx("header", "pad")}>{selectedAlbumId.name}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedAlbumId: state.selectedAlbumId,
    playerState: state.playerState,
    selectedSongPlay: state.selectedSongPlay,
  };
};

export default connect(mapStateToProps, {
  setPlayerState,
  selectAlbum: selectAlbum,
})(SongDetail);
