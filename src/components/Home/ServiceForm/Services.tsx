import Service from "./Service";

interface Props {
  services: IService[];
  serviceChangeHandler: (e: any) => void;
}

const Services = (props: Props) => {
  const compare = (a: IService, b: IService) => {
    if (a.time < b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  };
  props.services.sort(compare);

  const sortedServices = props.services.map((service, _index) => {
    return (
      <Service
        serviceChangeHandler={props.serviceChangeHandler}
        id={service.id}
        time={service.time}
        seats={service.seats}
        key={service.id}
      />
    );
  });

  return <>{sortedServices}</>;
};

export default Services;
