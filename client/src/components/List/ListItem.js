import classNames from "classnames/bind";
import styles from "./ListItem.module.scss";
import Item from "./Item";
import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const cx = classNames.bind(styles);
const ListItem = ({ albums = [], typee }) => {
  const albumTags = albums.map((album, index) => {
    if (album.type === typee) {
      return <Item album={album} key={index} index={index} />;
    }
  });
  return (
    <div className={cx("content")}>
      <div className={cx("top-list")}>
        <div className={cx("top-list-left")}>
          <h2 className={cx("titel-list", "titel-type")}>{typee}</h2>
        </div>
        <a className={cx("top-list-right")} href={"/"}>
          <span className={cx("more-list")}>Xem tất cả</span>
        </a>
      </div>

      <div className={cx("list", "sort")}>{albumTags}</div>
    </div>
  );
};

export default ListItem;
