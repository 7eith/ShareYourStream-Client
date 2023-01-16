import Path from "@/routes/paths";
import { useParams } from "react-router";
import { NavLink, Outlet } from "react-router-dom";

const StreamChartsLayout = () => {

    const params = useParams()

    console.log(params)

    return (
        <div className="streamChartsLayout">
            <div className="streamChartRouter">
                {/* <NavLink 
                    className="changeDurationBtn" 
                    to={Path.Dashboard.Streams.Charts.Root}
                >
                    <div className="title">Short Term</div>
                    <div className="label">less than 1 month</div>
                </NavLink>
                <NavLink 
                    className="changeDurationBtn" 
                    to={Path.Dashboard.Streams.Charts.Medium}
                >
                    <div className="title">Medium Term</div>
                    <div className="label">6 month</div>
                </NavLink>
                <NavLink 
                    className="changeDurationBtn" 
                    to={Path.Dashboard.Streams.Chart}
                >
                    <div className="title">Long Term</div>
                    <div className="label">from the begin</div>
                </NavLink> */}
            </div>
        </div>
    )
}

export default StreamChartsLayout;