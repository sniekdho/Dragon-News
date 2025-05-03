import React from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/6"></div>
      <div className="w-4/6 text-center text-accent space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="w-1/6 flex gap-2 justify-end">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
