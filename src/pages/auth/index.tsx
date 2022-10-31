import { Outlet, NavLink} from "react-router-dom";
// import { NavLink } from "react-router-dom";

import Path from "@/routes/paths";

const IllustrationAuth = () => {
    return (
        <div className="illustrationAuth" />
    )
}

const AuthentificationLayout = () => {

    return (
        <div className="authLayout">
            <div className="authPageContainer">
                <div className="authPageContent">
                    <div className="header">
                        Not Member ? <NavLink to={Path.Auth.SignUp}>Sign Up</NavLink>
                    </div>
                    <Outlet />
                    <div className="footer">English</div>
                </div>
            </div>
            <IllustrationAuth />
        </div>
    )
}

export default AuthentificationLayout;