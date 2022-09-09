import React, { useState, useEffect } from "react";
import { setFocus } from "../../../../actions";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import images from "../../../../assect/images";
import * as PlayListService from "../../../../service/playListService";
import * as UserServices from "../../../../service/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faTractor,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Sidebar({ setFocus }) {
  const [nowSelected, setNowSelected] = useState(true);
  const [playlist, setPlayList] = useState([]);
  const [userPlayList, setUserPlayList] = useState([]);
  const isAuthenticated = UserServices.isLog();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await PlayListService.getPlayList();

      setUserPlayList(response);
    };
    fetchApi();
  }, []);
  const removePlayList = async (e) => {
    const response = await PlayListService.removePlayList(e);
  };
  const ListTag = userPlayList.map((playList) => {
    if (isAuthenticated === true) {
      return (
        <>
          <div className={cx("list-name")}>
            <div
              className={cx("icon-delete")}
              onClick={() => {
                removePlayList(playList._id);
              }}
            >
              <FontAwesomeIcon className={cx("icon-li")} icon={faTrash} />
            </div>

            <Link to={`/playlist/${playList._id}`}>
              <li className={cx("content")}>
                <h6 className={cx("titel")}>{playList.name}</h6>
              </li>
            </Link>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  });
  return (
    <nav className={cx("warrper")}>
      <div className={cx("logo")}>
        <Link to="/" id={cx()}>
          <img className={cx("muzic-logo")} src={images.logo} alt="miuzzic" />
        </Link>
      </div>

      <div className={cx("content-list")}>
        <li className={cx("content")} id={cx("active")}>
          <Link className={cx("content-link", "active")} to={"/"}>
            <FontAwesomeIcon className={cx("icon-li")} icon={faHouse} />
            <span className={cx("titel")}>Trang chủ</span>
          </Link>
        </li>
        <li className={cx("content")}>
          <Link className={cx("content-link")} to={"/"}>
            <FontAwesomeIcon
              className={cx("icon-li")}
              icon={faMagnifyingGlass}
            />
            <span className={cx("titel")}>Tìm kiếm</span>
          </Link>
        </li>
        {/* <li className={cx("content")}>
          <Link className={cx("content-link")} to="/album">
            <FontAwesomeIcon className={cx("icon-li")} icon={faBook} />
            <span className={cx("titel")}>Thư viện</span>
          </Link>
        </li> */}
      </div>

      <div className={cx("album")}>
        <div className={cx("album-list-content")}>
          <div className={cx("album-content")}>
            <button className={cx("album-btn")}>
              <FontAwesomeIcon
                className={cx("icon-albu")}
                icon={faPlus}
                onClick={() => {
                  setFocus(true);
                }}
              />
              <span className={cx("album-list-titel")}>Tạo playlist</span>
            </button>
            {/* <button className={cx("album-btn")}>
              <FontAwesomeIcon
                className={cx("icon-albu", "blu")}
                icon={faHeart}
              />
              <span className={cx("album-list-titel")}>Bài hát yêu thích</span>
            </button> */}
          </div>
        </div>
      </div>

      <div className={cx("album-list")}>{ListTag}</div>
    </nav>
  );
}
const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {
  setFocus,
})(Sidebar);
