import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";
import { login } from "../../../service/userService";

import classNames from "classnames/bind";
import styles from "./User.module.scss";
import Message from "./Message";
const cx = classNames.bind(styles);

function LoginLayout({ props }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState(false);
  const onChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(user).then((data) => {
      if (data.isAuthenticated) {
        navigate("/");
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h1>Đăng nhập và trải nghiệm</h1>
      </div>
      {message ? <Message message={message} /> : null}
      <form
        className={cx("post-form")}
        noValidate="noValidate"
        onSubmit={onSubmit}
      >
        <div className={cx("main-form")}>
          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")}>
                <span>Tên đăng nhập </span>
              </label>
            </div>
            <input
              className={cx("input-value")}
              type="text"
              placeholder="Tên đăng nhập"
              name="username"
              autoFocus={true}
              value={user.username}
              onChange={onChange}
            ></input>
          </div>

          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")}>
                <span>Nhập mật khẩu</span>
              </label>
            </div>
            <input
              className={cx("input-value")}
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              onChange={onChange}
              value={user.password}
            ></input>
          </div>
        </div>
        <div className={cx("btn-form")}>
          <button type="submit" class={cx("btn-submit")}>
            <div class={cx("btn-submit-title")}>Đăng nhập</div>
          </button>
          <span>
            Bạn chưa có tài khoản
            <Link to="/user/register" class={cx("btn-remove")}>
              Đăng ký
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginLayout;
