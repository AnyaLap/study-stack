import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

export const Header = () => {

  const [isHidden, setIsHidden] = useState(false);

  //Скрытие заголовка в хэдере при прокрутке страницы
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className="header">
      <div className="header-container">
          <div className="header-logo-container">
            <a href="/" className="header-logo">
              <img className="header-logo__img" src="./images/logo.png" alt=""/>
            </a>
            <span className={isHidden ? 'hidden' : ''}>От Мяу до Hello!</span>
          </div>
          <div className="link-container">
            <Link to="/" className='nav-link'><img src="./images/home.png" alt="Home" />Главная</Link>
            <Link to="/game" className='nav-link'><img src="./images/game.png" alt="Game" />Игра</Link>
          </div>
      </div>
    </header>
  );
};