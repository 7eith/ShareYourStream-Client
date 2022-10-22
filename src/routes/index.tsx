import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Path from "./paths";

import HomePage from "@/pages/home";

import DashboardPage from "@/pages/dashboard";
import DashboardHomePage from "@/pages/dashboard/DashboardHomePage";
import ProfilePage from "@/pages/dashboard/profile";


import ErrorPage from "@/pages/errors";

const FormatPageTitle = (_key: string) => {

    if (_key === "/app")
        return "Dashboard";
    if (_key === "/app/profile")
        return "Profile"
    return "undefined key"
}

const Router = () => {

    const location = useLocation();

    useEffect(() => {
        console.log(location)
        console.log(FormatPageTitle(location.pathname))
        document.title = `ShareYourStream - ${FormatPageTitle(location.pathname)}`
    }, [location])
    

    return (
        <Routes>
            <Route index path={Path.Home.Root} element={<HomePage />} />
            <Route path={Path.Dashboard.Root} element={<DashboardPage />} >
                <Route index element={<DashboardHomePage />} />

                <Route path={Path.Dashboard.Profile.Root} element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default Router;
