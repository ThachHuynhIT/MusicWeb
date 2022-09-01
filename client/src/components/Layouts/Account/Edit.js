import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function EditLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h1>Chỉnh sửa hồ sơ</h1>
      </div>
      <div className={cx("content")}>
        <form className={cx("post-edit")}>
          <div className={cx("main-form")}>
            <div className={cx("group-main")}>
              <div className={cx("title-group")}>
                <label for="" className={cx("label-title")}>
                  <span>Email</span>
                </label>
              </div>
              <input className={cx("input-value")} type="email"></input>
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
            <Link to="/account/infor" class={cx("btn-remove")}>
              Hủy
            </Link>
            <button type="submit" class={cx("btn-submit")}>
              <div class={cx("btn-submit-title")}>Lưu hồ sơ</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditLayout;
