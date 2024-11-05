import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
          <Link to="/" className='header-link flex'><img src="./images/home.png" alt="Home" />Главная</Link>
          <Link to="/game" className='header-link flex'><img src="./images/game.png" alt="Game" />Игра</Link>
      </div>
    </footer>
  );
};