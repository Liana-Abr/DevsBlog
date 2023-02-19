import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { useParams, Link } from 'react-router-dom';
import { Ctx } from "../../App";
import {parse} from "../../utils";

const PostPage = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [isPopup, setIsPopup] = useState(false);
    const [isPopupComments, setIsPopupComments] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [comment, setComment] = useState("");

    const { userId, api } = useContext(Ctx);

    const authStatus = localStorage.getItem("isAuth");

    useEffect(() => {
        api.getPost(id)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                setIsLoad(true);
            });
    }, [data, api, id])

    const handle = () => {
        api.deletePost(id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    };

    const handlerComment = (evt) => {
        evt.preventDefault();
        if (parse(authStatus)) {
            if (comment !== "") {
                api.updatePost(id, { comments: [...data.comments, comment] }).then(res => res.json()).then(data => {
                    if (data.message === "ok") {
                        console.log('Success!');
                    }
                })
            } else {
                alert("Нельзя отправить пустой комментарий!");
            }

        } else {
            setIsPopupComments(true);
        }

    };

    return (
        <section className="post-page">
            <h1 className="post-page__title">{isLoad && data.title}</h1>
            <div className="post-page__wrapper">
                {
                    isLoad ?
                        <>
                            <img className="post-page__img" src={data.image !== undefined ? data.image : "https://media.istockphoto.com/id/1399859917/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?b=1&s=170667a&w=0&k=20&c=jBE3Ul6LpRXO5UhCYTmLArfdFc6YEWwhzarxTmtZI2U="} alt={data.title} />
                            <div className="post-page__block">
                                {
                                    data.tags.map((el, index) => {
                                        return <div key={index} className="post-page__tag">{el}</div>
                                    })
                                }
                            </div>

                        </>

                        : <p>Загрузка...</p>
                }


                <Link className="post-page__link" to="/allposts">Вернуться к постам</Link>

            </div>
        </section>
    );
};

export default PostPage;