import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as SpotifyICO } from "@/assets/svgs/spotify.svg";
import { AppDispatch } from "@/index";
import { authUsingSpotifyAction } from "@/store/actions/auth/oauth/authUsingSpotifyAction";
import { NavigateFunction, useNavigate } from "react-router";
import Path from "@/routes/paths";
import { SignInError } from "@/pages/auth/SignInPage";

const SpotifyURL = "https://accounts.spotify.com/authorize?response_type=code&client_id=" + 
		"612daca3db4447cdb94de2e117e40022" + 
		"&scope=user-top-read%20user-read-private%20user-read-recently-played%20user-read-email" +
		"&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fspotify&show_dialog=true"

const SpotifyAuthProvider = () => {

	const navigate: NavigateFunction = useNavigate();
    const dispatch: AppDispatch = useDispatch();
	const [ oauthWindow, setOAuthWindow ] = useState(null);

	const openAuthWindow = () => {
		const top = 150;
		const left = window.screenX + (window.outerWidth) / 1.55;
		const title = `SignIn using Spotify`;
		const url = SpotifyURL;
		setOAuthWindow(window.open(url, title, `width=${500},height=${700},left=${left},top=${top}`) as any);
	}

	useEffect(() => {
		if (!oauthWindow) 
			return ;

		const timer = setInterval(async () => {
			if (!oauthWindow) {
				timer && clearInterval(timer);
				return ;
			}

			const popUp = oauthWindow as Window;
			const windowURL = popUp.location.href;

			if (!windowURL) 
				return ;

			const searchParams = new URL(windowURL).searchParams;

			const oauthCode = searchParams.get('code');
			const error = searchParams.get('error');

			if (oauthCode) {
				popUp.close();
                dispatch(authUsingSpotifyAction(oauthCode))
				setOAuthWindow(null);
				timer && clearInterval(timer);
			}

			if (error) {
				popUp.close();
				setOAuthWindow(null);
				timer && clearInterval(timer);
				
				navigate(Path.Auth.SignIn, { state: { error: SignInError.SPOTIFY }})
			}

		}, 500)
	}, [oauthWindow, dispatch, navigate])

    return (
        <div className="provider spotify" onClick={openAuthWindow}>
            <SpotifyICO />
        </div>
    )
}

export default SpotifyAuthProvider;