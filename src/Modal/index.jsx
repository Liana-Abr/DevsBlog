import React, {useState, useContext} from "react";
import { Ctx } from "../App";
import "./style.css";

export default ({state, auth, updState}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");
    const {db, updDb, updUName, updUId} = useContext(Ctx);

    const handler = e => {
        e.preventDefault();
        if (auth) {
            let user = db.filter(rec => rec.email === email && rec.pwd === pwd)[0];
            if (user) {
                updUName(user.name);
                updUId(db.findIndex(rec => rec.email === email && rec.pwd === pwd));
                setEmail("");
                setName("");
                setPwd("");
                setPwd2("");
                updState(false);
            } else {
                alert("Неверные данные пользователя");
            }
        } else {
            let index = db.findIndex(rec => rec.email === email);
            if (index === -1) {
                updDb([...db, {
                    name: name,
                    pwd: pwd,
                    email: email
                }])
                localStorage.setItem("db", JSON.stringify([...db, {
                    name: name,
                    pwd: pwd,
                    email: email
                }]))
                updUName(name)
                localStorage.setItem("userName", name);
                updUId(db.length);
                localStorage.setItem("userId", db.length);
                setEmail("");
                setName("");
                setPwd("");
                setPwd2("");
                updState(false);
            } else {
                alert("Такой пользователь уже есть");
            }
        }        
    }

    return <div className="modal__container" style={{
        display: state ? "flex" : "none"
    }}>
        <div className="modal">
            <h2>{auth ? "Войти" : "Зарегистрироваться"}</h2>
            <form onSubmit={handler}>
                {/* 
                    Почта - уникальный логин
                    Имя (регистрация)
                    Пароль
                    Повторить пароль (регистрация)
                */}
                <input
                    type="email"
                    name="email"
                    placeholder="Электронный адрес"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                {!auth && <input 
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Имя пользователя"
                    onChange={(e) => {setName(e.target.value)}}
                />}
                <input 
                    type="password"
                    name="pwd"
                    placeholder="Пароль"
                    value={pwd}
                    onChange={(e) => {setPwd(e.target.value)}}
                />
                {!auth && <input 
                    type="password"
                    placeholder="Повторить пароль"
                    value={pwd2}
                    onChange={(e) => {setPwd2(e.target.value)}}
                />}
                <button 
                    type="submit"
                    disabled={!auth && (!pwd || !pwd2 || pwd !== pwd2)}
                >
                    {auth ? "Войти" : "Зарегистрироваться"}
                </button>
            </form>
            <button type="button" onClick={() =>{
                updState(!state)
                setEmail("");
                setName("");
                setPwd("");
                setPwd2("");
            }}>close</button>
        </div>
    </div>
}