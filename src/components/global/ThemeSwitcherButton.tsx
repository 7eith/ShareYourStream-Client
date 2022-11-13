import useDarkMode from "use-dark-mode";
import { useTheme } from "@/hooks/useTheme";

const ThemeSwitcherButton = () => {
    const darkMode = useDarkMode(true);
    const theme = useTheme();

    // TODO: when cliking 10x on day and night play day & night of kid cudi ! 
    // TODO: hide the & like color it in white or bg so user need to highlight to discover this 

    return (
        <div className="themeSwitcherButtonComponent" onClick={darkMode.toggle}>
            <div className="text">{ theme === "dark-mode" ? "Night" : "Day" } Mode</div>
            <input type="checkbox" />
            <div className={`button ${theme !== "dark-mode" ? "active" : ""}`}></div>
        </div>
    );
};
export default ThemeSwitcherButton;
