import React from "react";
import logoImg from "./assets/logo.png";
import * as classes from "./bye.module.scss";

export const ByeComponent: React.FC = () => {
    return (
        <>
            <div className={classes.background}>Hello with sass styles</div>
            <div id="imgContainer"></div>
            <img src={logoImg} />
        </>
    );
};
