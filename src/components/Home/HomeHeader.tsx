import headerGraphic from "../../assets/images/header.svg";

import styles from "./HomeHeader.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles["homeheader"]}>
      <img
        className={styles["homeheader-graphic"]}
        src={headerGraphic}
        alt="main-logo"
      />
    </div>
  );
};

export default HomeHeader;
