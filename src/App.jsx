import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes";
import { MAIN_PAGE_ROUTE } from "./utils/consts";

function App() {

    return (
        <div>
            <Navbar />
            <Routes>
                {
                    publicRoutes.map( ( {path, Component} ) =>
                        <Route key={path} path={path} element={<Component />} />
                    )
                }
                <Route path="/:somePath" element={<Navigate to={MAIN_PAGE_ROUTE} replace={true}/>} />
            </Routes>
        </div>
    );
}

export default App;
