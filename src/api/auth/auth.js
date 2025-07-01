import axios from "axios";
import { LOGIN, LOGOUT } from "../../constants";

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

export const logout = async () => {
  try {
    const response = await axios.post(LOGOUT, { withCredentials: true });
    return response.data;
  } catch (err) {
    const message =
      err.response?.data?.message || err.message || "Logout failed";
    throw new Error(message);
  }
};
