import "./404.css"
export function NotFoundPage() {
  return (
    <div>
      <h1 className="error-title">Erreur 404: Page non trouvée</h1>
      <p className="error-content">La page que vous recherchez n'existe pas.</p>
    </div>
  );
}