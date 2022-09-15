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
  const id_block = status === true ? "block-actie" : "";
  const id_focus = focus === 1 ? "block-actie" : "";
  const id_focus_change = focus === 2 ? "block-actie" : "";
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
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
        setLoading(true);
        setMessage({
          msgBody: "Tạo danh sách phát thành công",
          msgError: false,
        });
      }, 500);
      const timerLoading = setTimeout(() => {
        clearTimeout(timerLoading);
        setFocus(false);
        setLoading(false);
      }, 2000);
    }
  };

  const onChangeSubmit = (e) => {
    e.preventDefault();
    const variable = {
      name: playList.name,
      img: playList.img,
    };
    if (variable !== undefined) {
      PlayListService.changePlayList(playlistId, variable);

      const timerId = setTimeout(() => {
        fepi();
        clearTimeout(timerId);
        setLoading(true);
        setMessage({
          msgBody: "Cập nhật  danh sách phát thành công",
          msgError: false,
        });
      }, 500);
      const timerLoading = setTimeout(() => {
        clearTimeout(timerLoading);
        setFocus(false);
        setLoading(false);
      }, 2000);
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
              {loading ? (
                <>
                  <div className={cx("mess")}>
                    <Message message={message} />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className={cx("block")} id={cx(id_focus_change)}>
              <div className={cx("list-container")}>
                <div className={cx("content")}>
                  <div className={cx("img-content")}>
                    <img src="https://media.proprofs.com/images/QM/user_images/2734691/1589295044.gif"></img>
                  </div>
                  <div className={cx("text-content")}>
                    <h2>Sửa thông tin</h2>
                    <form
                      className={cx("post-form")}
                      name="crete_playlist"
                      noValidate="noValidate"
                      onSubmit={onChangeSubmit}
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
                          <div class={cx("btn-submit-title")}>Thay đổi</div>
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
              {loading ? (
                <>
                  <div className={cx("mess")}>
                    <Message message={message} />
                  </div>
                </>
              ) : (
                <></>
              )}
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
              <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-music-carnival-poster-picture-promotion-image_165139.jpg"></img>
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
