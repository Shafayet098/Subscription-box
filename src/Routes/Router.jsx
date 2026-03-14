import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Cards from "../Pages/Cards/Cards";
import MyBoxes from "../Pages/my_boxes/MyBoxes";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Error from "./Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'boxes',
                element:
                    <PrivateRoute>
                        <Cards></Cards>
                    </PrivateRoute>
            },
            {
                path: 'myboxes',
                element:
                    <PrivateRoute>
                        <MyBoxes></MyBoxes>
                    </PrivateRoute>
            },
            {
                path: 'profile',
                element:
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>

            },
            
        ]
    },
    {
        path:'/*',
        Component: Error
    }
])