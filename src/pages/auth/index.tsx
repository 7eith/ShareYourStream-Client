import { Outlet } from "react-router-dom";

import AuthentificationFooterComponent from "@/components/auth/AuthentificationFooterComponent";
import AuthentificationHeaderComponent from "@/components/auth/AuthentificationHeaderComponent";

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
                    <AuthentificationHeaderComponent />
                    <Outlet />
                    <AuthentificationFooterComponent />
                </div>
            </div>
            <IllustrationAuth />
        </div>
    )
}

export default AuthentificationLayout;