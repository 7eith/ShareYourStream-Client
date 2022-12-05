import { ReactComponent as DotsICO } from "@/assets/svgs/ico/horizontalDots.svg";

type Props = {
    pageTitle: string;
    pagePath: string[];
}

const DashboardBreadcrumbComponent: React.FC<Props> = ({pageTitle, pagePath}) => {
    return (
        <div className="dashboardBreadcrumbComponent">
            <div className="breadcrumbContainer">
                <div className="title">
                    <div className="pageTitle">{ pageTitle }</div>
                    <div className="pageBreadcrumb">Home • Profile</div>
                </div>
                <div className="actions">
                    <div className="action icoBtn"><DotsICO /></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardBreadcrumbComponent;