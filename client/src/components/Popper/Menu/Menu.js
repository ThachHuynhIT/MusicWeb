import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { connect, useDispatch } from "react-redux";
import { selectSong, selectSongByAlbum } from "../../../actions";
import Wrapper from "../Wrapper";
import styles from "./Menu.module.scss";
import * as userService from "../../../service/userService";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Menu({
  children,
  selectSong,
  selectSongByAlbum,
  hideOnClick = false,
}) {
  const [user, setUser] = useState();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    userService.isAuthen().then((data) => {
      console.log(data);
      setUser(data.user);
      setAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  const navigate = useNavigate();
  const onLogout = () => {
    userService.logOut();
  };

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        <ul className={cx("menu-body")}>
          <li className={cx("menu-item")}>
            <Link to="/account/infor">Hồ sơ</Link>
          </li>
          <li className={cx("menu-item")}>
            <span
              onClick={() => {
                userService.logOut();
                navigate("/user/login");
              }}
            >
              Đăng xuất
            </span>
          </li>
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

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    selectedSongPlay: state.selectedSongPlay,
    playerState: state.playerState,
  };
};

export default connect(mapStateToProps, { selectSong, selectSongByAlbum })(
  Menu
);
