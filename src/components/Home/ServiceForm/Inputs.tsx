interface Props {
  mainFormState: IMainForm;
  mainFormChangeHandler: (e: any) => void;
  mainFormChangeNumberHandler: (e: any) => void;
}

const Inputs = (props: Props) => {
  return (
    <>
      <label className="label__control" htmlFor="userseats">
        Seats 1-10
      </label>
      <input
        id="userseats"
        // className={`inputs__control ${props.inputStatus}`}
        type="number"
        min="1"
        max="10"
        value={props.mainFormState.userseats}
        onChange={(e) => props.mainFormChangeNumberHandler(e)}
        name="userseats"
      />
      <label className="label__control" htmlFor="name">
        Name
      </label>
      <input
        // className={`inputs__control ${props.inputStatus}`}
        type="name"
        name="name"
        value={props.mainFormState.name}
        onChange={(e) => props.mainFormChangeHandler(e)}
      />
      <label className="label__control" htmlFor="email">
        Email
      </label>
      <input
        // className={`inputs__control ${props.inputStatus}`}
        type="email"
        name="email"
        value={props.mainFormState.email}
        onChange={(e) => props.mainFormChangeHandler(e)}
      />
    </>
  );
};

export default Inputs;
