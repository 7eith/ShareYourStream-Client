import { AppDispatch } from "@/index";
import Path from "@/routes/paths";
import { authUsingDiscordAction } from "@/store/actions/auth/oauth/authUsingDiscordAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { SignInError } from "../SignInPage";

const DiscordCallbackPage = () => {

    const navigate: NavigateFunction = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [ searchParams ] = useSearchParams();

    useEffect(() => {

        const code = searchParams.get('code');
        const error = searchParams.get('error')

        if (code) {
            dispatch(authUsingDiscordAction(code))
        }

        if (error) {
            navigate(Path.Auth.SignIn, { state: { error: SignInError.DISCORD }})
        }

    }, [searchParams, dispatch, navigate])

    return (
       <div className="oauthCallbackPage">
            Discord
       </div>
    )
}

export default DiscordCallbackPage;