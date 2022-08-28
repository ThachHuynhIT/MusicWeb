import context from "react-bootstrap/esm/AccordionContext";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchItem from "../../../SearchItem";
import { Wrapper as PopperWrapper } from "../../../Popper";
import styles from "./Header.module.scss";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <Tippy
      interactive
      visible={searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-titel")}> Gợi ý kết quả </h4>
            <SearchItem />
          </PopperWrapper>
        </div>
      )}
      content="text"
    >
      <div className={cx("warrper")}>
        <input placeholder="Tìm kiếm ..." spellCheck={false}></input>
        <button className={cx("clear-btn")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
