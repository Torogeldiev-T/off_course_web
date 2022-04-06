import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export const Context = React.createContext();

const user = {
    isAuth: true,
    id: 1,
    name: 'Johny The Anarchyst',
    email: 'example@mail.world',
    roles: ['USER'],
    courses: []    
};

const courses = [
    {id: 0, name: 'Easily failing Tok\'s courses', creator: 'Tilek Torogeldiev', teachers: ['Tilek', 'And others']},
    {id: 1, name: 'John cena', creator: 'John Cena', teachers: ['John Cena']},
    {id: 2, name: 'nil desperandum', creator: 'ded mazay', teachers: ['xn']},
    {id: 3, name: 'East West', creator: 'unknown', teachers: []},
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Context.Provider value={ {user, courses} }>
                <App />
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
