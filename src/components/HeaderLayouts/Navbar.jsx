import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("Log out successful");
        // navigate("/auth/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex items-center">
      <div className="w-1/6">{user && user.email}</div>
      <div className="w-4/6 text-center text-accent space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="w-1/6 flex gap-2 justify-end">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary px-10">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
