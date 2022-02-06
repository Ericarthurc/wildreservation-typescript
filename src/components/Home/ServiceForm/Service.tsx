interface Props {
  id: string;
  time: Date;
  seats: Number;
  key: React.Key;
  mainFormChangeHandler: (e: any) => void;
}

const Service = (props: Props) => {
  const date = new Date(props.time);

  return (
    <label>
      <div
      // className={`
      //   selector__service ${
      //     !props.seats || props.seats <= 0
      //       ? "selector__service-Disabled"
      //       : props.checked === props.id
      //       ? "selector__service-Active"
      //       : "selector__service-Inactive"
      //   }
      //   `}
      >
        <p className="selector__service-time">
          {date.toLocaleTimeString("en-US", {
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="selector__service-date">
          {date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
          })}
        </p>
        <p className="selector__service-label">Seats:</p>
        {props.seats <= 0 ? (
          <p className="selector__service-seats">Full</p>
        ) : (
          <p className="selector__service-seats">{props.seats}</p>
        )}
        <input
          type="radio"
          value={props.id}
          name="serviceid"
          className="selector__service-Radio"
          onChange={(e) => props.mainFormChangeHandler(e)}
          disabled={!props.seats || props.seats <= 0}
        />
      </div>
    </label>
  );
};

export default Service;
