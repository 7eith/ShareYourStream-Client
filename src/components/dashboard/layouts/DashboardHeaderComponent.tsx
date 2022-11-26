import { NavLink } from "react-router-dom";

const DashboardHeaderComponent = () => {
    return (
        <div className="dashboardHeaderContainer">
            <div className="dashboardHeaderContent">
                <div className="dashboardNavbar">
                    <NavLink to="">Home</NavLink>
                </div>
                <div className="dashboardTools">
                    Seithh
                </div>
            </div>
        </div>
    )
}

export default DashboardHeaderComponent;