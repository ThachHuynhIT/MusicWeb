import { connect, useDispatch } from "react-redux";

import { selectAlbum, setPlayerState } from "../../actions";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SongDetail.module.scss";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const SongDetail = ({
  selectedAlbumId = -1,
  defaultAlbum,
  selectAlbum,
  albums,
  playerState,
  album,
  index,
}) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();
  const phaser = () => {
    if (selectedAlbumId === album.id && playerState) {
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
            src={albums[selectedAlbumId].links.images[1].url}
            alt={albums[selectedAlbumId].name}
            className={cx("pause-img")}
          />
        </div>
      );
    } else {
      return (
        <div className={cx("album-img")}>
          <img
            src={albums[selectedAlbumId].links.images[1].url}
            alt={albums[selectedAlbumId].name}
            className={cx("play-img")}
          />
        </div>
      );
    }
  };

  const songData = () => {
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
          </div>
        </>
      );
    } else {
      selectAlbum(defaultAlbum);
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
    selectedAlbumId: state.selectedAlbumId,
    defaultAlbum: state.albums[0],
    albums: state.albums,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, {
  setPlayerState,
  selectAlbum: selectAlbum,
})(SongDetail);
