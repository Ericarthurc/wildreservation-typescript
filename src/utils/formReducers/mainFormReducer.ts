export const mainFormReducer = (state: IMainForm, action: any) => {
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

export const initialMainFormState: IMainForm = {
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

export const mainFormChangeTextHandler = (
  e: any,
  mainFormDispatch: (value: any) => void
) => {
  mainFormDispatch({
    type: "HANDLE INPUT",
    field: e.target.name,
    payload: e.target.value,
  });
};

export const mainFormChangeNumberHandler = (
  e: any,
  mainFormDispatch: (value: any) => void
) => {
  mainFormDispatch({
    type: "HANDLE NUMBER",
    field: e.target.name,
    payload: parseInt(e.target.value),
  });
};
