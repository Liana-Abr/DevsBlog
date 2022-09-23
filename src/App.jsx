import React, {createContext,useState} from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

export const Ctx = createContext({})

export const App = () => {
  const [db,updDb] = useState(JSON.parse(localStorage.getItem("db") || "[]"))
  const [userId,setUserId] = useState(localStorage.getItem("userId") || "")
  const [userName,setUserName] = useState(localStorage.getItem("userName") || "")

  return (
    <Ctx.Provider value={{
      db: db,
      userId: userId,
      userName: userName,
      updDb: updDb,
      updUId: setUserId,
      updUName: setUserName

    }}>
      <Header />
      <Main/>
      <Footer />
    </Ctx.Provider>
  );
};
