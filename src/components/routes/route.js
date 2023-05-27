import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Hello from Home</h1>
    },
    {
        path: "/about",
        element: <h1>Hello from About</h1>
    }
])

export default router