import { ReactComponent as Google } from "@/assets/svgs/google.svg";
import { ReactComponent as Discord } from "@/assets/svgs/discord.svg";
import SpotifyAuthProvider from "./providers/SpotifyAuthProvider";
import DiscordAuthProvider from "./providers/DiscordAuthProvider";

const OAuthProvidersComponent = () => {
	return (
		<div className="oauthContainer">
			<div className="oauthTitle">Or log in with</div>
			<div className="oauthProviders">
				<div className="provider google">
					<Google />
				</div>
				<SpotifyAuthProvider />
				<DiscordAuthProvider />
			</div>
		</div>
	);
};

export default OAuthProvidersComponent;
