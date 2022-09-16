import React from "react";
import {
  selectSongByAlbum,
  setStatus,
  setFocus,
  changePlaylist,
} from "../../../actions";
import Header from "../components/Header";
import { connect } from "react-redux";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Listbar from "../components/Listbar";
import Player from "../../Player/index.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as songsService from "../../../service/songsService";
import * as UserService from "../../../service/userService";
import * as PlayListService from "../../../service/playListService";
import classNames from "classnames/bind";
import Message from "../../Message";
import { Link } from "react-router-dom";
import FlexComponent from "../../FlexComponent";
const cx = classNames.bind(styles);

const DefaultLayout = ({
  children,
  selectedSongList,
  setStatus,
  status,
  focus,
  setFocus,
  changePlaylist,
  userPlaylist,
  playlistId,
}) => {
  const value = UserService.isLog();
  return (
    <React.Fragment>
      <div className={cx("warrper")}>
        <FlexComponent />

        <div className={cx("header", "backgroung-color")}>
          <Header />
        </div>
        <nav className={cx("nav-bar")}>
          <Sidebar />
        </nav>
        <nav className={cx("nav-list")}>
          {value === false || selectedSongList === 0 ? (
            <>
              <div className={cx("apict")}>
                <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-music-carnival-poster-picture-promotion-image_165139.jpg"></img>
              </div>
            </>
          ) : (
            <>
              <Listbar />
            </>
          )}
        </nav>
        <div className={cx("main-view")}>{children}</div>

        <div className={cx("playing-bar")}>
          <div className={cx("playlist")}>
            {value === false || selectedSongList === 0 ? (
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
    focus: state.focus,
    status: state.status,
    userPlaylist: state.userPlaylist,
    playlistId: state.playlistId,
  };
};

export default connect(mapStateToProps, {
  selectSongByAlbum,
  setStatus,
  setFocus,
  changePlaylist,
})(DefaultLayout);
