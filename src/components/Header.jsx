import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img className="w-sm" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
