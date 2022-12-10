import { useTheme } from "@/hooks/useTheme";
import Routes from "@/routes";

const App = () => {

	const theme = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Routes />
		</div>
	);
}

export default App;
