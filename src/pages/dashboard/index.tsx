import DashboardHeaderComponent from "@/components/dashboard/layouts/DashboardHeaderComponent";
import DashboardSidebarComponent from "@/components/dashboard/layouts/DashboardSidebarComponent";
import { RootState } from "@/index";
import Path from "@/routes/paths";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardPage = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { loggedIn } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!loggedIn)
            navigate(Path.Auth.SignIn, { state: { previousPath: pathname }});
    });

    return (
        <div className="dashboard">
            <DashboardSidebarComponent />
            <div className="dashboardPage">
                <DashboardHeaderComponent />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardPage;