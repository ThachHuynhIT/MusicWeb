import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ListItem from "../../ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import albums from "d:/WEB/reactjs/music-ui/src/data/albums.json";

const cx = classNames.bind(styles);

for (let index = 0; index < albums.length; index++) {
  const album = albums[index];
  album.id = index;
}
function HomeLayout() {
  return (
    <div className={cx("main-view-container")}>
      <div className={cx("top-padding")}></div>
      <div className={cx("content")}>
        <section className={cx("list-item")}>
          <ListItem albums={albums} />
        </section>
      </div>
    </div>
  );
}

export default HomeLayout;
