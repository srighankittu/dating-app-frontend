import { useContext, useState } from "react";
import { user } from "../../api/user/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../store/userSlice";
import { LoginContext } from "../../context/LoginContext";

const useProfile = () => {
  const userInfo = useSelector((store) => store.user);
  const [userData, setUserData] = useState(userInfo);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { setIsLoggedIn } = useContext(LoginContext);
  const getUserInfo = async () => {
    try {
      const userDetails = await user();
      console.log(userDetails);
      setUserData(userDetails);
      dispatch(addUser(userDetails));
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoggedIn(false);
      dispatch(removeUser());
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, getUserInfo, userData };
};

export default useProfile;
