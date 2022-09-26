import React from "react";
import "./style.css";


export default () => {
  return (
    <div>
      <div className="banner">
        <p className="banner-text"> Добро пожаловать в DevsBlog</p>
      </div>
      <h1>Главная страница</h1>
      {/*<Post data={posts} />*/}
        <h2>Недавние посты</h2>
        <h2>Популярные посты</h2>
    </div>
  );
};
