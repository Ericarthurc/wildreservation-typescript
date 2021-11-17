import headerGraphic from "../../assets/images/header.svg";

import cx from "./Header.module.scss";

const Header = () => {
  return (
    <div className={cx["Header"]}>
      <img
        className={cx["Header-Graphic"]}
        src={headerGraphic}
        alt="main-logo"
      />
    </div>
  );
};

export default Header;
