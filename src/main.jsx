import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export const Context = React.createContext();

const user = {
    isAuth: !true,
    user: {},
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Context.Provider value={user}>
                <App />
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
