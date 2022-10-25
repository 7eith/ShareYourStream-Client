import ThemeSwitcherButton from "@/components/global/ThemeSwitcherButton";
import { useTheme } from "@/hooks/useTheme";
import Routes from "@/routes";

const App = () => {

	const theme = useTheme();

	return (
		<div className={`app ${theme}`}>
			{/* <ThemeSwitcherButton /> */}
			<Routes />
		</div>
	);
}

export default App;
