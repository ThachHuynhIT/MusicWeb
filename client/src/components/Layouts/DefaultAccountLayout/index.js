import classNames from "classnames/bind";
import { Wrapper } from "../../Popper";
import styles from "./DefaultAccountLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultAccountLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}></div>
      <div className={cx("main-view")}>{children}</div>
    </div>
  );
}

export default DefaultAccountLayout;
