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
import SidebarRoutes from "./SidebarRoutes";

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
                    <div className="userRoles">Founder</div>
                </div>
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default MobileSidebarComponent;