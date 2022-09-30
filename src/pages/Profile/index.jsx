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



//поставить автар
    const setUserAvatar = (e) => {
        setImg(e.target.value);
        e.target.parentElement.style.backgroundImage = `url(${e.target.value})`;
    }
//отменить изменение
    const returnAvatar = (e) => {
        updateImg(false);
        setImg("");
        e.target.style.backgroundImage = `url(${profile.avatar})`;
    }


    const nameChange = () => {
        updateName(false);
        if (name !== profile.name) {
            api.setPersonInfo({name: name, about: profile.about})
                .then(res => res.json())
                .then(ans => {
                    // console.log(ans);
                })
            setProfile(prev => {
                prev.name = name;
                return prev;
            });
        }
    }

//изменение данных профиля(имя, описание)
    const aboutChange = () => {
        updateAbout(false);
        if (about !== profile.about) {
            api.setPersonInfo({name: profile.name, about: about})
                .then(res => res.json())
                .then(ans => {
                    // console.log(ans);
                })
            setProfile(prev => {
                prev.about = about;
                return prev;
            });
        }
    }










    return (
        <div>
            <h1>Мой профиль</h1>
            <div className="profile-container">
                <div className="profile-img" style={{backgroundImage: `url(${profile.avatar})`}}>
                    {!changeImg && <i className="bi bi-pen" onClick={() => updateImg(true)}/>}
                    {changeImg && <>
                        <input value={img} onChange={setUserAvatar}/>
                        <i className="bi bi-check2-circle" onClick={imgChange}/>
                        <i className="bi bi-x-circle" onClick={returnAvatar}/>
                    </>}
                </div>

                {!changeName
                    ? <div className="profile-username">
                        <h1>{userName || ""}</h1>
                        <i className="bi bi-pen" onClick={() => updateName(true)}/>
                    </div>
                    : <div className="profile-username">
                        <input value={userName} onInput={e => setName(e.target.value)}/>
                        <i className="bi bi-check2-circle" onClick={nameChange}/>
                    </div>
                }

                <div className="profile-email">
                    {email}
                </div>
                <div className="profile-decription">
                    {
                        !changeAbout
                            ? <>
                                <p>{profile.about || ""}</p>
                                <i className="bi bi-pen" onClick={() => updateAbout(true)}/>
                            </>
                            : <>
                                <input value={about} onInput={e => setAbout(e.target.value)}/>
                                <i className="bi bi-check2-circle" onClick={aboutChange}/>
                            </>
                    }
                </div>
            </div>
            <div className="profile-post-container">
                <h2>Посты</h2>
                {/* <Post data={posts}/> */}
            </div>
        </div>
    );
};
