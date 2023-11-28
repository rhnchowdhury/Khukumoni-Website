import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Mains/Main";
import Home from "../../Layouts/Homes/Home";
import About from "../../Pages/About/About";
import Program from "../../Pages/Programs/Program";
import Food from "../../Pages/ProgramAll/Foods/Food";
import Corona from "../../Pages/ProgramAll/Corona/Corona";
import Education from "../../Pages/ProgramAll/Education/Education";
import Health from "../../Pages/ProgramAll/Health/Health";
import Skill from "../../Pages/ProgramAll/Skills/Skill";
import Child from "../../Pages/ProgramAll/Child/Child";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/program',
                element: <Program></Program>
            },
            {
                path: '/food',
                element: <Food></Food>
            },
            {
                path: '/corona',
                element: <Corona></Corona>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/health',
                element: <Health></Health>
            },
            {
                path: '/child',
                element: <Child></Child>
            },
            {
                path: '/skill',
                element: <Skill></Skill>
            }
        ]
    }
]);

export default router;