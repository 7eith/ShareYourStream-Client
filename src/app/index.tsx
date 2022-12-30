import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, Params, useMatches } from "react-router";

type IRouteHandle = {
	title: string | undefined;
	breadcrumb: any;
};

type IRouterRoute = {
	id: string;
    pathname: string;
    params: Params<string>;
    data: unknown;
    handle: IRouteHandle | unknown;
}

const App = () => {

    const { t } = useTranslation('pageTitle');
	const theme = useTheme();
	const matches: IRouterRoute[] = useMatches();

	useEffect(() => {
		const currentRouter: IRouterRoute = matches.at(-1) as IRouterRoute;
		const routeHandle: IRouteHandle = currentRouter.handle as IRouteHandle;

		if (routeHandle && routeHandle.title) 
            document.title = routeHandle.title;
        else
            document.title = t(currentRouter.pathname)
		
	}, [matches, t])

	return (
		<div className={`app ${theme}`}>
			<Outlet />
		</div>
	);
}

export default App;
