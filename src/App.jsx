import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Body from "./components/Body";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Feed from "./components/Feed";
import { useState } from "react";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Provider store={appStore}>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/feed" element={<Feed />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </LoginContext.Provider>
      </Provider>
    </>
  );
}

export default App;
