import classNames from "classnames/bind";
import styles from "./ListItem.module.scss";
import { selectAlbum } from "../../actions/album";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
// import { selectAlbum } from "d:/WEB/reactjs/music-ui/src/actions";
import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const ItemList = ({
  album,
  index,
  selectAlbum,
  selectedAlbumId,
  playerState,
}) => {
  const [, setHovered] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={cx("item")}>
      <div className={cx("warrper")} onClick={() => {}}>
        <div className={cx("card")}>
          <div className={cx("card-top")}>
            <div className={cx("img-card")}>
              <img
                className={cx("img", "img-type-1")}
                src="https://seed-mix-image.spotifycdn.com/v6/img/artist/57g2v7gJZepcwsuwssIfZs/vi/default"
              ></img>
              <form class={cx("hover-player")}>
                <div class={cx("hover-player-a")}>
                  <button class={cx("player-btn")}>
                    <span class={cx("player-btn-span")}>
                      <span class={cx("player-btn-span-a")}>
                        <FontAwesomeIcon
                          className={cx("icon-li")}
                          icon={faPlay}
                        />
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className={cx("card-bottom")}>
            <Link
              className={cx("card-name")}
              to={"/album/${album.id}"}
              onClick={() => {
                selectAlbum(album);
              }}
            >
              <div className={cx("name", "name-text")}>{album.albumname}</div>
            </Link>
            <div className={cx("card-type")}>
              <span className={cx("type", "type-text")}>Album</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectAlbum: state.selectedAlbum,
  };
};
export default connect(mapStateToProps, { selectAlbum })(ItemList);
