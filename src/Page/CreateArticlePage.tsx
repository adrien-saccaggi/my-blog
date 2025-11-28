import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateArticlePage.css";

export function CreateArticlePage() {
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    image: "",
    createdAt: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const articleToSubmit = {
      ...newArticle,
      createdAt: new Date().toISOString(),
    };
    fetch("http://localhost:3001/article", {
      method: "POST",
      body: JSON.stringify(articleToSubmit),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur serveur");
        return res.json();
      })
      .then((data) => {
        console.log("Article créé :", data);
        navigate("/articles");
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }
  return (
    <>
      <form className="Form-post" onSubmit={handleSubmit}>
        <h1 className="titre-add">Crée ton article</h1>

        <h2>titre</h2>
        <input
          type="text"
          placeholder="Titre"
          value={newArticle.title}
          onChange={(e) =>
            setNewArticle({ ...newArticle, title: e.target.value })
          }
        />
        <h2>contenu</h2>
        <textarea
          placeholder="Contenu"
          value={newArticle.content}
          onChange={(e) =>
            setNewArticle({ ...newArticle, content: e.target.value })
          }
        />
        <h2>image</h2>
        <input
          type="text"
          value={newArticle.image}
          placeholder="Image"
          onChange={(e) =>
            setNewArticle({ ...newArticle, image: e.target.value })
          }
        />
        <button className="btn_add" type="submit">
          Créer l’article
        </button>
      </form>
    </>
  );
}
