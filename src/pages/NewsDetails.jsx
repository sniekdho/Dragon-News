import React, { useEffect, useState } from "react";
import Header from "../components/HeaderLayouts/Header";
import RightAside from "../components/MainLayouts/RightAside/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/MainLayouts/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const newsData = useLoaderData();

  //   Option 1: For rendering once
  //   const singleNews = newsData.find((news) => news.id == id);

  //   Option 2: For rendering object dynamically
  const [singleNews, setSingleNews] = useState({});

  useEffect(() => {
    const foundedNews = newsData.find((news) => news.id == id);
    setSingleNews(foundedNews);
  }, [newsData, id]);

  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-10 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">Dragon News</h2>
          <NewsDetailsCard singleNews={singleNews}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
