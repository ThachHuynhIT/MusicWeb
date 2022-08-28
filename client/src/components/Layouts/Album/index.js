import React from "react";
import Player from "../../Player";
import { getAlbumSongs } from "../../../actions/album";
import songs from "d:/WEB/reactjs/music-ui/src/data/songs.json";
import albums from "d:/WEB/reactjs/music-ui/src/data/albums.json";
import SongList from "D:/WEB/reactjs/music-ui/src/components/SongList/index";
import { selectAlbum } from "../../../actions/album";
import SongListHeader from "../../SongListHeader";
import SongDetail from "../../SongDetail";
import ListItem from "../../ListItem";
import classNames from "classnames/bind";
import styles from "./Album.module.scss";
import songsApi from "../../../api/songsApi";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
// for (let index = 0; index < albums.length; index++) {
//   const song = songs[index];
//   song.id = index;
// }

function AlbumLayout() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await songsApi.getAll();
        console.log("Fetch products successfully: ", response);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
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
            <SongList songs={productList} />
          </div>
        </div>
        <div className={cx("main-view-bottom")}>
          <section className={cx("list-item")}>
            <ListItem albums={albums} />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AlbumLayout;
