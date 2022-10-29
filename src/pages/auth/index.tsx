import { Outlet } from "react-router-dom";

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
            <IllustrationAuth />
        </div>
    )
}

export default AuthentificationLayout;