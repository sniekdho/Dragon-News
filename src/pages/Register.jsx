import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold py-5">
            Register your account
          </h1>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            {/* Register Button */}
            <button className="btn btn-neutral mt-4">Register</button>

            {/* Go To Login */}
            <p className="text-center font-semibold py-5">
              Already have an account?{" "}
              <Link className="text-secondary underline" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
