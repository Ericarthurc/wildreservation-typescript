import HomeHeader from "../components/Home/HomeHeader";
import MainForm from "../components/Home/MainForm";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <HomeHeader />
      <MainForm />
    </div>
  );
};

export default Home;
