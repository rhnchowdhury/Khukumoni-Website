import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Mains/Main";
import Home from "../../Layouts/Homes/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;