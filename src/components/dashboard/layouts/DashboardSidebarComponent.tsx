import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Path from "@/routes/paths";

import Logo from "@/assets/SyneziaLogo.png";

import { ReactComponent as Chevron } from "@/assets/svgs/ico/chevronLeft.svg";

import { ReactComponent as DashboardICO } from "@/assets/svgs/ico/dashboard.svg";
import { ReactComponent as ProfileICO } from "@/assets/svgs/ico/profile.svg";

import { ReactComponent as ToolsICO } from "@/assets/svgs/ico/tools.svg";
import { ReactComponent as ExportICO } from "@/assets/svgs/ico/export.svg";

import { ReactComponent as LogoutICO } from "@/assets/svgs/ico/logout.svg";

import { ReactComponent as HistoryICO } from "@/assets/svgs/ico/history.svg";


import { AppDispatch } from "@/index";
import { USER_LOGOUT } from "@/store/types";

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
                    <NavLink to={Path.Home.Root}>
                        <img src={Logo} alt="Share Your Stream" />
                    </NavLink>
                </div>
                <div className="sidebarRoutes">
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Root}
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Home</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Profile.Root}
                    >
                        <ProfileICO />
                        <div className="routeName">Profile</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Streams.History}
                        end
                    >
                        <HistoryICO />
                        <div className="routeName">History</div>
                    </NavLink>
                    <div className="sidebarGroup">Tools</div>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Tools.Root}
                        end
                    >
                        <ToolsICO />
                        <div className="routeName">Tools</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Tools.ExportLikes}
                        end
                    >
                        <ExportICO />
                        <div className="routeName">Export Likes</div>
                    </NavLink>
                    <LogoutButtonComponent />
                </div>
                <div className="sidebarSocials">
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebarComponent;