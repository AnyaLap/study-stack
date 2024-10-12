import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
          <a href="!#" className="header-logo">
            <img className="header-logo__img" src="./images/book2.png" alt="book"/>
          </a>
            <h1>Узнай мир лучше, преодолевая языковой барьер!</h1>
          <div>
            <button className="button">Вход</button>
            <button className="button">Регистрация</button>
          </div>
      </div>
    </header>
  );
};