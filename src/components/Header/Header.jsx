import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  
  return (
    <header className="header">
      <div className="header-container">
          <div className="header-logo-container">
            <a href="/" className="header-logo">
              <img className="header-logo__img" src="./images/logo.png" alt=""/>
            </a>
            <span>От Мяу до Hello!</span>
          </div>
          <div className="link-container">
            <Link to="/" className='header-link'><img src="./images/home.png" alt="Home" />Главная</Link>
            <Link to="/game" className='header-link'><img src="./images/game.png" alt="Game" />Игра</Link>
          </div>
      </div>
    </header>
  );
};