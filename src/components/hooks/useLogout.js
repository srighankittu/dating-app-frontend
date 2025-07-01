import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/userSlice";
import { logout } from "../../api/auth/auth";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const { setIsLoggedIn } = useContext(LoginContext);
  const initiateLogout = async () => {
    try {
      setIsLoading(true);
      const response = await logout();
      setIsSuccess(response.data);
      dispatch(removeUser());
      setIsLoggedIn(false);
      return true;
    } catch (err) {
      setError(err.message);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { initiateLogout, isLoading, error, isSuccess };
};

export default useLogout;
