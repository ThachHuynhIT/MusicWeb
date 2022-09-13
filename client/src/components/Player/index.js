import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import TimeSlider from "react-input-slider";

import {
  setPlayerState,
  selectSongById,
  setTime,
  selectSongByAlbum,
} from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiniSong from "./MiniSong";
import Progress from "../Progress";
///
import * as songsService from "../../service/songsService";
import { useParams } from "react-router-dom";
////
import {
  faPause,
  faPauseCircle,
  faPlayCircle,
  coffee,
  faReceipt,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

import styles from "./Player.module.scss";
import classNames from "classnames/bind";
import slugGenerator from "mongoose-slug-generator/lib/slug-generator";
const cx = classNames.bind(styles);

const Player = ({
  selectedSongPlay,
  playerState,
  selectSongById,

  volume,
  duration,
  currentLocation,
  selectList = [],
}) => {
  const dispatch = useDispatch();
  const [shuffled, setShuffled] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const audioRef = useRef();
  let clicked = false;
  const songplay = selectList.findIndex((e) => e._id === selectedSongPlay._id);

  const spaceDownFunc = (event) => {
    if (event.keyCode === 32 && !clicked) {
      clicked = true;
      document.getElementsByClassName("main-control")[0].click();
    }
  };
  const spaceUpFunc = (event) => {
    if (event.keyCode === 32 && clicked) {
      clicked = false;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", spaceDownFunc);
    document.addEventListener("keyup", spaceUpFunc);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 500;
    }
  }, [volume]);

  const onMusicPlay = (e) => {
    e.preventDefault();

    if (!playerState) {
      audioRef.current.play();

      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
    } else {
      audioRef.current.pause();
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    }
  };
  //

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setTime(x);

    if (!playerState) {
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
      audioRef.current.play();
    }
  };

  //
  const onBackwardClick = () => {
    if (songplay > 0) {
      selectSongById(selectList[songplay - 1]);
      // console.log(selectSongById( selectList[songplay - 1]));
    }
  };
  const onForwardClick = () => {
    if (songplay < selectList.length - 1) {
      selectSongById(selectList[songplay + 1]);
    }
  };
  const icon = () => {
    if (!playerState) {
      return <FontAwesomeIcon icon={faPlayCircle} size="3x" />;
    } else {
      return <FontAwesomeIcon icon={faPauseCircle} size="3x" />;
    }
  };
  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
    audioRef.current.play();

    document.getElementById("focus-link").click();
    window.history.pushState({}, "", "");
  }, [songplay, dispatch]);
  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    audioRef.current.pause();
  }, [dispatch]);

  const songUrl = () => {
    if (selectList.length <= 0) {
      return null;
    } else {
      if (songplay < 0) {
        return selectList[0].url;
      } else {
        return selectList[songplay].url;
      }
    }
  };
  const nextSong = () => {
    if (shuffled === true) {
      selectSongById(selectList[Math.round(Math.random() * selectList.length)]);
    } else {
      if (repeat === true) {
        const timerId = setTimeout(() => {
          clearTimeout(timerId);
          selectSongById(selectList[songplay]);
        }, 100);
      } else {
        selectSongById(selectList[songplay + 1]);
      }
    }
  };
  console.log(shuffled);
  console.log(Math.round(Math.random() * selectList.length));
  return (
    <div id={cx("player")}>
      <div className={cx("player-left")}>
        {selectList[songplay] === undefined ? (
          <></>
        ) : (
          <MiniSong selectedSongPlay={selectList[songplay]} />
        )}
      </div>
      <div className={cx("player-right")}>
        <div className={cx("right-top")}>
          <div
            className={cx("control")}
            id={shuffled ? `active` : null}
            onClick={() => {
              setShuffled(!shuffled);
              setRepeat(false);
            }}
          >
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 16 16"
              className=""
            >
              <path
                d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className={cx("control")} onClick={onBackwardClick}>
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 16 16"
              className=""
            >
              <path
                d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={cx("main-control", "control")} onClick={onMusicPlay}>
            {icon()}
          </div>
          <div className={cx("control")} onClick={onForwardClick}>
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 16 16"
              className=""
            >
              <path
                d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div
            className={cx("control")}
            id={shuffled ? `active` : null}
            onClick={() => {
              setShuffled(false);
              setRepeat(!repeat);
            }}
          >
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 16 16"
              className=""
            >
              <FontAwesomeIcon icon={faRepeat} />
            </svg>
          </div>
          <Progress />

          <audio
            id="main-track"
            src={songUrl()}
            // preload="true"
            onEnded={nextSong}
            onLoadedMetadata={() => {
              dispatch({
                type: "SET_DURATION",
                payload: audioRef.current.duration,
              });
              setInterval(() => {
                dispatch({
                  type: "SET_CURRENT_LOCATION",
                  payload: audioRef.current.currentTime,
                });
              }, 1000);
            }}
            // onTimeUpdate={() => {
            //   dispatch({
            //     type: "SET_TIME",
            //     payload: audioRef.current.currentTime,
            //   });
            // }}
            ref={audioRef}
            hidden
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
        <div className={cx("right-bottom")}>
          <TimeSlider
            axis="x"
            className={cx("completed")}
            xmax={duration}
            x={currentLocation}
            onChange={handleTimeSliderChange}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongPlay: state.selectedSongPlay,
    selectList: state.selectedSongList,
    // defaultSong: state.selectedSongList[0],
    playerState: state.playerState,
    songs: state.songs,
    volume: state.volume,
    duration: state.duration,
    currentLocation: state.currentLocation,
  };
};

export default connect(mapStateToProps, { setPlayerState, selectSongById })(
  Player
);
