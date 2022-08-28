import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import Wrapper from "../Wrapper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        <ul className={cx("menu-body")}>
          <li className={cx("menu-item")}>
            <a>Tài khoản</a>
          </li>
          <li className={cx("menu-item")}>
            <a>Hồ sơ</a>
          </li>
          <li className={cx("menu-item")}>
            <a href="/login">Đăng xuất</a>
          </li>
        </ul>
      </Wrapper>
    </div>
  );

  // Reset to first page
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      //   delay={[0, 700]}
      //   offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleReset}
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
