import classNames from "classnames/bind";
import styles from "./ListItem.module.scss";
import { selectAlbum, selectSong, selectSongByAlbum } from "../../actions";
import * as songsService from "../../service/songsService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import React from "react";
import ReactDOM from "react-dom";
const cx = classNames.bind(styles);

const Item = ({
  album,
  selectAlbum,
  selectSong,
  playerState,
  selectSongByAlbum,
}) => {
  const [songsList, setSongsList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await songsService.getSongsFromAlbum(album.type);

      setSongsList(response);
    };
    fetchApi();
  }, []);

  return (
    <div className={cx("item")}>
      <div className={cx("warrper")} onClick={() => {}}>
        <div className={cx("card")}>
          <div className={cx("card-top")}>
            <div className={cx("img-card")}>
              <img className={cx("img", "img-type-1")} src={album.img}></img>
              <form class={cx("hover-player")}>
                <div class={cx("hover-player-a")}>
                  <div
                    class={cx("player-btn")}
                    onClick={() => {
                      selectSong(songsList[0]);

                      selectSongByAlbum(songsList);

                      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
                    }}
                  >
                    <span class={cx("player-btn-span")}>
                      <span class={cx("player-btn-span-a")}>
                        <FontAwesomeIcon
                          className={cx("icon-li")}
                          icon={faPlay}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={cx("card-bottom")}>
            <Link
              className={cx("card-name")}
              to={`/album/${album.type}`}
              onClick={() => {
                selectAlbum(album);
              }}
            >
              <div className={cx("name", "name-text")}>{album.name}</div>
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
    selectedSongPlay: state.selectedSongPlay,
    playerState: state.playerState,
  };
};
export default connect(mapStateToProps, {
  selectAlbum,
  selectSong,
  selectSongByAlbum,
})(Item);
