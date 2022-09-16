import React from "react";

import SongList from "../../SongList";
import SongListHeader from "../../SongListHeader";
import SongDetail from "../../SongDetail";
import Cookies from "js-cookie";
import * as songsService from "../../../service/songsService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Album.module.scss";
const cx = classNames.bind(styles);

function AlbumLayout() {
  const [songsList, setSongsList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      const songsFromAlbum = await songsService.getSongsFromAlbum(id);
      const songsFromSinger = await songsService.getSongsFromSinger(id);

      if (songsFromAlbum.length <= 0) {
        setSongsList(songsFromSinger);
      } else {
        setSongsList(songsFromAlbum);
      }
    };
    fetchApi();
  }, []);

  return (
    <React.Fragment>
      <div className={cx("main-view-container", "scroll")}>
        <div className={cx("pad-top")}></div>
        <div className={cx("main-view-top")}>
          <div className={cx("view-left")}>
            <SongDetail />
          </div>
          <div className={cx("view-right", "scroll")}>
            <SongListHeader />
            <SongList songs={songsList} />
          </div>
        </div>
        <div className={cx("main-view-bottom")}>
          <section className={cx("list-item")}></section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AlbumLayout;
