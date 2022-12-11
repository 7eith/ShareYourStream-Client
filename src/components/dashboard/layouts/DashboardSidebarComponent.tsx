import { useState } from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as Chevron } from "@/assets/svgs/ico/chevronLeft.svg";
import { ReactComponent as LogoutICO } from "@/assets/svgs/ico/logout.svg";

import { AppDispatch } from "@/index";
import { USER_LOGOUT } from "@/store/types";
import SidebarRoutes from "./sidebar/SidebarRoutes";

const LogoutButtonComponent = () => {

    const dispatch: AppDispatch = useDispatch();

    const logoutUser = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        dispatch({ type: USER_LOGOUT })
    }

    return (
        <div className="sidebarRoute" onClick={logoutUser}>
            <LogoutICO />
            <div className="routeName">Logout</div>
        </div>
    )
}

const DashboardSidebarComponent = () => {
    
    const [ expanded, setExpandSidebar ] = useState<Boolean>(true);

    return (
        <div className={`dashboardSidebarContainer ${expanded ? "" : "sidebarNotExpanded"}`}>
            <div className="dashboardSidebarContent">
                <div className="sidebarLogo">
                    <div className="sidebarExpandButton">
                        <Chevron onClick={() => { setExpandSidebar(!expanded)}} />
                    </div>
                </div>
                <SidebarRoutes />
                <div className="sidebarSocials" />
            </div>
        </div>
    )
}

export default DashboardSidebarComponent;