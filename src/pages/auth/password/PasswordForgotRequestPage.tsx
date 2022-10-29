import Path from "@/routes/paths";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const PasswordForgotRequestPage = () => {

    const location = useLocation();
    const [ email, setEmail ] = useState("");

    useEffect(() => {
        if (location.state && location.state.filledEmail) {
            setEmail(location.state.filledEmail);
            location.state.filledEmail = undefined;
        }
    }, [location.state])

    const submit = () => {
        console.log(email)
    }

    return (
        <div className="passwordForgotPage">
            <div className="header">
                Recovered your password ? <NavLink to={Path.Auth.SignIn}>Sign In</NavLink>
            </div>
            <div className="content">
                <form className="authForm">
                    <div className="authTitle">
                        <div className="title">Password Forgot</div>
                        <div className="subTitle">Enter your email to reset your password.</div>
                    </div>
                    <div className="inputContainer">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="footerPassword">
                        <div 
                            className="submitBtn" 
                            onClick={submit} 
                        >
                            Submit
                        </div>
                    </div>
                </form>
            </div>
            <div className="footer">English</div>
        </div>
    )
}

export default PasswordForgotRequestPage;