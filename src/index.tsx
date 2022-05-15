import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle"
import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <GlobalStyle/>
        <HashRouter>
            <App/>
        </HashRouter>
    </>
);

