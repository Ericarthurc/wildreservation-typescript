import { useEffect, useReducer, useState } from "react";
import { getServicesAPI } from "../../api/servicesAPI";
import Services from "./ServiceForm/Services";
import UserUtils from "./UserUtils/UserUtils";

const mainFormReducer = (state: IMainForm, action: any) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "TOGGLE CHILDERN FORM":
      return {
        ...state,
        childern: !state.childern,
      };
    default:
      return state;
  }
};

const initialMainFormState: IMainForm = {
  serviceid: "",
  name: "",
  email: "",
  userseats: 0,
  childern: false,
  students: {
    nursery: 0,
    twoyears: 0,
    threeyears: 0,
    fouryears: 0,
    kindergarten: 0,
    wildlife: 0,
  },
};

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

  const serviceChangeHandler = (e: any) => {
    mainFormDispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <>
      <Services
        services={servicesPayload}
        serviceChangeHandler={serviceChangeHandler}
      />
      <UserUtils />
    </>
  );
};

export default MainApp;
