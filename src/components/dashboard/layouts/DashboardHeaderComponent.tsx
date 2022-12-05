

import { ReactComponent as HistoryICO } from "@/assets/svgs/ico/history.svg";
import { ReactComponent as BellICO } from "@/assets/svgs/ico/bell.svg";
import { ReactComponent as HamburgerICO } from "@/assets/svgs/ico/hamburger.svg";

import DashboardThemeSwitcherButton from "../global/DashboardThemeSwitcherButton";
import { useState } from "react";
import MobileSidebarComponent from "./sidebar/MobileSidebarComponent";


const DashboardHeaderComponent = () => {

    const [ showMobileNavbar, toggleMobileNavbar ] = useState<Boolean>(false);

    const DEBUG_link = "https://i.pinimg.com/originals/88/c1/2d/88c12dfcb28c16e51b30234a0513a74c.jpg";

    return (
        <div className="dashboardHeaderContainer">
            <div className="dashboardHeaderContent">
                <div className="headerNavbar">
                    <HamburgerICO className="expandSidebarButton" onClick={() => { toggleMobileNavbar(!showMobileNavbar)} }/> 
                </div>
                <div className="headerProfile">
                    <div className="userOptions">
                        <BellICO /> 
                        <HistoryICO />
                        <DashboardThemeSwitcherButton />
                    </div>
                    <div className="userAvatar">
                        <img src={DEBUG_link} />
                        <span className="userStatus" />
                    </div>
                </div>
            </div>
            { showMobileNavbar ? <MobileSidebarComponent showNavbarState={toggleMobileNavbar} /> : null }
        </div>
    )
}

export default DashboardHeaderComponent;