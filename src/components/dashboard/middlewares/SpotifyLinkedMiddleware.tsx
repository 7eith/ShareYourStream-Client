import { ReactComponent as SpotifyICO } from "@/assets/svgs/spotify.svg";
import { AppDispatch } from "@/index";
import { SignInError } from "@/pages/auth/SignInPage";
import Path from "@/routes/paths";
import { linkSpotifyAction } from "@/store/actions/user/linkSpotifyAction";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router";

const SpotifyURL = "https://accounts.spotify.com/authorize?response_type=code&client_id=" + 
		"612daca3db4447cdb94de2e117e40022" + 
		"&scope=user-top-read%20user-read-private%20user-read-recently-played%20user-read-email" +
		"&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fspotify&show_dialog=true"


const SpotifyLinkedMiddleware = () => {
    
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
                dispatch(linkSpotifyAction(oauthCode))
				setOAuthWindow(null);
				timer && clearInterval(timer);
			}

			if (error) {
				popUp.close();
				setOAuthWindow(null);
				timer && clearInterval(timer);
			}

		}, 500)
	}, [oauthWindow, dispatch, navigate])
    
    return (
        <div className="dashboardMiddlewareContainer">
            <div className="dashboardMiddlewareContent">
                <div className="card">
                    <div className="title">Action Required</div>
                    <div className="content">
                        <div className="text">We need access to your Spotify Account to perform some actions</div>
                        <div className="signInButton" onClick={openAuthWindow}>
                            <SpotifyICO /> { oauthWindow ? "Waiting ..." : "Connect Spotify"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotifyLinkedMiddleware;