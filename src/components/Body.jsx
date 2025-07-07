import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import useProfile from "./hooks/useProfile";
import { useSelector } from "react-redux";

const Body = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useContext(LoginContext);
  const { getUserInfo } = useProfile();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    const isOnLoginPage = location.pathname === "/login";
    if (!user && !isOnLoginPage) {
      navigate("/login");
    }
    if (user && isOnLoginPage) {
      console.log("isLoggedIn: ", isLoggedIn);
      navigate("/feed");
    }
  }, [isLoggedIn, location, navigate]);

  useEffect(() => {
    console.log("isLoggedIn changed:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
