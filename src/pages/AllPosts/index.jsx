import React from "react";
import Post from "../Post";
import "./style.css";
import posts from "../../data/posts.json";

export default () => {
  return (
    <div>
      <h1>Все посты</h1>
      <input type="text" name="text" className="search" placeholder="Найти пост"/>
      <input type="submit" name="submit" className="submit" value="Найти" />
      
      
      <Post data={posts} />
    </div>
  );
};
 