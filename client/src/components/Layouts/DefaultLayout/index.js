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
const cx = classNames.bind(styles);

const DefaultLayout = ({
  children,
  selectedSongList,
  setStatus,
  status,
  focus,
  setFocus,
  changePlaylist,
}) => {
  const value = UserService.isLog();
  const id_block = status === true ? "block-actie" : "";
  const id_focus = focus === true ? "block-actie" : "";
  const [showResult, setShowResult] = useState(true);
  const [playList, setPlayList] = useState({
    name: "",
    img: "",
  });

  useEffect(() => {
    const fetchApi = async () => {
      const response = await PlayListService.getPlayList();

      changePlaylist(response);
    };
    fetchApi();
  }, []);
  const fepi = async () => {
    const response = await PlayListService.getPlayList();
    console.log(response);
    changePlaylist(response);
  };

  const onChange = (e) => {
    e.preventDefault();
    const newPlayList = { ...playList };
    newPlayList[e.target.name] = e.target.value;
    setPlayList(newPlayList);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const variable = {
      name: playList.name,
      img: playList.img,
    };
    if (variable != undefined) {
      PlayListService.createPlayList(variable);

      const timerId = setTimeout(() => {
        fepi();
        clearTimeout(timerId);
        setFocus(false);
      }, 500);
    }
  };

  return (
    <React.Fragment>
      <div className={cx("warrper")}>
        {!value ? (
          <>
            <div className={cx("block")} id={cx(id_block)}>
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
          </>
        ) : (
          <>
            <div className={cx("block")} id={cx(id_focus)}>
              <div className={cx("list-container")}>
                <div className={cx("content")}>
                  <div className={cx("img-content")}>
                    <img src="https://media.proprofs.com/images/QM/user_images/2734691/1589295044.gif"></img>
                  </div>
                  <div className={cx("text-content")}>
                    <h2>Tạo danh sách phát cho riêng bạn</h2>
                    <form
                      className={cx("post-form")}
                      name="crete_playlist"
                      noValidate="noValidate"
                      onSubmit={onSubmit}
                    >
                      <div className={cx("group-main")}>
                        <div className={cx("group-main")}>
                          <div className={cx("title-group")}>
                            <label for="" className={cx("label-title-list")}>
                              <span>Tên danh sách </span>
                            </label>
                          </div>
                          <input
                            className={cx("input-value")}
                            type="text"
                            placeholder="Từ 3 dến 16 ký tự"
                            name="name"
                            autoFocus={true}
                            value={playList.name}
                            onChange={onChange}
                          ></input>
                        </div>
                      </div>

                      <div className={cx("group-main")}>
                        <div className={cx("title-group")}>
                          <label for="" className={cx("label-title-list")}>
                            <span>Chọn ảnh</span>
                          </label>
                        </div>
                        <input
                          className={cx("input-value")}
                          accept="image/*"
                          type="file"
                          name="img"
                          value={playList.img}
                          onChange={onChange}
                          required
                        ></input>
                      </div>
                      <div className={cx("btn-form")}>
                        <button type="submit" class={cx("btn-submit")}>
                          <div class={cx("btn-submit-title")}>
                            Lưu danh sách
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className={cx("btn-remove")}
                  onClick={() => {
                    setFocus(false);
                  }}
                >
                  X
                </div>
              </div>
            </div>
          </>
        )}

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
    focus: state.focus,
    status: state.status,
  };
};

export default connect(mapStateToProps, {
  selectSongByAlbum,
  setStatus,
  setFocus,
  changePlaylist,
})(DefaultLayout);
