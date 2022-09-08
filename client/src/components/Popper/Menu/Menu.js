import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { connect, useDispatch } from "react-redux";
import { selectSong, selectSongByAlbum } from "../../../actions";
import Wrapper from "../Wrapper";
import styles from "./Menu.module.scss";
import * as userService from "../../../service/userService";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Menu({
  children,
  selectSong,
  selectSongByAlbum,
  hideOnClick = false,
}) {
  const navigate = useNavigate();

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        <ul className={cx("menu-body")}>
          <Link to="/account/infor">
            <li className={cx("menu-item")}>Hồ sơ</li>
          </Link>
          <a
            href="/"
            className={cx("menu-item")}
            onClick={() => {
              selectSong(undefined);
              selectSongByAlbum(undefined);
              userService.logOut();
            }}
          >
            <span>Đăng xuất</span>
          </a>
        </ul>
      </Wrapper>
    </div>
  );

  // Reset to first page

  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
    >
      {children}
    </Tippy>
  );
}

const mapStateToProps = (state) => {
  return {
    selectSongByAlbum: state.selectSongByAlbum,
    selectedSongPlay: state.selectedSongPlay,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, { selectSong, selectSongByAlbum })(
  Menu
);
