import HomeHeader from "../components/Home/HomeHeader";
import MainApp from "../components/Home/MainApp";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <HomeHeader />
      <MainApp />
    </div>
  );
};

export default Home;
