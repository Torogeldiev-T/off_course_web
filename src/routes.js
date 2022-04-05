import Courses from "./components/Courses";
import { MAIN_PAGE_ROUTE, COURSES_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: COURSES_ROUTE,
        Component: Courses
    },
]