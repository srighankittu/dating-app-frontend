import { useContext, useState } from "react";
import useLogin from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { initiateLogin, isLoading, error } = useLogin({
    email,
    password,
  });
  const [loginError, setLoginError] = useState(error);
  const { setIsLoggedIn } = useContext(LoginContext);
  const onLogin = async () => {
    const success = await initiateLogin();
    if (success) {
      setIsLoggedIn(true);
      navigate("/feed");
    } else {
      setLoginError(error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl mt-20 mb-20">
        <div className="card-body">
          <h2 className="card-title">Login! {email}</h2>
          <div className="items-center mt-2">
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="card-actions justify-end">
            <p className="text-blue-500">{isLoading ? "Logging in..." : ""}</p>
            {error && (
              <p className="text-red-500">
                {typeof loginError === "string"
                  ? loginError
                  : error.message || "Login failed"}
              </p>
            )}
            <button className="btn btn-primary w-full mt-4" onClick={onLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
