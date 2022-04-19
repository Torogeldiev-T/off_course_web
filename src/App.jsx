import { createContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { publicRoutes } from "./routes";
import { MAIN_PAGE_ROUTE } from "./utils/consts";

export const Context = createContext();

const user = {
    isAuth: true,
    id: 1,
    name: "Johny The Anarchyst",
    email: "example@mail.world",
    roles: ["USER"],
    courses: [],
};

const courses = [
    {
        id: 0,
        name: "Easily failing Tok's courses",
        creator: "Tilek Torogeldiev",
        teachers: ["Tilek", "And others"],
    },
    { id: 1, name: "John cena", creator: "John Cena", teachers: ["John Cena"] },
    { id: 2, name: "nil desperandum", creator: "ded mazay", teachers: ["xn"] },
    { id: 3, name: "East West", creator: "unknown", teachers: [] },
];

function App() {
    return (
        <Context.Provider value={{ user, courses }}>
            <div className="flex">
                <Sidebar />
                <Routes>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route
                        path="/:somePath"
                        element={
                            <Navigate to={MAIN_PAGE_ROUTE} replace={true} />
                        }
                    />
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
