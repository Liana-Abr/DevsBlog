import React from "react";
import "./style.css";
import posts from "../../data/posts.json";
import Home from "../Home/index.jsx";
import AllPosts from "../AllPosts/index.jsx";
import CreatePost from "../CreatePost/index.jsx";
import Profile from "../Profile/index.jsx";
import { Routes, Route } from "react-router-dom";

export default () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home data={posts} />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
};
