import { useEffect, useState } from "react";
import { ReactComponent as DiscordICO } from "@/assets/svgs/discord.svg";
import { AppDispatch } from "@/index";
import { useDispatch } from "react-redux";
import { authUsingDiscordAction } from "@/store/actions/auth/oauth/authUsingDiscordAction";
import { NavigateFunction, useNavigate } from "react-router";
import Path from "@/routes/paths";
import { SignInError } from "@/pages/auth/SignInPage";

const DiscordURL = "https://discord.com/api/oauth2/authorize?client_id=1043344506101170276&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=code&scope=identify%20email%20guilds.join%20guilds"

const DiscordAuthProvider = () => {

	const navigate: NavigateFunction = useNavigate();
	const [ oauthWindow, setOAuthWindow ] = useState(null);
    const dispatch: AppDispatch = useDispatch();

	const openAuthWindow = () => {
		const top = 150;
		const left = window.screenX + (window.outerWidth) / 1.55;
		const title = `SignIn using Discord`;
		const url = DiscordURL;
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
                dispatch(authUsingDiscordAction(oauthCode))
				setOAuthWindow(null);
				timer && clearInterval(timer);
			}

			if (error) {
				popUp.close();
				setOAuthWindow(null);
				timer && clearInterval(timer);
				
				navigate(Path.Auth.SignIn, { state: { error: SignInError.DISCORD }})
			}

		}, 500)
	}, [oauthWindow, dispatch, navigate])

    return (
        <div className="provider discord" onClick={openAuthWindow}>
            <DiscordICO />
        </div>
    )
}

export default DiscordAuthProvider;