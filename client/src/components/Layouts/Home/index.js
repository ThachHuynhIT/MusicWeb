import React, { useEffect, useState } from "react";
import * as albumsSrevice from "../../../service/albumsSevrice";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import List from "../../List";
import ListSinger from "../../ListSinger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import albums from "D:/WEB/reactjs/MusicWeb/client/src/data/albums.json";

const cx = classNames.bind(styles);

function HomeLayout() {
  const [albumsList, setAlbumsList] = useState([]);
  const [singerList, setSingerList] = useState([]);
  const [typeAlbum, setTypeAlbum] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await albumsSrevice.getAllAlbum(0);
      const res = await albumsSrevice.getSingerAlbum(0);

      var type = [];

      for (let i = 0; i < response.length; i++) {
        type[i] = response[i].type;
      }
      const uniqueSet = new Set(type);
      const backToArray = [...uniqueSet];
      setSingerList(res);
      setAlbumsList(response);
      setTypeAlbum(backToArray);
    };
    fetchApi();
  }, []);

  return (
    <div className={cx("main-view-container", "scroll")}>
      <div className={cx("top-padding")}></div>
      <div className={cx("content")}>
        <section className={cx("list-item")}>
          <List albums={albumsList} type={typeAlbum} />
        </section>
        <section className={cx("list-item")}>
          <ListSinger singers={singerList} content="Nghệ sĩ nổi bật" />
        </section>
      </div>
    </div>
  );
}

export default HomeLayout;
