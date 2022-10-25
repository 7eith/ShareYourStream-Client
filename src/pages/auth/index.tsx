import { Outlet } from "react-router-dom";
import BackgroundAuth from "@/assets/bg-login.png";

const IllustrationAuth = () => {
    return (
        <div className="illustrationAuth" />
    )
}

const AuthentificationLayout = () => {

    return (
        <div className="authLayout">
            <div className="authPage">
                <Outlet />
            </div>
            {/* <img className="illustrationAuth" src={BackgroundAuth} /> */}
            <IllustrationAuth />
        </div>
    )
}

export default AuthentificationLayout;