import { useState } from "react";
import { login } from "../../api/auth/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import { LoginContext } from "../../context/LoginContext";

const useLogin = ({ email, password }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const initiateLogin = async () => {
    try {
      setIsLoading(true);
      const loggedInUserData = await login({ email, password });
      setUser(loggedInUserData);
      dispatch(addUser(loggedInUserData));
      return true;
    } catch (err) {
      console.log(err);
      setError(err);
      setIsLoading(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  return { initiateLogin, user, isLoading, error };
};

export default useLogin;
