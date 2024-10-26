import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  
  return (
    <header className="header">
      <div className="header-container">
          <a href="/" className="header-logo">
            <img className="header-logo__img" src="./images/book2.png" alt="book"/>
          </a>
          <div className="link-container">
            <Link to="/" className='button'><img src="./images/home.png" alt="Home" /></Link>
            <Link to="/game" className='button'><img src="./images/game.png" alt="Game" /></Link>
          </div>
      </div>
    </header>
  );
};