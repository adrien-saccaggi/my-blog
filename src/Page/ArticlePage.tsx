import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Article_props } from "../components/Article/ArticleThumbnail";
import "./ArticlePage.css";

export function ArticlePage() {
  let [article, setArticle] = useState<Article_props>();

  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/article/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [id]);
  function deleteArticle() {
    fetch(`http://localhost:3001/article/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Impossible de supprimer l’article");
      }
      Navigate("/articles");
    });
  }
  return (
    <>
      <>
        {article ? (
          <>
            <div className="ArticlePage">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <img className="image-article-page" alt={article.title} src={article.image} />
              <p>{new Date(article.createdAt).toLocaleString()}</p>
              <button
                className="btnmod"
                onClick={() => Navigate(`/articles/${id}/edit`)}
              >
                Modifier
              </button>
              <button className="btnsupr" onClick={deleteArticle}>
                Supprimer
              </button>
            </div>
          </>
        ) : (
          <p>Erreur 404: L'article n'existe pas</p>
        )}
      </>
    </>
  );
}
