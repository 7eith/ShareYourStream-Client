import AuthentificationLayout from "@/pages/auth"
import DiscordCallbackPage from "@/pages/auth/oauth/DiscordCallbackPage"
import SpotifyCallbackPage from "@/pages/auth/oauth/SpotifyCallbackPage"
import PasswordForgotLayout from "@/pages/auth/password"
import PasswordForgotChangePage from "@/pages/auth/password/PasswordForgotChangePage"
import PasswordForgotRequestPage from "@/pages/auth/password/PasswordForgotRequestPage"
import SignInPage from "@/pages/auth/SignInPage"
import SignUpPage from "@/pages/auth/SignUpPage"

import Path from "@/routes/paths"

import { Navigate, RouteObject } from "react-router"

const AuthRouter: RouteObject[] = [
    {
        path: Path.Auth.Root,
        element: <AuthentificationLayout />,
        children: [
            { index: true, element: <Navigate to={Path.Auth.SignIn} /> },
            { path: Path.Auth.SignIn, element: <SignInPage /> },
            { path: Path.Auth.SignUp, element: <SignUpPage /> },
            { path: Path.Auth.OAuth.DiscordCallback, element: <DiscordCallbackPage /> },
            { path: Path.Auth.OAuth.SpotifyCallback, element: <SpotifyCallbackPage /> },
            { 
                path: Path.Auth.PasswordForgot.Root, element: <PasswordForgotLayout />, children: [
                    { index: true, element: <PasswordForgotRequestPage /> },
                    { path: Path.Auth.PasswordForgot.Change, element: <PasswordForgotChangePage /> },
                ] 
            }
        ]
    }
]
export default AuthRouter;