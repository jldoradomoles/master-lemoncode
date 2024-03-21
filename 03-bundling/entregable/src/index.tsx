import React from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/styles.scss";
import { HelloComponent } from "./helloComponent";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1 class="background">Hello from React dom</h1>
        <HelloComponent />
    </div>
);
