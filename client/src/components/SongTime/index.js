import { connect } from "react-redux";
import React from "react";
import "./SongTime.css";
import TimeSlider from "react-input-slider";
import ReactDOM from "react-dom";
import { setTime } from "../actions";

class SongTime extends React.Component {
  const;
  render() {
    return (
      <div className="music-timer">
        <TimeSlider
          axis="x"
          // className="completed"
          // style={{
          //   width: `${this.props.duration}`,
          // }}
          onChange={(e) => {
            this.props.current.currentTime = e;
            this.props.setTime(e);
            if (!this.props.playerState) {
              this.props.dispatch({
                type: "PLAYER_STATE_SELECTED",
                payload: 1,
              });
              this.props.current.play();
            }
          }}
          xmax={this.props.duration}
          x={this.props.currentLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    duration: state.duration,
    currentLocation: state.currentLocation,
  };
};

export default connect(mapStateToProps)(SongTime);
