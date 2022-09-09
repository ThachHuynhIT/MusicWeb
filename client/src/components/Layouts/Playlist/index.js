import React from "react";

import SongList from "../../SongList";
import SongListHeader from "../../SongListHeader";
import SongDetail from "../../SongDetail";
import * as songsService from "../../../service/songsService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./PlayList.module.scss";
const cx = classNames.bind(styles);

function PlayListLayout() {
  const [songsList, setSongsList] = useState([]);
  const { playlist_id } = useParams();
  return (
    <React.Fragment>
      <div className={cx("main-view-container", "scroll")}>
        <div className={cx("header-container")}>
          <div className={cx("left-top")}>
            <img src="https://media.proprofs.com/images/QM/user_images/2734691/1589295044.gif"></img>
          </div>
        </div>
        <div className={cx("container")}></div>
      </div>
    </React.Fragment>
  );
}

export default PlayListLayout;
