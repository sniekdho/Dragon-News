import React, { use } from "react";
import Marquee from "react-fast-marquee";

const newsPromise = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
  const newsData = use(newsPromise);

  const breakingNewsData = newsData.filter(
    (breakingNews) => breakingNews.others.is_today_pick == true
  );

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee pauseOnHover={true} speed={60}>
        <div className="flex gap-5">
          {breakingNewsData.map((breakingNews) => (
            <p className="font-bold">{breakingNews.title}.&emsp;</p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
