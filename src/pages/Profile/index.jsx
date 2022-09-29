import React,{useContext} from "react";
import Post from "../Post";
import "./style.css";
import {Ctx} from "../../App";
// import posts from "../../data/posts.json";
export default () => {
  const {userName} = useContext(Ctx);

  return (
    <div>
      <h1>Мой профиль</h1>
      <div className="profile-container">
        <img src="" alt="фото профиля" className="profile-img"></img>
        <h2>{userName}</h2>
        <h3>почта</h3>
        <h3>Описание</h3>
      </div>
      <div className="profile-post-container">
        <h2>Посты</h2>
        {/* <Post data={posts}/> */}
      </div>
    </div>
  );
};
