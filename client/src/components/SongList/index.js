import SongItem from "../SongItem";
import classNames from "classnames/bind";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./SongList.module.scss";

import { selectAlbum } from "../../actions";

import { connect, useDispatch } from "react-redux";
const cx = classNames.bind(styles);

const SongList = ({ songs = [], typee, typeSave, playlistId }) => {
  const dispatch = useDispatch();

  const songTags = songs.map((song, index) => {
    return (
      <SongItem
        song={song}
        key={index}
        index={index}
        type={typee}
        typeSave={typeSave}
        playlistId={playlistId}
      />
    );
  });
  return <div className={cx("warrper")}>{songTags}</div>;
};

export default SongList;

// const mapStateToProps = (state) => {
//   return {
//     getAlbumSongs: state.getAlbumSongs,
//   };
// };
// export default connect(mapStateToProps)(SongList);
