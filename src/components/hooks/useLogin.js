import { useState } from "react";
import { login } from "../../api/auth/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import { LoginContext } from "../../context/LoginContext";

const useLogin = ({ email, password }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const initiateLogin = async () => {
    try {
      setIsLoading(true);
      const loggedInUserData = await login({ email, password });
      setUser(loggedInUserData);
      dispatch(addUser(loggedInUserData));
      // return true;
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError(err);
      setIsLoading(false);
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  return { initiateLogin, user, isLoading, error, success };
};

export default useLogin;
