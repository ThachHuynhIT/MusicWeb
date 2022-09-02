import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
<<<<<<< Updated upstream
import Wrapper from "../Wrapper";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
=======

import Wrapper from "../Wrapper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
import { useState } from "react";

>>>>>>> Stashed changes
const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
<<<<<<< Updated upstream

  hideOnClick = false,
  onChange = defaultFn,
}) {
=======
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

>>>>>>> Stashed changes
  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        <ul className={cx("menu-body")}>
          <li className={cx("menu-item")}>
            <a>Tài khoản</a>
          </li>
          <li className={cx("menu-item")}>
<<<<<<< Updated upstream
            <Link to="/account/infor">Hồ sơ</Link>
          </li>
          <li className={cx("menu-item")}>
            <a href="/user/login">Đăng xuất</a>
=======
            <a>Hồ sơ</a>
          </li>
          <li className={cx("menu-item")}>
            <a href="/login">Đăng xuất</a>
>>>>>>> Stashed changes
          </li>
        </ul>
      </Wrapper>
    </div>
  );

  // Reset to first page
<<<<<<< Updated upstream
=======
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
>>>>>>> Stashed changes

  return (
    <Tippy
      interactive
<<<<<<< Updated upstream
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
=======
      //   delay={[0, 700]}
      //   offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleReset}
>>>>>>> Stashed changes
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

export default Menu;
