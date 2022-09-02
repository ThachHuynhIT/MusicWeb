import context from "react-bootstrap/esm/AccordionContext";
<<<<<<< Updated upstream
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as searchApi from "../../../../service/searchSrevice";
import { useDebounce } from "../../../../hooks";
=======
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

>>>>>>> Stashed changes
import SearchItem from "../../../SearchItem";
import { Wrapper as PopperWrapper } from "../../../Popper";
import styles from "./Header.module.scss";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
<<<<<<< Updated upstream
import { useEffect, useState, useRef } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> Stashed changes
const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
<<<<<<< Updated upstream
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      const result = await searchApi.search(debouncedValue);

      setSearchResult(result);
    };

    fetchApi();
  }, [debouncedValue]);

  const handlInput = () => {
    setSearchValue("");
    inputRef.current.focus();
    setSearchResult([]);
  };
  const handleOut = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
=======

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <Tippy
      interactive
      visible={searchResult.length > 0}
>>>>>>> Stashed changes
      render={(attrs) => (
        <div className={cx("search-result")} {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-titel")}> Gợi ý kết quả </h4>
<<<<<<< Updated upstream
            {searchResult.map((result) => (
              <SearchItem data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      // onClick={handleOut}
      onClickOutside={handleOut}
    >
      <div className={cx("warrper")}>
        <input
          placeholder="Tìm kiếm ..."
          spellCheck={false}
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        ></input>

        {!!searchValue && (
          <button className={cx("clear-btn")} onClick={handlInput}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
=======
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

>>>>>>> Stashed changes
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
<<<<<<< Updated upstream
    </HeadlessTippy>
=======
    </Tippy>
>>>>>>> Stashed changes
  );
}

export default Search;
