import React, { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl text-center font-semibold py-5">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            {/* Forget Password */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-xs">{errorMessage}</p>
            )}

            {/* Go To Register */}
            <p className="text-center font-semibold py-5">
              Don't have an account?{" "}
              <Link className="text-secondary underline" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
