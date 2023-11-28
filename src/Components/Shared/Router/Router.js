import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Mains/Main";
import Home from "../../Layouts/Homes/Home";
import About from "../../Pages/About/About";
import Program from "../../Pages/Programs/Program";
import Food from "../../Pages/ProgramAll/Foods/Food";
import Corona from "../../Pages/ProgramAll/Corona/Corona";
import Education from "../../Pages/ProgramAll/Education/Education";

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
            }
        ]
    }
]);

export default router;