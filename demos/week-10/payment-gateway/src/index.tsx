import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// title is a "prop" (attribute)
// root.render(
//     <>
//         <App title="Created by Meta" message="Hello"></App>
//         <App title="Created by Facebook" message="Namaste"></App>
//         <App title="Open-sourced" message="Vanakkam"></App>
//     </>
// );

root.render(<App />);
