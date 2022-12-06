import { ReactComponent as EditICO } from "@/assets/svgs/ico/edit.svg";

const ProfileOverview = () => {

    return (
        <div className="profileOverviewPage">
            <div className="accountDetails dashboardCard">
                <div className="cardHeader">
                    <div className="cardTitle">Profile Overview</div>
                    <div className="cardTitleActions">
                        <div className="action">
                            <EditICO />
                            <div className="label">Edit Profile</div>
                        </div>
                    </div>
                </div>
                <div className="cardContent">
                    WIP
                </div>
            </div>
        </div>
    )
}

export default ProfileOverview;