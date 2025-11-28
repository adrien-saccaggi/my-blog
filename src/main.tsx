import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/Article/ArticleList.tsx";
import { Header } from "./components/Header.tsx";
import { ArticlePage } from "./Page/ArticlePage.tsx";
import { CreateArticlePage } from "./Page/CreateArticlePage.tsx";
import { UpdateArticlePage } from "./Page/UpdateArticlePage.tsx";
import { NotFoundPage } from "./Page/404.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/new" element={<CreateArticlePage />} />
        <Route path="/articles/:id/edit" element={<UpdateArticlePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
