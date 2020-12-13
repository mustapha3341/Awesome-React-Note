import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FirebaseProvider from "./Firebase";

ReactDOM.render(
    <FirebaseProvider>
        <App />
    </FirebaseProvider>,
    document.getElementById("root")
);
