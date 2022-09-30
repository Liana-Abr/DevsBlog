import React,{useState, useContext} from "react";
import { Ctx } from "../../App";

import "./style.css"
export default () => {
    const [postId,setPostsId] = useState("");
    const [postTitle, setPTitle] = useState("");
    const [postText, setPText] = useState("");
    const [postImg, setPImg] = useState("");
    const {db, updDb, updPId,updPTitle,updPText,updPImg, api} = useContext(Ctx);

const addNewPost = e => {
  e.preventDefault();
  if (postTitle && postText) {
      api.addPost( {
          title: postTitle,
          text: postText,
          image: postImg
      })
          .then(res => res.json())
          .then(data => {
              console.log(data.message);
              console.log(data);
              if(data.message === "ok"){
                updPTitle(data.postTitle);
                updPText(data.postText);
                updPImg(data.postImg);
                localStorage.setItem("postTitle", data.data.postTitle);
                localStorage.setItem("postText", data.data.postText);
                localStorage.setItem("postImg", data.data.postImg);
            }
              setPImg("");
              setPTitle("");
              setPText("");
          })
}
}



  

  return (
    <div>
      <h1>Тут можно создать пост</h1>
      <form className="form-createpost" onSubmit={addNewPost} >
      <div className="form-img" style={{backgroundImage: postImg && `url(${postImg})`}}>
           
        </div>
            <input value={postTitle} type="text" id="title" placeholder="Заголовок" onInput={e => setPTitle(e.target.value)}/>
            <br />
             <input value={postText} type="text"  className="post-text" placeholder="Пост" onInput={e => setPText(e.target.value)} />
            <br />
            <input value={postImg} id="image" placeholder="Ссылка на изображение" onInput={e => setPImg(e.target.value)}/>
            <br />
            <button type="submit" onClick={addNewPost}>Создать пост</button>

        </form>
    </div>
  );
};
