import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { connect, useDispatch } from "react-redux";
import { changePlaylist } from "../../../actions";
import Wrapper from "../Wrapper";
import styles from "./List.module.scss";
import * as userService from "../../../service/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as PlayListService from "../../../service/playListService";
import * as UserServices from "../../../service/userService";
const cx = classNames.bind(styles);

function List({ changePlaylist, userPlaylist }) {
  const [playList, setPlayList] = useState();
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = UserServices.isLog();
  console.log(userPlaylist);
  const ListTag = userPlaylist.map((playList) => {
    if (isAuthenticated === true) {
      return (
        <li
          className={cx("menu-item")}
          onClick={() => {
            setShowList(false);
          }}
        >
          {playList.name}
        </li>
      );
    } else {
      return <></>;
    }
  });

  const renderResult = (attrs) => (
    <div className={cx("menu-list", "scroll")} tabIndex="-1" {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        <ul className={cx("menu-body")}>{ListTag}</ul>
      </Wrapper>
    </div>
  );

  // Reset to first page

  return (
    <Tippy
      interactive
      visible={showList}
      placement="bottom-end"
      render={renderResult}
      onClickOutside={() => {
        setShowList(false);
      }}
    >
      <div class={cx("hover-like-icon")}>
        <FontAwesomeIcon
          className={cx("icon-li")}
          icon={faPlus}
          onClick={() => {
            setShowList(true);
          }}
        />
      </div>
    </Tippy>
  );
}

const mapStateToProps = (state) => {
  return {
    focus: state.focus,
    userPlaylist: state.userPlayList,
  };
};

export default connect(mapStateToProps, { changePlaylist })(List);
