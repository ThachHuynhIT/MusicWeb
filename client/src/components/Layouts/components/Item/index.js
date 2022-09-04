import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { connect, useDispatch } from "react-redux";
// import { connect, useDispatch } from "react-redux";

// import { selectSong } from "D:/WEB/reactjs/MusicWeb/client/src/actions";
import { selectSong } from "../../../../actions";

import classNames from "classnames/bind";
import styles from "./Item.module.scss";
const cx = classNames.bind(styles);

const Item = ({ song, index, selectSong, selectedSongPlay, playerState }) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();

  const selector = () => {
    return (
      <a draggable="false" href={song.url}>
        <svg role="img" height="24" width="24" viewBox="0 0 24 24">
          <path
            d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    );
  };

  // Set song as active
  const now_selected = selectedSongPlay._id === song.id ? "active" : "";

  // set the gif
  const phaser = () => {
    if (selectedSongPlay._id === song._id && playerState) {
      return (
        <div>
          <img alt="" src="/playing.gif" id={cx("focused")} />
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={song.links.images[1].url}
            alt={song.name}
            className={cx("icon-img")}
          />
        </div>
      );
    }
  };
  return (
    <div
      id={cx(now_selected)}
      className={cx("song-item")}
      // onMouseOver={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
      onClick={() => {
        selectSong(song);
        dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
      }}
    >
      {phaser()}
      <div className={cx("name")}>{song.name}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongPlay: state.selectedSongPlay,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, { selectSong })(Item);
