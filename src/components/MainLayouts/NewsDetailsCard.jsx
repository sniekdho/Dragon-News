import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ singleNews }) => {
  const { category_id, thumbnail_url, title, details } = singleNews || {};
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={thumbnail_url}
        alt=""
      />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{details}</p>
      <Link className="btn btn-secondary" to={`/category/${category_id}`}>
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
