import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { connect, useDispatch } from "react-redux";
import { selectSong, selectSongByAlbum } from "../../../actions";
import Wrapper from "../Wrapper";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
  selectSong,
  selectSongByAlbum,
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        <ul className={cx("menu-body")}>
          <li className={cx("menu-item")}>
            <Link to="/account/infor">Hồ sơ</Link>
          </li>
          <li className={cx("menu-item")}>
            <a
              href="/user/login"
              onClick={() => {
                selectSong(0);
                selectSongByAlbum(0);
              }}
            >
              Đăng xuất
            </a>
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
