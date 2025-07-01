import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import useProfile from "./hooks/useProfile";

const Body = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);
  const { getUserInfo } = useProfile();
  useEffect(() => {
    const isOnLoginPage = location.pathname === "/login";
    if (!isLoggedIn && !isOnLoginPage) {
      navigate("/login");
    }
    if (isLoggedIn && isOnLoginPage) {
      console.log("isLoggedIn: ", isLoggedIn);
      navigate("/feed");
    }
  }, [isLoggedIn, location, navigate]);

  useEffect(() => {
    getUserInfo(); // fetch profile to check for login status
  }, [navigate]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
