

import { ReactComponent as HistoryICO } from "@/assets/svgs/ico/history.svg";
import { ReactComponent as BellICO } from "@/assets/svgs/ico/bell.svg";
import { ReactComponent as HamburgerICO } from "@/assets/svgs/ico/hamburger.svg";

import DashboardThemeSwitcherButton from "../global/DashboardThemeSwitcherButton";
import { useState } from "react";
import MobileSidebarComponent from "./sidebar/MobileSidebarComponent";


const DashboardHeaderComponent = () => {

    const [ showMobileNavbar, toggleMobileNavbar ] = useState<Boolean>(false);

    const DEBUG_link = "https://media3.giphy.com/media/ekGymRUDeV6r1MDdQH/giphy.gif?cid=790b76110afe9780812fe0280639621f6a65277c13a47103&rid=giphy.gif&ct=g";

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