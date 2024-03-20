import React from "react";
import "./helloComponent.scss";

export const HelloComponent = () => {
    return (
        <div>
            <p className="background">Hello from React Component</p>
            <p className="text-color">Hello with css</p>
        </div>
    );
};
