import { ReactComponent as DashboardICO } from "@/assets/svgs/ico/dashboard.svg";
import { ReactComponent as ProfileICO } from "@/assets/svgs/ico/profile.svg";

import { ReactComponent as ToolsICO } from "@/assets/svgs/ico/tools.svg";
import { ReactComponent as ExportICO } from "@/assets/svgs/ico/export.svg";

import { ReactComponent as HistoryICO } from "@/assets/svgs/ico/history.svg";
import { NavLink } from "react-router-dom";
import Path from "@/routes/paths";


const SidebarRoutes = () => {

    return (
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
            <NavLink
                className="sidebarRoute"
                to={Path.Dashboard.Streams.Charts}
                end
            >
                <HistoryICO />
                <div className="routeName">Your tops</div>
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
                to={Path.Dashboard.Tools.ExportSaved}
                end
            >
                <ExportICO />
                <div className="routeName">Export Saved</div>
            </NavLink>
        </div>
    )

}

export default SidebarRoutes;