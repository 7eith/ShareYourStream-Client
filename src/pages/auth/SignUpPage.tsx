import Path from "@/routes/paths";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/index";

import OAuthProvidersComponent from "@/components/auth/oauth/OAuthProvidersComponent";
import { registerUsingCredentialsAction } from "@/store/actions/auth/registerUsingCredentialsAction";

const InputError = ({ message } : { message: string }) => {
    return (
        <div className="inputError">{ message }</div>
    )
}

const SignUpPage = () => {

    const dispatch: AppDispatch = useDispatch();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirm, setPasswordConfirm ] = useState("");

    const isValidEmail = () => {
        return email === "" || /\S+@\S+\.\S+/.test(email);
    }

    const submit = () => {
        dispatch(registerUsingCredentialsAction({
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
                    <NavLink to={Path.Auth.SignIn}>Back to Sign In</NavLink>
                    <div 
                        className="submitBtn" 
                        onClick={submit} 
                    >
                        Submit
                    </div>
                </div>
            </form>
            <OAuthProvidersComponent />
        </div>
    )
}

export default SignUpPage;