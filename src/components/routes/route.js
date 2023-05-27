import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login";
import Signup from "../../pages/signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/about",
        element: <h1>Hello from About</h1>
    },
    {
        path: "*",
        element: <h1>Not Found</h1>
    }
])

export default router