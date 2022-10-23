import { Outlet } from "react-router-dom";

const AuthentificationLayout = () => {

    return (
        <div className="authLayout">
            <Outlet />
        </div>
    )
}

export default AuthentificationLayout;