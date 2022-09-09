import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import * as songsService from "../../service/songsService";
import { selectSong, selectSongByAlbum, setFocus } from "../../actions";
import classNames from "classnames/bind";
import styles from "./SongItem.module.scss";
import List from "../Popper/List";
import * as PlayService from "../../service/playService";
import * as UserService from "../../service/userService";
import { faCircle, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const SongItem = ({
  song,
  selectedSongPlay,
  playerState,
  selectSong,
  selectSongByAlbum,
  setFocus,
}) => {
  const [songsList, setSongsList] = useState([]);
  const [user, setUser] = useState(null);
  const [songPlay, setSongPlay] = useState([]);
  const [listPlay, setListPlay] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await songsService.getSongsFromAlbum(song.album);

      setSongsList(response);
    };
    fetchApi();
  }, []);

  const savePlay = async () => {
    const response = await PlayService.saveAlbum({
      albumName: song.album,
      songId: song._id,
    });
    console.log(response);
  };
  const handleClick = () => {
    savePlay();
    selectSong(song);
    selectSongByAlbum(songsList);

    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
  };
  const dispatch = useDispatch();
  const selector = () => {
    return (
      <a draggable="false" href={song.url} class={cx("icon-dow")}>
        <svg role="img" height="24" width="24" viewBox="0 0 24 24">
          <path
            d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    );
  };

  const now_selected = selectedSongPlay._id === song._id ? "actie" : "";

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
    <>
      <div
        id={cx(now_selected)}
        className={cx("song-item")}
        // onClick={() => {
        // selectSong(song);
        // selectSongByAlbum(songsList);

        // dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
        // }}
        onClick={handleClick}
      >
        {phaser()}
        <div className={cx("name")}>{song.name}</div>
        <div className={cx("author")}>{song.singer}</div>

        <div className={cx("selector")}>
          <form class={cx("hover-like")} onClick={() => {}}>
            <List />
          </form>

          {selector()}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongPlay: state.selectedSongPlay,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, {
  selectSong,
  selectSongByAlbum,
  setFocus,
})(SongItem);
