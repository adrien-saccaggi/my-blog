import { useState } from "react";
import "./ArticleList.css";
import "./ArticleThumbnail.css";
import { Link } from "react-router-dom";

export type Article_props = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  isPublished?: boolean;
  likeCount?: number;
  categoryName?: string;
  isLiked: boolean;
};
export function ArticleThumnail({
  id,
  title,
  content,
  image,
  createdAt,
  isPublished,
  likeCount,
  categoryName,
  isLiked = false,
}: Article_props) {
  const [like, setLike] = useState(isLiked);

  function handleClick() {
    setLike(!like);
  }
  let date = new Date(createdAt);
  return (
    <>
      <div className="article">
        <Link to={`/articles/${id}`}>
          <img className="article-image" src={image} alt={title}/>
        </Link>
        {<p>{date.toLocaleDateString()}</p>}
        <h2>{title}</h2>
        <p>{content.slice(0, 100) + "..."}</p>
        <p>{isPublished}</p>
        <p>{likeCount}</p>
        <p>{categoryName}</p>
        <button className="btn_like" onClick={handleClick}>
          {like ? "liked ❤️" : "like ❤"}
        </button>
      </div>
    </>
  );
}
