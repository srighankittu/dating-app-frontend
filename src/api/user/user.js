import axios from "axios";
import { USER } from "../../constants";

export const user = async () => {
  try {
    const response = await axios.get(USER, { withCredentials: true });
    return response.data;
  } catch (err) {
    const message =
      err.response?.data?.message ||
      err.message ||
      "Unable to get user details";
    throw new Error(message);
  }
};
