import { useState, useEffect } from "react";
import { ArticleThumnail } from "./ArticleThumbnail";
import type { Article_props } from "./ArticleThumbnail";

export default function ArticleList() {
  let [articles, setArticle] = useState<Article_props[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/article")
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  articles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        className="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="recherche"
      />
      <h2>Articles sur la faune marine</h2>
      {articles.map((article) => {
        return (
          <ArticleThumnail
            key={article.id}
            id={article.id}
            title={article.title}
            content={article.content}
            image={article.image}
            createdAt={article.createdAt}
            isLiked={article.isLiked}
          />
        );
      })}
    </>
  );
}
