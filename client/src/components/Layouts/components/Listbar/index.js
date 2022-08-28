import classNames from "classnames/bind";
import Item from "../Item";
import styles from "./Listbar.module.scss";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const Listbar = ({ songs = [] }) => {
  const songTags = songs.map((song, index) => {
    return <Item song={song} key={index} index={index} />;
  });
  return (
    <div className={cx("warrper")}>
      <div className={cx("header-bar")}>
        <h1 className={cx("titel", "backgroud")}>Danh sách phát</h1>
      </div>
      <div className={cx("list-bar")}>{songTags}</div>
    </div>
  );
};

export default Listbar;
