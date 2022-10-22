import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Path from "./paths";

import HomePage from "@/pages/home";

import DashboardPage from "@/pages/dashboard";
import DashboardHomePage from "@/pages/dashboard/DashboardHomePage";
import ProfilePage from "@/pages/dashboard/profile";

import ErrorPage from "@/pages/errors";

const TitleObserver = () => {

    const { t } = useTranslation('paths');
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname !== "/")
            document.title = `ShareYourStream - ${t(pathname)}`;
        else
            document.title = "Share Your Stream"
    })

    return null;
}

const Router = () => {
    return (
        <>
            <TitleObserver />

            <Routes>
                <Route index path={Path.Home.Root} element={<HomePage />} />
                <Route path={Path.Dashboard.Root} element={<DashboardPage />} >
                    <Route index element={<DashboardHomePage />} />

                    <Route path={Path.Dashboard.Profile.Root} element={<ProfilePage />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
                
            </Routes>
        </>
    );
};

export default Router;
