import { useEffect, useReducer, useState } from "react";
import { getServicesAPI } from "../../api/servicesAPI";
import { createUserAPI } from "../../api/usersAPI";
import ChildrenInputs from "./ServiceForm/ChildrenInputs";
import Inputs from "./ServiceForm/Inputs";
import Services from "./ServiceForm/Services";
import UserUtils from "./UserUtils/UserUtils";

const mainFormReducer = (state: IMainForm, action: any) => {
  switch (action.type) {
    case "HANDLE INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "HANDLE NUMBER":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "TOGGLE CHILDERN FORM":
      return {
        ...state,
        children: !state.children,
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
  children: false,
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

  const mainFormSubmit = async (e: any) => {
    e.preventDefault();
    console.log(mainFormState);

    try {
      const user = await createUserAPI(mainFormState);
    } catch (error) {
      // error handler
      console.log(error);
    }
  };

  const mainFormChangeHandler = (e: any) => {
    mainFormDispatch({
      type: "HANDLE INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const mainFormChangeNumberHandler = (e: any) => {
    mainFormDispatch({
      type: "HANDLE NUMBER",
      field: e.target.name,
      payload: parseInt(e.target.value),
    });
  };

  return (
    <>
      <form onSubmit={mainFormSubmit}>
        <Services
          services={servicesPayload}
          mainFormChangeHandler={mainFormChangeHandler}
        />
        {mainFormState.serviceid && (
          <Inputs
            mainFormState={mainFormState}
            mainFormChangeHandler={mainFormChangeHandler}
            mainFormChangeNumberHandler={mainFormChangeNumberHandler}
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
          <ChildrenInputs formChangeHandler={mainFormChangeHandler} />
        )}
        <button type="submit">Reserve</button>
      </form>
      <UserUtils />
    </>
  );
};

export default MainApp;
