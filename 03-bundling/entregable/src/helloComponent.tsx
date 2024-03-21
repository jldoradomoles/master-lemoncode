import React from "react";
import styles from "./hello.module.scss";
import logoImg from "./content/logo.png";

export const HelloComponent = () => {
    return (
        <div>
            <p>Hello from React Component</p>
            <p className={`${styles.textColor}`}>Hello with sass</p>
            <img src={logoImg} />
        </div>
    );
};
