import { createBrowserRouter } from "react-router-dom"
import Register from "./pages/Register"
import Index from "./pages/Index"
import Default from './layouts/Default'
import Trim from "./pages/Trim"
import Login from "./pages/Login"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/trim',
                element: <Trim />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
   
])

export default router