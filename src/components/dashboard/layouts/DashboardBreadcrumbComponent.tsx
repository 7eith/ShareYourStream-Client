import { ReactComponent as DotsICO } from "@/assets/svgs/ico/horizontalDots.svg";
import { useMatches } from "react-router";


const CrumbComponent = () => {
    return (
        <div className="crumbComponent">

        </div>
    )
}

const DashboardBreadcrumbComponent: React.FC = () => {

    const matches = useMatches();

    // console.log(matches)
    // TODO: 

    return (
        <div className="dashboardBreadcrumbComponent">
            <div className="breadcrumbContainer">
                <div className="title">
                    <div className="pageTitle">{ matches.at(-1)?.pathname }</div>
                    <div className="pageBreadcrumb">
                        {
                            matches.map((crumb, index) => <CrumbComponent />)
                        }
                    </div>
                </div>
                <div className="actions">
                    <div className="action icoBtn"><DotsICO /></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardBreadcrumbComponent;