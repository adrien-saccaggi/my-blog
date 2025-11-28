import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Article_props } from "../components/Article/ArticleThumbnail";
import "./UpdateArticlePage.css";


export function UpdateArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article_props | null>(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/article/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [id]);

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!article) return <p> aucun article trouvé </p>;
    
    
    fetch(`http://localhost:3001/article/${article.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
        navigate("/articles");
      })
      .catch((err) => setError(err.message));
  }
  if (!article) return <p> aucun article trouvé </p>;

  if (error) return <p>une erreur est survenu</p>;

  return (
    <>
      <form className="form-upd" onSubmit={handleSubmit}>
        <h1 className="titre-mod">Modifie l'article</h1>

        <h2>Titre</h2>
        <input
          name="title"
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
        />
        <h2>Contenu</h2>
        <textarea
          name="content"
          value={article.content}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
        />
        <h2>Image</h2>
        <input
          type="text"
          value={article.image}
          placeholder="Image"
          onChange={(e) => setArticle({ ...article, image: e.target.value })}
        />
        <button className="btn_upd" type="submit">
          Modifier l’article
        </button>
      </form>
    </>
  );
}
