import {
    createBrowserRouter,
} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import DashBoardHome from "./pages/dashboard/DashBoardHome";
import DashboardSettings from "./pages/dashboard/DashboardSettings";
import DashBoard from "./pages/dashboard/DashBoard";
import Layout from "./components/layout/Layout";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";

/*
* 라우터 객체 : createBrowserRouter를 통해 생성된 라우터 인스턴스 객체
* 라우트 객체 : 각 경로에 대한 컴포넌트 매핑된 객체
* */
const router = createBrowserRouter([
    {
      Component: Layout,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/post/:id",
                Component: Post,
            },
            {
                path: "/post/:id/detail/:detail",
                Component: PostDetail,
            },
            {
                path: "/dashboard",
                // Component: DashBoard,
                children:[
                    {
                        path : '',
                        Component: DashBoardHome,
                    },
                    {
                        path: "settings",
                        Component: DashboardSettings
                    }
                ]
            }
        ]
    },
]);


export default router;