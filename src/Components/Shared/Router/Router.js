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
import Dress from "../../Pages/ProgramAll/Dress/Dress";
import Stipend from "../../Pages/ProgramAll/Stipends/Stipend";
import Clean from "../../Pages/ProgramAll/Cleans/Clean";
import Clothe from "../../Pages/ProgramAll/Clothes/Clothe";
import Relief from "../../Pages/ProgramAll/Reliefs/Relief";
import Login from "../../Pages/Logins/Login";
import Volunteer from "../../Pages/Volunteers/Volunteer";
import Contact from "../../Pages/Contacts/Contact";
import Blog from "../../Pages/Blogs/Blog";

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
                path: '/login',
                element: <Login></Login>
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
            },
            {
                path: '/dress',
                element: <Dress></Dress>
            },
            {
                path: '/stipend',
                element: <Stipend></Stipend>
            },
            {
                path: '/clean',
                element: <Clean></Clean>
            },
            {
                path: '/clothe',
                element: <Clothe></Clothe>
            },
            {
                path: '/relief',
                element: <Relief></Relief>
            },
            {
                path: '/news',
                element: <Blog></Blog>
            },
            {
                path: '/volunteer',
                element: <Volunteer></Volunteer>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;