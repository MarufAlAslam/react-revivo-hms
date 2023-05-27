import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/about",
        element: <h1>Hello from About</h1>
    }
])

export default router