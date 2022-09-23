import React, {useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Modal from "../../Modal";

export default () => {
    const [modalView, setModal] = useState(false);
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

        {/*<Link to="/profile" className="header__btn">*/}
        {/*  Профиль*/}
        {/*</Link>*/}

          <Link to="/auth"  className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
          }}>

              Зарегистрироваться
          </Link>

          <Link to="/login" 
          className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
          }}>
              Войти
          </Link>
      </nav>
        {<Modal state={modalView ? "active" : ""}/>}
    </header>
  );
};
