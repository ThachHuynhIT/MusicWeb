import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./SearchItem.module.scss";
const cx = classNames.bind(styles);

function SearchItem({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://seed-mix-image.spotifycdn.com/v6/img/artist/57g2v7gJZepcwsuwssIfZs/vi/default"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
        </h4>

        <span className={cx("username")}>{data.name}</span>
      </div>
    </div>
  );
}

export default SearchItem;
