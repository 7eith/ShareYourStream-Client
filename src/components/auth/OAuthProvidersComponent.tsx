import { ReactComponent as Spotify } from "@/assets/svgs/spotify.svg";
import { ReactComponent as Google } from "@/assets/svgs/google.svg";
import { ReactComponent as Discord } from "@/assets/svgs/discord.svg";

const OAuthProvidersComponent = () => {
	return (
		<div className="oauthContainer">
			<div className="oauthTitle">Or log in with</div>
			<div className="oauthProviders">
				<div className="provider google">
					<Google />
				</div>
				<div className="provider spotify">
					<Spotify />
				</div>
				<div className="provider discord">
					<Discord />
				</div>
			</div>
		</div>
	);
};

export default OAuthProvidersComponent;
