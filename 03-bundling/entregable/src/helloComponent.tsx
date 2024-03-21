import React from "react";
import styles from "./hello.module.scss";

export const HelloComponent = () => {
    return (
        <div>
            <p>Hello from React Component</p>
            <p className={`${styles.textColor}`}>Hello with sass</p>
        </div>
    );
};
