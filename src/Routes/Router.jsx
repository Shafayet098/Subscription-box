import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index:true,
                Component: Home,
            },
            {
                path:'login',
                Component:Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])