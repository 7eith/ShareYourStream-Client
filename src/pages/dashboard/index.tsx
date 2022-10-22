import Path from "@/routes/paths";
import { Outlet, NavLink } from "react-router-dom";

const DashboardPage = () => {
    return (
        <>
            Dash
            <Outlet />
            <NavLink to={Path.Dashboard.Root}>Home</NavLink>
            <NavLink to={Path.Dashboard.Profile.Root}>Profile</NavLink>
        </>
    )
}

export default DashboardPage;