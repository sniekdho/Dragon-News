import React from "react";
import swimming from "../../../assets/swimming.png";
import classes from "../../../assets/class.png";
import playground from "../../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-300 rounded mt-5 py-5 px-2">
      <h2 className="font-bold">QZone</h2>
      <div className="mt-2 space-y-8">
        <img className="mx-auto" src={swimming} alt="" />
        <img className="mx-auto" src={classes} alt="" />
        <img className="mx-auto" src={playground} alt="" />
      </div>
    </div>
  );
};

export default QZone;
