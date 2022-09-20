import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header>
      <a href="/" className="header__logo">
        DevsBlog
      </a>

      <nav className="header__menu">
        <Link to="/" className="header__btn">
          Главная
        </Link>

        <Link to="/allposts" className="header__btn">
          Все посты
        </Link>

        <Link to="/createpost" className="header__btn">
          Создать пост
        </Link>

        <Link to="/profile" className="header__btn">
          Профиль
        </Link>
      </nav>
    </header>
  );
};
