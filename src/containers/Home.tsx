import { useState, useEffect } from "react";

import { getServicesAPI } from "../api/servicesAPI";

import HomeHeader from "../components/Home/HomeHeader";
import ServiceForm from "../components/Home/ServiceForm/ServiceForm";
import UserUtils from "../components/Home/UserUtils/UserUtils";

import styles from "./Home.module.scss";

const Home = () => {
  // Home State
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    initServices();
  }, []);

  const initServices = async () => {
    try {
      setServices(await getServicesAPI());
    } catch (error) {
      // Handle error in utils
      console.log(`${error}`);
    }
  };

  return (
    <div className={styles["home"]}>
      <HomeHeader />
      <h2>Home</h2>
      <ServiceForm />
      <UserUtils />
    </div>
  );
};

export default Home;
