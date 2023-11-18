import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Mains/Main";
import Home from "../../Layouts/Homes/Home";
import About from "../../Pages/About/About";

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
            }
        ]
    }
]);

export default router;