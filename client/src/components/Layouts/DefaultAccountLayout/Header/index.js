import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faKey, faSignOut } from "@fortawesome/free-solid-svg-icons";
import images from "../../../../assect/images";
import Menu from "../../../Popper/Menu";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function UserHeader() {
  return (
    <header className={cx("container", "wrapper")}>
      <div className={cx("logo")}>
        <Link to="/">
          <img className={cx("muzic-logo")} src={images.logo} alt="miuzzic" />
        </Link>
      </div>
      <div className={cx("account")}>
        <Menu>
          <img
            className={cx("user-avatar")}
            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
            alt="Nguyen Van A"
          />
        </Menu>
      </div>
    </header>
  );
}

export default UserHeader;
