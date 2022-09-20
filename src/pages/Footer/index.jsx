import React from "react";
import "./style.css";

export default () => {
    return <footer>
        <span className="footer__copy">
            &copy;{new Date().getFullYear()}
        </span>
        <span> Made by&nbsp;
            <a
                href="/"
                className="footer__author"
                target="_blank"
            >Liana</a>
        </span>
    </footer>
}
