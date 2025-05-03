import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mt-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item bg-base-100 px-4 py-8 justify-start">
          <div className="rounded-full avatar p-2 bg-base-300 mr-2">
            <FaFacebook color="blue" />
          </div>
          Facebook
        </button>
        <button className="btn join-item bg-base-100 px-4 py-8 justify-start">
          <div className="rounded-full avatar p-2 bg-base-300 mr-2">
            <FaTwitter color="skyblue" />
          </div>
          Twitter
        </button>
        <button className="btn join-item bg-base-100 px-4 py-8 justify-start">
          <div className="rounded-full avatar p-2 bg-base-300 mr-2">
            <FaInstagram color="red" />
          </div>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
