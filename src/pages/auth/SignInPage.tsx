import Path from "@/routes/paths";
import { NavLink } from "react-router-dom";

import { ReactComponent as Spotify } from "@/assets/svgs/spotify.svg";
import { ReactComponent as Google } from "@/assets/svgs/google.svg";
import { ReactComponent as Discord } from "@/assets/svgs/discord.svg";
import { useState } from "react";

const SignInPage = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const submit = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div className="content">
            <form className="authForm">
                <div className="authTitle">
                    <div className="title">Sign In</div>
                    <div className="subTitle">Enhance your music experience using an third party Software</div>
                </div>
                <div className="inputContainer">
                    <input 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>
                <div className="inputContainer">
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>
                <div className="footer">
                    <NavLink 
                        to={Path.Auth.PasswordForgot.Root}
                        state={{ filledEmail: email }}
                    >
                        Forgot Password ?
                    </NavLink>
                    <div 
                        className="submitBtn"
                        onClick={submit}
                    >
                        Sign In
                    </div>
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
    )
}

export default SignInPage;