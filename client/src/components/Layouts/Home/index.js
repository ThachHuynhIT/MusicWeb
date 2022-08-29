import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ListItem from "../../ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import albums from "D:/WorkSpace/NodeWordSpace/MusicWeb/client/src/data/albums.json";
import * as albumsApi from "../../../api/albumsApi";

const cx = classNames.bind(styles);

for (let index = 0; index < albums.length; index++) {
  const album = albums[index];
  album.id = index;
}
function HomeLayout() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
        const response = await albumsApi.getAllAlbum();
        const tmp = response.data;
        console.log(tmp);
    };

    fetchApi();

  }, []);
  
  return (
    <div className={cx("main-view-container")}>
      <div className={cx("top-padding")}></div>
      <div className={cx("content")}>
        <section className={cx("list-item")}>
          <ListItem albums={productList} />
        </section>
      </div>
    </div>
  );
}

export default HomeLayout;
