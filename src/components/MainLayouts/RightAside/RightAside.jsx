import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import bg from "../../../assets/bg.png";

const RightAside = () => {
  return (
    <div>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <img className="w-full mt-5 rounded" src={bg} alt="" />
    </div>
  );
};

export default RightAside;
