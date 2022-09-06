import React, { useEffect, useState } from "react";
import * as albumsSrevice from "../../../service/albumsSevrice";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./AllAlbum.module.scss";
import List from "../../List";
import ListSinger from "../../ListSinger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import ListItem from "../../List/ListItem";

const cx = classNames.bind(styles);

function AllAlbumLayout() {
  const { type } = useParams();

  const [albumsList, setAlbumsList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await albumsSrevice.getAllAlbum();

      var albums = [];

      for (let i = 0; i < response.length; i++) {
        if (response[i].type === type) {
          albums[i] = response[i];
        }
      }

      setAlbumsList(response);
    };

    fetchApi();
  }, []);

  return (
    <div className={cx("main-view-container", "scroll")}>
      <div className={cx("top-padding")}></div>
      <div className={cx("content")}>
        <section className={cx("list-item")}>
          <ListItem albums={albumsList} typee={type} />
        </section>
      </div>
    </div>
  );
}

export default AllAlbumLayout;
