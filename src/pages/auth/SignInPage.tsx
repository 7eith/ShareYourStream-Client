import Path from "@/routes/paths";
import { NavLink } from "react-router-dom";


import { useState } from "react";
import OAuthProvidersComponent from "@/components/auth/oauth/OAuthProvidersComponent";

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
            <OAuthProvidersComponent />
        </div>
    )
}

export default SignInPage;