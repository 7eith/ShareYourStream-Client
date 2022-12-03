import { ReactComponent as LogoutICO } from "@/assets/svgs/ico/logout.svg";
import { ReactComponent as DashboardICO } from "@/assets/svgs/ico/dashboard.svg";
import { ReactComponent as ProfileICO } from "@/assets/svgs/ico/profile.svg";
import { ReactComponent as ToolsICO } from "@/assets/svgs/ico/tools.svg";
import { ReactComponent as ExportICO } from "@/assets/svgs/ico/export.svg";

import { NavLink } from "react-router-dom";
import Path from "@/routes/paths";
import { useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";
import { AppDispatch } from "@/index";
import { useDispatch } from "react-redux";
import { USER_LOGOUT } from "@/store/types";

const MobileSidebarComponent: React.FC<{ showNavbarState: any }> = ({ showNavbarState }) => {

    const dispatch: AppDispatch = useDispatch();

    const ref = useRef(null);

    const handleClickOutside = () => {
        showNavbarState(false);
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        dispatch({ type: USER_LOGOUT })
    }

    useOnClickOutside(ref, handleClickOutside);

    return (
        <div className="mobileSidebarContainer">
            <div    
                className="mobileSidebarContent" 
                ref={ref}
            >
                <div className="userProfile">
                    <div className="profile">
                        <div className="name">7eith</div>
                        <LogoutICO onClick={logoutUser} />
                    </div>
                    <div className="userRoles">Owner</div>
                </div>
                <div className="sidebarRoutes">
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Root}
                        onClick={handleClickOutside}
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Home</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Profile.Root}
                        onClick={handleClickOutside}
                        end
                    >
                        <ProfileICO />
                        <div className="routeName">Profile</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Tools.Root}
                        onClick={handleClickOutside}
                        end
                    >
                        <ToolsICO />
                        <div className="routeName">Tools</div>
                    </NavLink>
                    <div className="sidebarGroup">Tools</div>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Tools.ExportLikes}
                        onClick={handleClickOutside}
                        end
                    >
                        <ExportICO />
                        <div className="routeName">Export Likes</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MobileSidebarComponent;