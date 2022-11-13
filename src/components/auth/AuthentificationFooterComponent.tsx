import { NavLink } from "react-router-dom";
import ThemeSwitcherButton from "../global/ThemeSwitcherButton";

const AuthentificationFooterComponent = () => {

    // TODO: footer in form and here is the same need to refactor that
    // should show Aspera Soft 
    return (
        <div className="footer">
            <NavLink to="/" />
            <ThemeSwitcherButton />
        </div>
    )
}

export default AuthentificationFooterComponent;