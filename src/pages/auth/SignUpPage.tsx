import Path from "@/routes/paths";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Spotify } from "@/assets/svgs/spotify.svg";
import { ReactComponent as Google } from "@/assets/svgs/google.svg";
import { ReactComponent as Discord } from "@/assets/svgs/discord.svg";

const InputError = ({ message } : { message: string }) => {
    return (
        <div className="inputError">{ message }</div>
    )
}

const SignUpPage = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirm, setPasswordConfirm ] = useState("");

    const isValidEmail = () => {
        return email === "" || /\S+@\S+\.\S+/.test(email);
    }

    const submit = () => {

    }

    return (
        <div className="content">
            <form className="authForm">
                <div className="authTitle">
                    <div className="title">Sign Up</div>
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
                    { 
                        !isValidEmail() ? (
                            <InputError 
                                message="The value is not a valid email address" 
                            />
                        ) : null 
                    }
                </div>
                <div className="inputContainer">
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="new-password"
                    />
                </div>
                <div className="inputContainer">
                    <input 
                        type="password" 
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)}
                        autoComplete="off"
                    />
                    { 
                        password !== passwordConfirm ? (
                            <InputError 
                                message="The password and its confirm are not the same" 
                            />
                        ) : null 
                    }
                </div>
                <div className="footer">
                    <NavLink to={Path.Home.Root}>Back to Home</NavLink>
                    <div 
                        className="submitBtn" 
                        onClick={submit} 
                    >
                        Submit
                    </div>
                </div>
            </form>
            <div className="oauthContainer">
                <div className="oauthTitle">Or sign up with</div>
                <div className="oauthProviders">
                    <div className="provider google"><Google /></div>
                    <div className="provider spotify"><Spotify /></div>
                    <div className="provider discord"><Discord /></div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;