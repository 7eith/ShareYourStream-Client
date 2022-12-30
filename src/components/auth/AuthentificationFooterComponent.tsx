import { NavLink } from "react-router-dom";
import DashboardThemeSwitcherButton from "../dashboard/global/DashboardThemeSwitcherButton";

const AuthentificationFooterComponent = () => {

    // TODO: footer in form and here is the same need to refactor that
    // should show Aspera Soft 
    return (
        <div className="footer">
            <NavLink to="/" />
            <DashboardThemeSwitcherButton />
        </div>
    )
}

export default AuthentificationFooterComponent;