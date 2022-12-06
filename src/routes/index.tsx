import { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Path from "./paths";

import ErrorPage from "@/pages/errors";

import HomePage from "@/pages/home";

import DashboardPage from "@/pages/dashboard";
import DashboardHomePage from "@/pages/dashboard/DashboardHomePage";
import ProfilePage from "@/pages/dashboard/profile";


import AuthentificationLayout from "@/pages/auth";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";

import PasswordForgotLayout from "@/pages/auth/password";
import PasswordForgotRequestPage from "@/pages/auth/password/PasswordForgotRequestPage";
import PasswordForgotChangePage from "@/pages/auth/password/PasswordForgotChangePage";
import SpotifyCallbackPage from "@/pages/auth/oauth/SpotifyCallbackPage";
import DiscordCallbackPage from "@/pages/auth/oauth/DiscordCallbackPage";
import ToolsPage from "@/pages/dashboard/tools/ToolsPage";
import ExportLikesToolPage from "@/pages/dashboard/tools/ExportLikesToolPage";
import ProfileOverview from "@/pages/dashboard/profile/ProfileOverview";
import DashboardErrorPage from "@/pages/dashboard/utils/DashboardErrorPage";

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

                <Route path={Path.Auth.Root} element={<AuthentificationLayout />} >
                    <Route index element={<Navigate to="signIn"/>}/>

                    <Route path={Path.Auth.SignIn} element={<SignInPage />} />
                    <Route path={Path.Auth.SignUp} element={<SignUpPage />} />

                    <Route path={Path.Auth.PasswordForgot.Root} element={<PasswordForgotLayout />} >
                        <Route index element={<PasswordForgotRequestPage />} />
                        <Route path={Path.Auth.PasswordForgot.Change} element={<PasswordForgotChangePage />} />
                    </Route>

                    <Route path={Path.Auth.OAuth.SpotifyCallback} element={<SpotifyCallbackPage />} />
                    <Route path={Path.Auth.OAuth.DiscordCallback} element={<DiscordCallbackPage />} />
                </Route>
                
                <Route path={Path.Dashboard.Root} element={<DashboardPage />} >
                    <Route index element={<DashboardHomePage />} />

                    <Route path={Path.Dashboard.Profile.Root} element={<ProfilePage />}> 
                        <Route index element={<Navigate to="@me" />} />

                        <Route path={Path.Dashboard.Profile.Me} element={<ProfileOverview />} />
                    </Route>

                    <Route path={Path.Dashboard.Tools.Root}>
                        <Route index element={<ToolsPage />} />

                        <Route path={Path.Dashboard.Tools.ExportLikes} element={<ExportLikesToolPage />} />
                    </Route>

                    <Route path="*" element={<DashboardErrorPage />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default Router;
