import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold py-5">
            Login your account
          </h1>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            {/* Forget Password */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button className="btn btn-neutral mt-4">Login</button>

            {/* Go To Register */}
            <p className="text-center font-semibold py-5">
              Don't have an account?{" "}
              <Link className="text-secondary underline" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
