import classNames from "classnames/bind";
import Item from "../Item";
import styles from "./Listbar.module.scss";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { selectSongByAlbum, selectListPlayer } from "../../../../actions";

const cx = classNames.bind(styles);

const Listbar = ({
  selectedSongList,
  chooseAlbum,
  songs,
  selectListPlayer,
  selectList,
}) => {
  console.log(chooseAlbum);
  if (chooseAlbum === 1) {
    songs = selectedSongList;
    selectListPlayer(selectedSongList);
    console.log(selectListPlayer(selectedSongList));
  }
  if (chooseAlbum === 0) {
    console.log(selectList);
    songs = selectList;
  }
  if (chooseAlbum != 1 && chooseAlbum != 0) {
    songs = [];
  }

  const songTags = songs.map((song, index) => {
    return <Item song={song} key={index} index={index} />;
  });
  return (
    <div className={cx("warrper")}>
      <div className={cx("header-bar")}>
        <h1 className={cx("titel", "backgroud")}>Danh sách phát</h1>
      </div>
      <div className={cx("list-bar")}>{songTags}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongList: state.selectedSongList,
    chooseAlbum: state.chooseAlbum,
    selectList: state.selectList,
  };
};

export default connect(mapStateToProps, {
  selectSongByAlbum,
  selectListPlayer,
})(Listbar);
