import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <div id="message">
            Hello <strong title="Created by Meta">React</strong>
        </div>
    </React.StrictMode>
);
