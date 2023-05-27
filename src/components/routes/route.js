import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import OnBoarding from "../../pages/onboarding";

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
        path: "/onBoarding",
        element: <OnBoarding/>
    },
    {
        path: "*",
        element: <h1>Not Found</h1>
    }
])

export default router