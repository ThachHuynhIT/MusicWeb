import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faKey, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function InforLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h1>Tổng quan về tài khoản</h1>
        <span>Hồ sơ</span>
      </div>
      <div className={cx("content")}>
        <table className={cx("info-table")}>
          <tbody>
            <tr>
              <td className={cx("td")}>Tên người dùng</td>
              <td className={cx("td-1")}>Diệp Thế Vương Huy</td>
            </tr>

            <tr>
              <td className={cx("td")}>Ngày sinh</td>
              <td className={cx("td-1")}>17 Tháng 7,2001</td>
            </tr>

            <tr>
              <td className={cx("td")}>Quốc gia</td>
              <td className={cx("td-1")}>Việt Nam</td>
            </tr>
          </tbody>
        </table>
        <div className={cx("move")}>
          <Link className={cx("btn-move")} to="/">
            Chỉnh sửa hồ sơ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InforLayout;
