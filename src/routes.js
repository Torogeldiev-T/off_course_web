import Courses from "./components/Courses";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import { MAIN_PAGE_ROUTE, COURSES_ROUTE, PROFILE_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: Home
    },
    {
        path: PROFILE_ROUTE + '/:id',
        Component: Profile
    },
    {
        path: COURSES_ROUTE,
        Component: Courses
    },
]