import { IPageParams, UserSpotifyTopDuration, UserSpotifyTopType } from "@/store/actions/spotify/fetchUserStreamingCharts";
import { type } from "os";
import { useParams } from "react-router";
import { NavLink, Outlet } from "react-router-dom";

const availableTypes: string[] = ["artists", "tracks"]
const availableDurations: string[] = ["long"]

const StreamChartsTable: React.FC<IPageParams> = ({ type, duration }) => {
    return (
        <div className="chartsTable">

        </div>
    )
}

const StreamChartsLayout = () => {

    const routeParams = useParams()

    const params : IPageParams = {
        type: routeParams['type'] as UserSpotifyTopType,
        duration: routeParams['duration'] as UserSpotifyTopDuration
    };

    if (!availableTypes.includes(params.type) || !availableDurations.includes(params.duration)) {
        return (
            <div className="error">Error !</div>
        )
    }

    return (
        <div className="streamChartsLayout">
            <div className="streamChartRouter">
                <div className="dashboardPageTitle">
                    Explore most listened<strong> { params.type } </strong>this last<strong> 6 month</strong>
                </div>
            <StreamChartsTable {...params} />
            </div>
        </div>
    )
}

export default StreamChartsLayout;