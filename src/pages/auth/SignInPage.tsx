import Path from "@/routes/paths";
import { NavLink } from "react-router-dom";


import OAuthProvidersComponent from "@/components/auth/oauth/OAuthProvidersComponent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/index";
import { loginUsingCredentialsAction } from "@/store/actions/auth/loginUsingCredentialsAction";

const SignInPage = () => {

    const dispatch: AppDispatch = useDispatch();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const submit = () => {
        dispatch(loginUsingCredentialsAction({
            email: email,
            password: password
        }))
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
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