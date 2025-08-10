import {
    createBrowserRouter,
} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>,
    },
    {
        path: "/about",
        element: <About/>,
    }
]);


export default router;