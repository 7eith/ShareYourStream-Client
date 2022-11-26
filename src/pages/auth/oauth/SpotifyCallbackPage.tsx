import { AppDispatch } from "@/index";
import Path from "@/routes/paths";
import { authUsingSpotifyAction } from "@/store/actions/auth/oauth/authUsingSpotifyAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { SignInError } from "../SignInPage";

const SpotifyCallbackPage = () => {

    const navigate: NavigateFunction = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [ searchParams ] = useSearchParams();

    useEffect(() => {

        const code = searchParams.get('code');
        const error = searchParams.get('error')

        if (code) {
            dispatch(authUsingSpotifyAction(code))
        }

        if (error) {
            navigate(Path.Auth.SignIn, { state: { error: SignInError.SPOTIFY }})
        }

    }, [searchParams, dispatch, navigate])

    return (
       <div className="oauthCallbackPage">
            Spotify
       </div>
    )
}

export default SpotifyCallbackPage;