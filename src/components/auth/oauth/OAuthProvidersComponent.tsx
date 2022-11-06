import { ReactComponent as Google } from "@/assets/svgs/google.svg";
import { ReactComponent as Discord } from "@/assets/svgs/discord.svg";
import SpotifyAuthProvider from "./providers/SpotifyAuthProvider";

const OAuthProvidersComponent = () => {
	return (
		<div className="oauthContainer">
			<div className="oauthTitle">Or log in with</div>
			<div className="oauthProviders">
				<div className="provider google">
					<Google />
				</div>
				<SpotifyAuthProvider />
				<div className="provider discord">
					<Discord />
				</div>
			</div>
		</div>
	);
};

export default OAuthProvidersComponent;
