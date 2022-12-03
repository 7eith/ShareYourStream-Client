import useDarkMode from "use-dark-mode";
import { useTheme } from "@/hooks/useTheme";

import { ReactComponent as MoonICO } from "@/assets/svgs/ico/moon.svg";
import { ReactComponent as SunICO } from "@/assets/svgs/ico/sun.svg";

const DashboardThemeSwitcherButton = () => {
    const darkMode = useDarkMode(true);
    const theme = useTheme();

    // TODO: when cliking 10x on day and night play day & night of kid cudi ! 
    // TODO: hide the & like color it in white or bg so user need to highlight to discover this 

    return (
        <div className="dashboardthemeSwitcherButtonComponent" onClick={darkMode.toggle}>
            { theme === "dark-mode" ? <MoonICO /> : <SunICO /> }
        </div>
    );
};
export default DashboardThemeSwitcherButton;
