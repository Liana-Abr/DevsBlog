import React from "react";
import Post from "../Post";
import "./style.css"
// import posts from "../../data/posts.json";
export default () => {
  return (
    <div>
      <h1>Мой профиль</h1>
      <div className="profile-container">
        <img src="" alt="фото профиля" className="profile-img"></img>
        <h2>Имя</h2>
        <h2>Имя пользователя</h2>
        <h3>Описание</h3>
      </div>
      <div className="profile-post-container">
        <h2>Все посты</h2>
        {/* <Post data={posts}/> */}
      </div>
    </div>
  );
};
