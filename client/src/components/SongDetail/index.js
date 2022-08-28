import { connect, useDispatch } from "react-redux";

import { selectSong, setPlayerState } from "../actions";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SongDetail.module.scss";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const SongDetail = ({
  selectedSongId = -1,
  defaultSong,
  selectSong,
  songs,
  playerState,
  song,
  index,
}) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();
  const phaser = () => {
    if (selectedSongId === song.id && playerState) {
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
            src={songs[selectedSongId].links.images[1].url}
            alt={songs[selectedSongId].name}
            className={cx("pause-img")}
          />
        </div>
      );
    } else {
      return (
        <div className={cx("album-img")}>
          <img
            src={songs[selectedSongId].links.images[1].url}
            alt={songs[selectedSongId].name}
            className={cx("play-img")}
          />
        </div>
      );
    }
  };

  const songData = () => {
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
          </div>
        </>
      );
    } else {
      selectSong(defaultSong);
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
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    songs: state.songs,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, {
  setPlayerState,
  selectSong: selectSong,
})(SongDetail);
