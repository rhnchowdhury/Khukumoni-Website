import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Mains/Main";
import Home from "../../Layouts/Homes/Home";
import About from "../../Pages/About/About";
import Program from "../../Pages/Programs/Program";
import Food from "../../Pages/ProgramAll/Foods/Food";

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
            }
        ]
    }
]);

export default router;