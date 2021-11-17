import axios from "axios";

/**
 * @desc Get all services
 * @format /api/v1/services
 * @method GET
 * @access Public
 */
export const getServicesAPI = async (): Promise<IService[]> => {
  try {
    const { data } = await axios.get<HTTPRequestService>("api/v1/services");
    if (!data.success) {
      throw new Error("request not successful");
    }
    return data.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
