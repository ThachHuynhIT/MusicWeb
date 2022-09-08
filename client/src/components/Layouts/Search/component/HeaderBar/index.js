import React from "react";
import styles from "./HearderBar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDebounce } from "../../../../../hooks";
import { useState, useEffect } from "react";
import * as searchApi from "../../../../../service/searchSrevice";
const cx = classNames.bind(styles);

const HeaderBar = () => {
  const { name } = useParams();

  return (
    <div className={cx("warrper")}>
      <div className={cx("header-bar")}>
        <div class={cx("tabs")}>
          <div class={cx("tab-item", "title-headr-bar")}>KẾT QUẢ TÌM KIẾM</div>
          <Link to={`/search/${name}/all`}>
            <div class={cx("tab-item", "active")}>TẤT CẢ</div>
          </Link>
          <Link to={`/search/${name}/song`}>
            <div class={cx("tab-item")}>BÀI HÁT</div>
          </Link>
          <Link to={`/search/${name}/album`}>
            <div class={cx("tab-item")}>ALBUM</div>
          </Link>
          <Link to={`/search/${name}/song`}>
            <div class={cx("tab-item")}>NGHỆ SĨ</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderBar;
