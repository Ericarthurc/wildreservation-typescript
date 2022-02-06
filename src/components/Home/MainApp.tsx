import { useEffect, useReducer, useState } from "react";
import { getServicesAPI } from "../../api/servicesAPI";
import { createUserAPI } from "../../api/usersAPI";
import {
  initialMainFormState,
  mainFormReducer,
} from "../../utils/formReducers/mainFormReducer";
import ChildrenInputs from "./ServiceForm/ChildrenInputs";
import Inputs from "./ServiceForm/Inputs";
import Services from "./ServiceForm/Services";
import UserUtils from "./UserUtils/UserUtils";

const MainApp = () => {
  const [servicesPayload, setServicesPayload] = useState<IService[]>([]);
  const [mainFormState, mainFormDispatch] = useReducer(
    mainFormReducer,
    initialMainFormState
  );

  useEffect(() => {
    (async () => {
      try {
        const services = await getServicesAPI();
        setServicesPayload(services);
      } catch (error) {
        // error handler
        console.log(error);
      }
    })();
  }, []);

  const mainFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await createUserAPI(mainFormState);
    } catch (error) {
      // error handler
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={mainFormSubmit}>
        <Services
          services={servicesPayload}
          mainFormDispatch={mainFormDispatch}
        />
        {mainFormState.serviceid && (
          <Inputs
            mainFormState={mainFormState}
            mainFormDispatch={mainFormDispatch}
          />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            mainFormDispatch({
              type: "TOGGLE CHILDERN FORM",
            });
          }}
        >
          Children!
        </button>
        {mainFormState.children && (
          <ChildrenInputs mainFormDispatch={mainFormDispatch} />
        )}
        <button type="submit">Reserve</button>
      </form>
      <UserUtils />
    </>
  );
};

export default MainApp;
