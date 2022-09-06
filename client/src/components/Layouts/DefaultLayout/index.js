import React from "react";
import { selectSong, selectSongByAlbum } from "../../../actions";
import Header from "../components/Header";
import { connect } from "react-redux";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Listbar from "../components/Listbar";
import Player from "../../Player/index.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as songsService from "../../../service/songsService";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const DefaultLayout = ({ children, selectedSongList, selectedSongPlay }) => {
  console.log(selectedSongList);
  return (
    <React.Fragment>
      <div className={cx("warrper")}>
        <div className={cx("header", "backgroung-color")}>
          <Header />
        </div>
        <nav className={cx("nav-bar")}>
          <Sidebar />
        </nav>
        <nav className={cx("nav-list")}>
          {selectedSongPlay === 0 || selectedSongList === 0 ? (
            <></>
          ) : (
            <>
              <Listbar />
            </>
          )}
        </nav>
        <div className={cx("main-view")}>{children}</div>

        <div className={cx("playing-bar")}>
          <div className={cx("playlist")}>
            {selectedSongPlay === 0 || selectedSongList === 0 ? (
              <></>
            ) : (
              <>
                <Player />
              </>
            )}

            <a href="#focused" id="focus-link" hidden>
              Go to playing element
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
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
})(DefaultLayout);
