import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { connect, useDispatch } from "react-redux";
import { selectSong } from "../../../../actions";
import * as PlayService from "../../../../service/playService";
import classNames from "classnames/bind";
import styles from "./Item.module.scss";
const cx = classNames.bind(styles);

const Item = ({ song, index, selectSong, selectedSongPlay, playerState }) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();

  const [songsList, setSongsList] = useState([]);

  const savePlay = async () => {
    const response = await PlayService.saveAlbum({
      albumName: song.album,
      songId: song._id,
    });
  };
  const handleClick = () => {
    savePlay();

    selectSong(song);
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
  };

  // Set song as active
  const now_selected = selectedSongPlay._id === song._id ? "active" : "";

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
      onClick={handleClick}
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
