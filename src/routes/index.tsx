import { createBrowserRouter }  from "react-router-dom";

import Path from "./paths";

import ErrorPage from "@/pages/errors";

import HomePage from "@/pages/home";

import App from "@/app";
import AuthRouter from "./routers/auth.router";
import DashboardRouter from "./routers/dashboard.router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: Path.Home.Root,
                element: <HomePage />,
            },
            ...AuthRouter,
            ...DashboardRouter
        ],
    },
]);


export default router;