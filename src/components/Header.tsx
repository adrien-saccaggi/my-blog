import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

export function Header() {
  const Navigate = useNavigate();

  return (
    <>
      <header className="header-container">
        <nav>
          <ul>
            <div className="header">
              <li>
                <img
                  src="https://media.discordapp.net/attachments/1422875324118597653/1443555840232783912/Gemini_Generated_Image_egkxgegkxgegkxge.png?ex=69297fa4&is=69282e24&hm=f26b006663da648c33dabe6f2d1df36d859465cb92461c805fdffb5e0c9b665d&=&format=webp&quality=lossless&width=1466&height=800"
                  alt="logo requin"
                  onClick={() => Navigate(`/`)}
                  className="logo"
                ></img>
              </li>
              <li>
                <NavLink to="/">Accueil </NavLink>
              </li>
              <li>
                <NavLink to="/articles"> Articles</NavLink>
              </li>
              <li>
                <NavLink to="/articles/new"> Ajouter un article</NavLink>
              </li>

              <li>
                <button className="btn_head">Me Connecter</button>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
