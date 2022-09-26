import React, {useState, useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import {Ctx} from "../../App";

export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    const {userName} = useContext(Ctx);
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
      
        {!userName && <Link to="/login" 
        className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
            setModalAuth(true)
          }}>
              Войти
          </Link>}

         {!userName && <Link to="/auth"  className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
            setModalAuth(false)
          }}>

              Зарегистрироваться
          </Link>}

          {userName && <a>{userName}</a>}
          {userName && <a>Log Out</a>}
      </nav>
     
      {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}
    </header>
  );
};
