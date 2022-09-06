import React, { useState } from "react";

import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import images from "../../../../assect/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Sidebar() {
  const [nowSelected, setNowSelected] = useState(true);
  if (nowSelected) {
  }
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

      {/* <div className={cx("album")}>
        <div className={cx("album-list-content")}>
          <div className={cx("album-content")}>
            <button className={cx("album-btn")}>
              <FontAwesomeIcon className={cx("icon-albu")} icon={faPlus} />
              <span className={cx("album-list-titel")}>Tạo playlist</span>
            </button>
            <button className={cx("album-btn")}>
              <FontAwesomeIcon
                className={cx("icon-albu", "blu")}
                icon={faHeart}
              />
              <span className={cx("album-list-titel")}>Bài hát yêu thích</span>
            </button>
          </div>
        </div>
      </div> */}
    </nav>
  );
}

export default Sidebar;
