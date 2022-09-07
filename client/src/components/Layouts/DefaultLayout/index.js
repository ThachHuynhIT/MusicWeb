import React from "react";
import { selectSongByAlbum, setStatus } from "../../../actions";
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

const DefaultLayout = ({
  children,
  selectedSongList,

  setStatus,
  status,
}) => {
  const [value, setValue] = useState(false);

  const id = status != value ? "block-actie" : "";
  console.log(status);
  return (
    <React.Fragment>
      <div className={cx("warrper")}>
        <div className={cx("block")} id={cx(id)}>
          <div className={cx("block-container")}>
            <div className={cx("content")}>
              <div className={cx("img-content")}>
                <img src="https://i.scdn.co/image/ab67706f00000002a1c5958b0e50ec08114db10f"></img>
              </div>
              <div className={cx("text-content")}>
                <h2>Bắt đầu nghe bằng tài khoản miễn phí</h2>
                <button className={cx("btn-signup")}>Đăng ký Free</button>
                <p className={cx("title")}>
                  Bạn đã có tài khoản?
                  <button className={cx("btn-login")}>Đăng nhập</button>
                </p>
              </div>
            </div>
            <div
              className={cx("btn-remove")}
              onClick={() => {
                setStatus(false);
              }}
            >
              X
            </div>
          </div>
        </div>

        <div className={cx("header", "backgroung-color")}>
          <Header />
        </div>
        <nav className={cx("nav-bar")}>
          <Sidebar />
        </nav>
        <nav className={cx("nav-list")}>
          {value === false || selectedSongList === 0 ? (
            <>
              <img src="https://images.viblo.asia/9c2a1fb7-5b2b-4fa5-870d-c32262ab77ab.gif"></img>
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

    status: state.status,
  };
};

export default connect(mapStateToProps, {
  selectSongByAlbum,
  setStatus,
})(DefaultLayout);
