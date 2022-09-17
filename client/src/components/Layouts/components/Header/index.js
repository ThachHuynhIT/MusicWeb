import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useState } from "react";
import SearchItem from "../../../SearchItem";
import { Wrapper as PopperWrapper } from "../../../Popper";
import Search from "./search";
import Menu from "../../../Popper/Menu";
import ReactDOM from "react-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Cookies from "js-cookie";
import * as UserServices from "../../../../service/userService";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../../config";
const cx = classNames.bind(styles);

function Header() {
  const value = UserServices.isLog();

  const [user, setUser] = useState({
    username: "",
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const url = "http://localhost:8989/img/";
  const [img, setImg] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await UserServices.isAuthen();

      setUser({
        username: res.user.username,
      });
      setImg(res.user.img);
    };
    fetchApi();
  }, []);

  return (
    <header className={cx("menu", "menu-type")}>
      <div className={cx("move")}>
        <button className={cx("top-bar-back-btn", "move-btn")}>
          <FontAwesomeIcon className={cx("icon-li")} icon={faAngleLeft} />
        </button>
        <button className={cx("top-bar-forward-btn", "move-btn")}>
          <FontAwesomeIcon className={cx("icon-li")} icon={faAngleRight} />
        </button>
      </div>

      <div className={cx("search")}>
        <Search />
      </div>

      {value ? (
        <>
          <div className={cx("accout")}>
            <center>
              {img !== undefined ? (
                <>
                  <img class={cx("user-avatar")} src={url + img} alt="image" />
                </>
              ) : (
                <>
                  <img
                    class="img-circle autofit2"
                    src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
                    alt="image"
                  />
                </>
              )}
            </center>
            <Menu>
              <span>{user.username}</span>
            </Menu>
          </div>
        </>
      ) : (
        <>
          <a
            href="/user/register"
            className={cx("top-bar-register-btn", "accout-btn-rg")}
          >
            Đăng kí
          </a>
          <Link
            to="/user/login"
            className={cx("top-bar-login-btn", "accout-btn-lg")}
          >
            <span className={cx("accout-btn-lg-titel")}>Đăng nhập</span>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
