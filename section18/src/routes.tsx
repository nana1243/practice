import {
    createBrowserRouter,
} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";

/*
* 라우터 객체 : createBrowserRouter를 통해 생성된 라우터 인스턴스 객체
* 라우트 객체 : 각 경로에 대한 컴포넌트 매핑된 객체
* */
const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/about",
        Component: About,
    },
]);


export default router;