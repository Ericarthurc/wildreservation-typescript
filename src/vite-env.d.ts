/// <reference types="vite/client" />
declare module "react-snowstorm";

interface HTTPRequestService {
  success: Boolean;
  data: IService[];
}

interface HTTPRequestUser {
  success: Boolean;
}

interface IService {
  _id: String;
  date: Date;
  seats: Number;
  createdAt: Date;
}

interface IUser {
  serviceId: String;
  serviceDate: Date;
  seats: Number;
  name: String;
  email: String;
}
