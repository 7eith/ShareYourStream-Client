import Path from "@/routes/paths";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {

    return (
        <div className="signUpPage">
            <div className="header">
                You are already register? <NavLink to={Path.Auth.SignIn}>Sign In</NavLink>
            </div>
            <div className="content">
                <form className="authForm">
                    <div className="authTitle">
                        <div className="title">Sign Up</div>
                        <div className="subTitle">Enhance your music experience using an third party Software</div>
                    </div>
                    <div className="inputContainer">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="inputContainer">
                        <input type="password" placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className="footer">English</div>
        </div>
    )
}

export default SignUpPage;