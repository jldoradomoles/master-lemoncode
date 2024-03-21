import "./mystyles.scss";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello.component.jsx";
import { ByeComponent } from "bye.component.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <HelloComponent />
        <ByeComponent />
    </div>
);
