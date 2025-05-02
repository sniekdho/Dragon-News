import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/MainLayouts/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const allNewsData = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(allNewsData);
      return;
    } else if (id == "1") {
      const filteredNews = allNewsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = allNewsData.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, allNewsData]);

  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span> news
        found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
