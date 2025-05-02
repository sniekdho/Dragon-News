import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee pauseOnHover={true} speed={60}>
        <div className="flex gap-5">
          <p className="font-bold">
            Md. Shafiqul Islam. Computer Science Engineer. From Bangladesh.
          </p>
          <p className="font-bold">
            Nazmun Nahar Mou. Computer Science Engineer. From Bangladesh.
          </p>
          <p className="font-bold mr-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            doloribus.
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
