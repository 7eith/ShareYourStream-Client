import { useEffect, useState } from "react";
import { ReactComponent as Spotify } from "@/assets/svgs/spotify.svg";
import { AppDispatch } from "@/index";
import { useDispatch } from "react-redux";
import { authUsingSpotifyAction } from "@/store/actions/auth/oauth/authUsingSpotifyAction";
import { fetchProfileAction } from "@/store/actions/user/fetchProfileAction";

const SpotifyURL = "https://accounts.spotify.com/authorize?response_type=code&client_id=" + 
		"612daca3db4447cdb94de2e117e40022" + 
		"&scope=user-top-read%20user-read-private%20user-read-recently-played%20user-read-email" +
		"&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fspotify&show_dialog=true"

const SpotifyAuthProvider = () => {

	const [ oauthWindow, setOAuthWindow ] = useState(null);
    const dispatch: AppDispatch = useDispatch();

    // TODO: manage errors! 

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

			if (oauthCode) {
				popUp.close();
                dispatch(authUsingSpotifyAction(oauthCode))
				.then(() => {
					console.log('hello')
					dispatch(fetchProfileAction())
				})
				// console.log('detected Code ' + oauthCode); 
				setOAuthWindow(null);
				timer && clearInterval(timer);
			}

		}, 500)
	}, [oauthWindow])

    return (
        <div className="provider spotify" onClick={openAuthWindow}>
            <Spotify />
        </div>
    )
}

export default SpotifyAuthProvider;