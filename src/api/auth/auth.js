import axios from "axios";
import { LOGIN } from "../../constants";

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(
      LOGIN,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    const message =
      err.response?.data?.message || err.message || "Login failed";
    throw new Error(message);
  }
};
