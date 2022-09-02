import React from "react";

import Header from "../components/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import Listbar from "../components/Listbar";
import Player from "../../Player/index.js";

import songs from "D:/WEB/reactjs/MusicWeb/client/src/data/songs";

// import Playing from "../../Playing/index.js";
// import DataSongs from "D:/WEB/reactjs/music/src/data/songs.json";
//
// import { Songs } from "D:/WEB/reactjs/music/src/Context";import ListSongs from "../..//ListSong";
// import { useState } from "react";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
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
          <Listbar songs={songs} />
        </nav>
        <div className={cx("main-view")}>{children}</div>

        <div className={cx("playing-bar")}>
          <div className={cx("playlist")}>
            <Player />
            <a href="#focused" id="focus-link" hidden>
              Go to playing element
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DefaultLayout;
