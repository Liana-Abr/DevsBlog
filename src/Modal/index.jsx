import React, {useState, useContext} from "react";
import { Ctx } from "../App";
import "./style.css";

export default ({state, auth, updState}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [authType,setAuthType] = useState(auth);
    const {db, updDb, updUName, updUId} = useContext(Ctx);




    const handler = e => {
        e.preventDefault();
        if (authType) {
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
    const changeAuthType = e => setAuthType(!authType)

    return <div className="modal__container" style={{
        display: state ? "flex" : "none"
    }}>
        <div className="modal">
            <h2>{authType ? "Вход" : "Регистрация"}</h2>
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
                {!authType && <input 
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
                {!authType && <input 
                    type="password"
                    placeholder="Повторить пароль"
                    value={pwd2}
                    onChange={(e) => {setPwd2(e.target.value)}}
                />}
                <br />
                <button 
                    type="submit"
                    disabled={!authType && (!pwd || !pwd2 || pwd !== pwd2)}
                >
                    {authType ? "Войти" : "Зарегистрироваться"}
                </button>
            </form>
            <button type="button" onClick={() =>{
                updState(!state)
                setEmail("");
                setName("");
                setPwd("");
                setPwd2("");
            }}>close</button>

            <button type="button" onClick={changeAuthType}>{authType ? "Зарегистрироваться" : "Войти"}</button>

        </div>
    </div>
}