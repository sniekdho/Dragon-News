import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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

  return <div>Total {categoryNews.length} news found</div>;
};

export default CategoryNews;
