import React, { useEffect, useState } from "react";
import * as albumsApi from "../../../api/albumsApi";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import List from "../../List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import albums from "D:/WEB/reactjs/MusicWeb/client/src/data/albums.json";

const cx = classNames.bind(styles);

for (let index = 0; index < albums.length; index++) {
  const album = albums[index];
  album.id = index;
}
function HomeLayout() {
  const [albumsList, setAlbumsList] = useState([]);
  const [typeAlbum, setTypeAlbum] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await albumsApi.getAllAlbum();

      var type = [];

      for (let i = 0; i < response.length; i++) {
        type[i] = response[i].singer;
      }
      const uniqueSet = new Set(type);
      const backToArray = [...uniqueSet];

      // console.log(arr);
      setAlbumsList(response);
      setTypeAlbum(backToArray);
    };

    fetchApi();
  }, []);

  return (
    <div className={cx("main-view-container")}>
      <div className={cx("top-padding")}></div>
      <div className={cx("content")}>
        <section className={cx("list-item")}>
          <List albums={albumsList} type={typeAlbum} />
        </section>
      </div>
    </div>
  );
}

export default HomeLayout;
