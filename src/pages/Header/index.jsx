import React, {useState, useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import {Ctx} from "../../App";


export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    const {userId,userName, updUId, updUName} = useContext(Ctx);

    const logOut = (e) =>{
      e.preventDefault();
      updUId("");
      updUName("");
      localStorage.removeItem("userId");
      localStorage.removeItem("author");
    }

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

        {userId && <Link to="/createpost" className="header__btn">
          Создать пост
        </Link>}

        
        {!userId && <Link to="/login" 
        className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
            setModalAuth(true)
          }}>
              Войти
          </Link>}

         {!userId && <Link to="/auth"  className="header__btn" 
          onClick={(e)=> {
            e.preventDefault();
            setModal(!modalView);
            setModalAuth(false)
          }}>

              Зарегистрироваться
          </Link>}

          {userId && <Link to="/profile" className="header__btn" >{userName}</Link>}
          {userId && <a href="/" className="header__btn" onClick={logOut}>Выход</a>}
      </nav>
     
      {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}
    </header>
  );
};
