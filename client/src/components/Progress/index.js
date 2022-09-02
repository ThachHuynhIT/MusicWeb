import React from "react";
import { connect } from "react-redux";
<<<<<<< Updated upstream
import { setVolume } from "../../actions";

import ReactDOM from "react-dom";
import styles from "./ProgressBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
=======
import { setVolume } from "../actions";
import "./ProgressBar.css";

import ReactDOM from "react-dom";

>>>>>>> Stashed changes
class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
  }
  render() {
    return (
<<<<<<< Updated upstream
      <div className={cx("progress")}>
=======
      <div className="progress">
>>>>>>> Stashed changes
        <input
          type="range"
          min="0"
          max="100"
<<<<<<< Updated upstream
=======
          className="slider"
>>>>>>> Stashed changes
          value={this.props.volume}
          onChange={(e) => this.props.setVolume(e.target.value)}
          onMouseEnter={() => this.setState({ showTooltip: true })}
          onMouseLeave={() => this.setState({ showTooltip: false })}
        />
        {this.state.showTooltip ? (
<<<<<<< Updated upstream
          <span className={cx("tooltip")}>{this.props.volume}</span>
=======
          <span className="tooltip">{this.props.volume}</span>
>>>>>>> Stashed changes
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    volume: state.volume,
  };
};

export default connect(mapStateToProps, { setVolume })(ProgressBar);
