import { RootState } from "@/index";
import Path from "@/routes/paths";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const DashboardPage = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { loggedIn } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!loggedIn)
            navigate(Path.Auth.SignIn, { state: { previousPath: pathname }});
    });

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