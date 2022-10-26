import Path from "@/routes/paths";
import { NavLink } from "react-router-dom";

import { ReactComponent as Spotify } from "@/assets/svgs/spotify.svg";
import { ReactComponent as Google } from "@/assets/svgs/google.svg";
import { ReactComponent as Discord } from "@/assets/svgs/discord.svg";


const SignInPage = () => {

    return (
        <div className="signInPage">
            <div className="header">
                Not Member ? <NavLink to={Path.Auth.SignUp}>Sign Up</NavLink>
            </div>
            <div className="content">
                <form className="authForm">
                    <div className="authTitle">
                        <div className="title">Sign In</div>
                        <div className="subTitle">Enhance your music experience using an third party Software</div>
                    </div>
                    <div className="inputContainer">
                        <input type="text"  placeholder="Email" />
                    </div>
                    <div className="inputContainer">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="footer">
                        <NavLink to={Path.Auth.SignUp}>Forgot Password ?</NavLink>
                        <div className="submitBtn">Sign In</div>
                    </div>
                </form>
                <div className="oauthContainer">
                    <div className="oauthTitle">Or log in with</div>
                    <div className="oauthProviders">
                        <div className="provider google"><Google /></div>
                        <div className="provider spotify"><Spotify /></div>
                        <div className="provider discord"><Discord /></div>
                    </div>
                </div>
            </div>
            <div className="footer">English</div>
        </div>
    )
}

export default SignInPage;