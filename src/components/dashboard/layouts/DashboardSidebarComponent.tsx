import Path from "@/routes/paths";
import { NavLink } from "react-router-dom";

import Logo from "@/assets/SyneziaLogo.png";
import { ReactComponent as DashboardICO } from "@/assets/svgs/dashboard.svg";

const DashboardSidebarComponent = () => {

    return (
        <div className="dashboardSidebarContainer">
            <div className="dashboardSidebarContent">
                <NavLink to={Path.Home.Root} className="sidebarLogo">
                    <img src={Logo} alt="Share Your Stream" />
                </NavLink>
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
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Profile</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Auth.Root}
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Historique</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Root}
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Top Artists</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Root}
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Top Albums</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Root}
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Top Tracks</div>
                    </NavLink>
                    <NavLink 
                        className="sidebarRoute" 
                        to={Path.Dashboard.Root}
                        end
                    >
                        <DashboardICO />
                        <div className="routeName">Logout</div>
                    </NavLink>
                </div>
                <div className="sidebarSocials">
                    
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebarComponent;