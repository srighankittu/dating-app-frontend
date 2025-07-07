import axios from "axios";
import { FEED, USER } from "../../constants";

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

export const feed = async (page, limit) => {
  try {
    const response = await axios.get(FEED + `?page=${page}&limit=${limit}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    const message =
      err.response?.data?.message || err.message || "Unable to get feed data";
    throw new Error(message);
  }
};
