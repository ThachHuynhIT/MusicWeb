import classNames from "classnames/bind";
import Item from "../Item";
import styles from "./Listbar.module.scss";
import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { selectSongByAlbum, selectListPlayer } from "../../../../actions";

const cx = classNames.bind(styles);

const Listbar = ({ selectedSongList }) => {
  const songTags = selectedSongList.map((song, index) => {
    if (selectedSongList === 0) {
      <></>;
    } else {
      return <Item song={song} key={index} index={index} />;
    }
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
    selectedSongPlay: state.selectedSongPlay,
  };
};

export default connect(mapStateToProps, {
  selectSongByAlbum,
})(Listbar);
