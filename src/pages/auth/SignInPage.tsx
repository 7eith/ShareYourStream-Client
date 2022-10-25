import Path from "@/routes/paths";
import { NavLink } from "react-router-dom";

const SignInPage = () => {

    return (
        <div className="signInPage">
            <div className="header">
                Not member? <NavLink to={Path.Auth.SignUp}>Sign Up</NavLink>
            </div>
            <div className="content">
                <form className="authForm">
                    <div className="authTitle">
                        <div className="title">Sign In</div>
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

export default SignInPage;