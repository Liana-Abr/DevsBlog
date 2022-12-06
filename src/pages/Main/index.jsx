import React, { createContext, useState } from "react";
import {Switch, Route, Router as BrowserRouter, Routes} from 'react-router-dom';
import "./style.css";
import posts from "../../data/posts.json";
import Home from "../Home/index.jsx";
import AllPosts from "../AllPosts/index.jsx";
import CreatePost from "../CreatePost/index.jsx";
import Profile from "../Profile/index.jsx";
import PostPage from "../PostPage";

export default () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home data={posts} />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
};
