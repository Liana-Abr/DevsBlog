import React from "react";
import "./style.css";
import { Ctx } from "../../App";


//массив из сервера вывести 
export default ({ data }) => {
  return (
    <div>
      <div className="cards">
        {data.map((post) => (
          <div
            className="post"
            key={post.name}
            // style={{
            //   backgroundImage: `url(${post.image})`,
            // }}
          >
          <div className="post__block">
            <div className="post-card__pic" style={{backgroundImage: post.image && `url(${post.image})`}}>

              </div>
                <span>{post.name}</span>
                <span>{post.author}</span>
              </div>

              <div className="post__block">
                {post.description
                  .split(".")
                  .map(
                    (p, i, arr) =>
                      i !== arr.length - 1 && <p key={i}>{p + "."}</p>
                  )}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
