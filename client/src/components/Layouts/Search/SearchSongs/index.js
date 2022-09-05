import ListSinger from "../../../ListSinger";
import ListItem from "../../../List/ListItem";
import { useState, useEffect } from "react";
import SongList from "../../../SongList";
import * as albumsSrevice from "../../../../service/albumsSevrice";
import * as searchApi from "../../../../service/searchSrevice";
import classNames from "classnames/bind";
import styles from "./Style.module.scss";
import { useParams } from "react-router-dom";
import { useDebounce } from "../../../../hooks";
import HeaderBar from "../component/HeaderBar";

const cx = classNames.bind(styles);

function SearchSongLayout() {
  const { name } = useParams();

  const [searchResult, setSearchResult] = useState([]);
  const debouncedValue = useDebounce(name, 10);
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      const result = await searchApi.search(debouncedValue);
      console.log(result);
      setSearchResult(result);
    };

    fetchApi();
  }, [debouncedValue]);

  return (
    <div className={cx("wrapper")}>
      <HeaderBar />
      <div className={cx("container")}>
        <h3 className={cx("title")}>Bài hát</h3>

        <div className={cx("content")}>
          <SongList songs={searchResult} />
        </div>
      </div>
      <section className={cx("list-item")}></section>
    </div>
  );
}

export default SearchSongLayout;
