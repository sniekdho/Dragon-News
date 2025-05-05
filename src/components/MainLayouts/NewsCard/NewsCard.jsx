import { FaEye, FaRegBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(rating.number);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <AiFillStar
          key={i}
          className={`text-xl ${
            i <= roundedRating ? "text-orange-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card bg-base-200 shadow-md rounded-lg p-4 relative">
      {/* Bookmark & Share Icons */}
      <div className="absolute top-3 right-3 flex gap-2 text-gray-600 text-lg">
        <button className="hover:text-primary hover:cursor-pointer transition-colors">
          <FaRegBookmark />
        </button>
        <button className="hover:text-primary hover:cursor-pointer transition-colors">
          <FiShare2 />
        </button>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="text-sm font-semibold">{author.name}</h2>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Details */}
      <p className="text-sm text-gray-700">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <Link
          to={`/news-details/${id}`}
          className="text-blue-600 ml-1 cursor-pointer hover:underline"
        >
          Read More
        </Link>
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">{renderStars()}</div>
          <span className="ml-1 font-medium text-black">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
