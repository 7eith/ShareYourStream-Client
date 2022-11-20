import { Outlet } from "react-router-dom";

import AuthentificationFooterComponent from "@/components/auth/AuthentificationFooterComponent";
import AuthentificationHeaderComponent from "@/components/auth/AuthentificationHeaderComponent";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import Path from "@/routes/paths";
import { useSelector } from "react-redux";
import { RootState } from "@/index";
import UserSessionLoader from "@/components/loaders/UserSessionLoader";

const IllustrationAuth = () => {
    return (
        <div className="illustrationAuth" />
    )
}


const AuthentificationLayout = () => {

    const { state } = useLocation();

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { loggedIn } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (loggedIn)
            navigate(state?.previousPath || Path.Dashboard.Root, { state: { previousPath: pathname }});
    }, [loggedIn]);

    return (
        <div className="authLayout">
            <div className="authPageContainer">
                <div className="authPageContent">
                    <AuthentificationHeaderComponent />
                    <Outlet />
                    <AuthentificationFooterComponent />
                </div>
            </div>
            <IllustrationAuth />
            <UserSessionLoader />
        </div>
    )
}

export default AuthentificationLayout;