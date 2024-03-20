import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import { HelloComponent } from "./helloComponent";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1 className="background">Hello from React dom</h1>
        <HelloComponent />
    </div>
);
