import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { register } from "../../../service/userService";

import classNames from "classnames/bind";
import styles from "./User.module.scss";
import Message from "./Message";
const cx = classNames.bind(styles);

function RegisterLayout(props) {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const variable = {
      username: user.username,
      password: user.password,
      passwordConfirmation: user.passwordConfirmation,
      email: user.email,
    };

    if (user.password === user.passwordConfirmation) {
      register(variable).then((data) => {
        const { message } = data;
        setMessage(message);

        if (!message.msgError) {
          setMessage(message);

          setTimeout(() => {
            navigate("/user/login");
          }, 2000);
        }
      });
    } else {
      setMessage({ msgBody: "Mat khau khong khop", msgError: true });
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h1>Đăng ký và trãi nghiệm</h1>
      </div>
      {message ? <Message message={message} /> : null}
      <form
        className={cx("post-form")}
        name="sentMessage"
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
              placeholder="Từ 3 dến 16 ký tự"
              name="username"
              autoFocus={true}
              value={user.username}
              onChange={onChange}
            ></input>
          </div>

          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")}>
                <span>Tạo mật khẩu</span>
              </label>
            </div>
            <input
              className={cx("input-value")}
              type="password"
              name="password"
              placeholder="Tối thiểu nhất 6 ký tự"
              onChange={onChange}
              value={user.password}
            ></input>
          </div>
          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")}>
                <span>Xác nhận mật khẩu</span>
              </label>
            </div>
            <input
              className={cx("input-value")}
              name="passwordConfirmation"
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={user.passwordConfirmation}
              onChange={onChange}
            ></input>
          </div>
          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")}>
                <span>Email</span>
              </label>
            </div>
            <input
              className={cx("input-value")}
              name="email"
              type="email"
              placeholder="Email của bạn"
              value={user.email}
              onChange={onChange}
            ></input>
          </div>
          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")} type="text">
                <span>Giới tính</span>
              </label>
            </div>
            <div class={cx("select-sex")}>
              <select class={cx("select-opiton")}>
                <option disabled="" value="NOT_SET">
                  - không chọn -
                </option>
                <option value="NEUTRAL">Giới tính trung lập</option>
                <option value="FEMALE">Nữ</option>
                <option value="MALE">Nam</option>
              </select>
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                class="Svg-sc-1bi12j5-0 EQkJl SelectArrow-sc-12qvh0d-0 igsFfm"
                viewBox="0 0 16 16"
              >
                <path d="M.47 4.97a.75.75 0 011.06 0L8 11.44l6.47-6.47a.75.75 0 111.06 1.06L8 13.56.47 6.03a.75.75 0 010-1.06z"></path>
              </svg>
            </div>{" "}
          </div>
          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")} type="text">
                <span>Ngày sinh</span>
              </label>
            </div>
            <div className={cx("labels-inputs")}>
              <div className={cx("pad-rig")}>
                <label for="dob-date" class={cx("lable-1")}>
                  Date
                </label>
                <input
                  required=""
                  id="dob-date"
                  pattern="((0?[1-9])|([12][0-9])|(3[01]))"
                  disabled=""
                  class={cx("input-birthday")}
                ></input>
              </div>
              <div className={cx("pad")}>
                <label for="dob-month" class={cx("lable-1")}>
                  Month
                </label>
                <div class={cx("select-morth")}>
                  <select
                    id="dob-month"
                    disabled=""
                    class={cx("select-opiton")}
                  >
                    <option value="january">Tháng Một</option>
                    <option value="february">Tháng Hai</option>
                    <option value="march">Tháng Ba</option>
                    <option value="april">Tháng Tư</option>
                    <option value="may">Tháng Năm</option>
                    <option value="june">Tháng Sáu</option>
                    <option value="july">Tháng bảy</option>
                    <option value="august">Tháng Tám</option>
                    <option value="september">Tháng Chín</option>
                    <option value="october">Tháng Mười</option>
                    <option value="november">Tháng Mười Một</option>
                    <option value="december">Tháng Mười hai</option>
                  </select>
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    class="Svg-sc-1bi12j5-0 EQkJl SelectArrow-sc-12qvh0d-0 igsFfm"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.47 4.97a.75.75 0 011.06 0L8 11.44l6.47-6.47a.75.75 0 111.06 1.06L8 13.56.47 6.03a.75.75 0 010-1.06z"></path>
                  </svg>
                </div>
              </div>
              <div className={cx("pad")}>
                <label for="dob-year" class={cx("lable-1")}>
                  Year
                </label>
                <input
                  required=""
                  id="dob-year"
                  pattern="((19|20)[0-9]{2})"
                  disabled=""
                  class={cx("input-birthday")}
                ></input>
              </div>
            </div>
          </div>
          <div className={cx("group-main")}>
            <div className={cx("title-group")}>
              <label for="" className={cx("label-title")}>
                <span>Quốc gia</span>
              </label>
            </div>
            <input className={cx("input-value")} type="text"></input>
          </div>
        </div>
        <div className={cx("btn-form")}>
          <button type="submit" class={cx("btn-submit")}>
            <div class={cx("btn-submit-title")}>Đăng ký</div>
          </button>
          <span>
            Bạn đã có tài khoản
            <Link to="/user/login" class={cx("btn-remove")}>
              Đăng nhập
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default RegisterLayout;