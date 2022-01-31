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
  id: String;
  time: Date;
  seats: Number;
}

interface IUser {
  serviceid: String;
  servicetime: Date;
  seats: Number;
  name: String;
  email: String;
}
