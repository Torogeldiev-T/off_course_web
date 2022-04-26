import { createContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { publicRoutes } from "./routes";
import { MAIN_PAGE_ROUTE , COURSES_ROUTE} from "./utils/consts";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export const Context = createContext();

const user = {
    isAuth: true,
    id: 1,
    name: "Johny The Anarchyst",
    email: "example@mail.world",
    roles: ["USER"],
    courses: [],
};

const sidebar = [
    {name: "Inbox", path: MAIN_PAGE_ROUTE, icon: <InboxIcon />},
    {name: "My courses", path: COURSES_ROUTE, icon: <MenuBookOutlinedIcon />},
    {name: "Starred", path: MAIN_PAGE_ROUTE, icon: <StarBorderIcon />},
    {name: "All courses", path: MAIN_PAGE_ROUTE},

]

const courses = [
    {
        id: 0,
        name: "Easily failing Tok's courses",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        creator: "Tilek Torogeldiev",
        teachers: ["Tilek", "And others"],
        completed: 78
    },
    { id: 1, name: "John cena", creator: "John Cena", teachers: ["John Cena"], completed: 13 },
    { id: 2, name: "nil desperandum", creator: "ded mazay", teachers: ["xn"], completed: 99 },
    { id: 3, name: "East West", creator: "unknown", teachers: [], completed: 55 },
];

const profile = {
    'Full name': 'Johny The Anarchyst',
    'Status': 'Overcoming failures',
    'Email': 'johndoe@mail.com',
    courses: [
        {
            id: 0,
            name: "Easily failing Tok's courses",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            creator: "Tilek Torogeldiev",
            teachers: ["Tilek", "And others"],
            completed: 78
        },
        { id: 1, name: "John cena", creator: "John Cena", teachers: ["John Cena"], completed: 13 },
        { id: 2, name: "nil desperandum", creator: "ded mazay", teachers: ["xn"], completed: 99 },
        { id: 3, name: "East West", creator: "unknown", teachers: [], completed: 55 },
    ],
    'University': 'American University of Central Asia',
    'Department': 'Software Engineering',
    interests: ['Networking', 'Web development', 'Social work'],
    'Location': 'Bishkek'
}

function App() {
    return (
        <Context.Provider value={{ user, courses, sidebar, profile }}>
            <div className="flex">
                <Sidebar />
                <Routes>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="/:somePath" element={ <Navigate to={MAIN_PAGE_ROUTE} replace={true} /> } />
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
