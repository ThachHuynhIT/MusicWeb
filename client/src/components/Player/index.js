import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import TimeSlider from "react-input-slider";
import { setPlayerState, selectSongById, setTime } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiniSong from "./MiniSong";
import Progress from "../Progress";

import {
  faPause,
  faPauseCircle,
  faPlayCircle,
  coffee,
} from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";
import styles from "./Player.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Player = ({
  selectedSongId,
  defaultSong,
  playerState,
  songs,
  selectSongById,
  volume,
  duration,
  currentLocation,
}) => {
  const dispatch = useDispatch();
  const [shuffled, setShuffled] = useState(false);

  const audioRef = useRef();
  let clicked = false;

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

  if (selectedSongId < 0 || selectedSongId > songs.length - 1) {
    selectSongById(0);
  }

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
    if (selectedSongId > 0) {
      selectSongById(selectedSongId - 1);
    }
  };
  const onForwardClick = () => {
    if (selectedSongId < songs.length - 1) {
      selectSongById(selectedSongId + 1);
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
    // console.log(audioRef.current.duration);
    document.getElementById("focus-link").click();
    window.history.pushState({}, "", "");
  }, [selectedSongId, dispatch]);
  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    audioRef.current.pause();
  }, [dispatch]);

  return (
    <div id={cx("player")}>
      {/* <SongTime /> */}

      <div className={cx("player-left")}>
        <MiniSong />
      </div>
      <div className={cx("player-right")}>
        <div className={cx("right-top")}>
          <div
            className={cx("control")}
            id={shuffled ? `active` : null}
            onClick={() => {
              setShuffled(shuffled);
              // console.log("shuffle: " + !shuffled);
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
          <Progress />

          <audio
            id="main-track"
            controls
            src={songs[selectedSongId].url}
            preload="true"
            onEnded={() => {
              selectSongById(
                shuffled
                  ? Math.round(Math.random() * songs.length)
                  : selectedSongId + 1
              );
            }}
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
            onTimeUpdate={() => {
              dispatch({
                type: "SET_TIME",
                payload: audioRef.current.currentTime,
              });
            }}
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
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
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
