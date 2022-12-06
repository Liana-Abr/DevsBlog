import React,{useContext,useState} from "react";
import Post from "../Post";
import "./style.css";
import {Ctx} from "../../App";
// import posts from "../../data/posts.json";

export default () => {
    const [email, setEmail] = useState("");
    const [userName,setUserName] = useState(localStorage.getItem("author") || "");
    const [profile, setProfile] = useState({});
    const [changeName, updateName] = useState(false)
    const [name, setName] = useState("");
    const [changeAbout, updateAbout] = useState(false)
    const [about, setAbout] = useState("");
    const [changeImg, updateImg] = useState(false)
    const [img, setImg] = useState("");
    const {api, setPersonInfo,updateUserImg} = useContext(Ctx);

    const imgChange = () => {
        updateImg(false);
        api.setPersonInfo({avatar: img})
            .then(res => res.json())
            .then(ans => {
                // console.log(ans);
            })
        setProfile(prev => {
            prev.avatar = img;
            return prev;
        });
    }
    const getUserInfo = (e) =>{
        api.getUser()
            .then(res => res.json())
            .then(ans => {
                setProfile(ans);
                setName(ans.name);
                setAbout(ans.about);
            })
    }


    return (
        <div>
            <h1>Мой профиль</h1>
            <div className="profile-container">
                <div className="profile-img" style={{backgroundImage: `url(${profile.avatar})`}}>
                </div>
                    <div className="profile-username">
                        <h1>{userName || ""}</h1>

                    </div>
                <div className="profile-decription">

                </div>
            </div>
            <div className="profile-post-container">

            </div>
        </div>
    );
};
