import axios from "axios";

/**
 * @desc Create user
 * @format /api/v1/users
 * @method POST
 * @access Public
 */
export const createUserAPI = async (user: IUser): Promise<HTTPRequestUser> => {
  try {
    const { data } = await axios.post<HTTPRequestService>("api/v1/users", {
      user,
    });
    if (!data.success) {
      throw new Error("request not successful");
    }
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
