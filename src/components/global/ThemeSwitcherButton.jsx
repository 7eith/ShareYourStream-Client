import useDarkMode from "use-dark-mode";
import { useTheme } from "@/hooks/useTheme";

const ThemeSwitcherButton = () => {
    const darkMode = useDarkMode(true);
    const theme = useTheme();

    return (
        <button className="btn-theme" type="button" onClick={darkMode.toggle}>
            {theme === "dark-mode" ? "Light mode" : "Dark mode"}
        </button>
    );
};
export default ThemeSwitcherButton;
