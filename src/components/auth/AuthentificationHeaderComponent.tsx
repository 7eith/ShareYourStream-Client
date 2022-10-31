import { NavLink} from "react-router-dom";
import Path from "@/routes/paths";
import { useLocation } from "react-router";
import { Trans, useTranslation } from "react-i18next";

const AuthentificationHeaderComponent = () => {

    const { t } = useTranslation("paths");
    const location = useLocation();

    const text = `${location.pathname}.text`
    const label = `${location.pathname}.label`
    const link = `${location.pathname}.link`

    return (
        <div className="header">
            <Trans ns="paths" i18nKey={text} />
            <NavLink to={t(link)}>
                <Trans ns="paths" i18nKey={label} />
            </NavLink>
        </div>
    )
}

export default AuthentificationHeaderComponent;