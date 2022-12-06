import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    return (
        <div className="post">
            <img className="post__image" src={post.image !== undefined ? post.image : "https://media.istockphoto.com/id/1399859917/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?b=1&s=170667a&w=0&k=20&c=jBE3Ul6LpRXO5UhCYTmLArfdFc6YEWwhzarxTmtZI2U="} />
            <div className="post__wrapper">
                <h3 className="post__title">
                    <Link to={`/post/${post._id}`}>{post.title}</Link>
                </h3>

            </div>
        </div>
    );
};

export default Post;