import React from "react";
import Player from "../../Player";

import songs from "D:/WEB/reactjs/MusicWeb/client/src/data/songs.json";
import albums from "D:/WEB/reactjs/MusicWeb/client/src/data/albums.json";
import SongList from "D:/WEB/reactjs/MusicWeb/client/src/components/SongList/index";

import SongListHeader from "../../SongListHeader";
import SongDetail from "../../SongDetail";
// import ListItem from "../../List";
import classNames from "classnames/bind";
import styles from "./Album.module.scss";
// import * as songsApi from "../../../api/songsApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);
// for (let index = 0; index < albums.length; index++) {
//   const song = songs[index];
//   song.id = index;
// }

function AlbumLayout() {
  // const [productList, setProductList] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const response = await songsApi.getSongsFromAlbum(id);

  //     console.log(response);
  //     setProductList(response);
  //   };
  //   fetchApi();
  // }, []);

  // console.log(id);

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
            <SongList songs={songs} />
          </div>
        </div>
        <div className={cx("main-view-bottom")}>
          <section className={cx("list-item")}>
            {/* <ListItem albums={albums} /> */}
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AlbumLayout;
