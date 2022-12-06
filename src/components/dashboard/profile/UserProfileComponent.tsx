import { ReactComponent as ShareICO } from "@/assets/svgs/ico/share.svg";
import { RootState } from "@/index";
import { UserState } from "@/types/type";
import { useSelector } from "react-redux";

const UserProfileComponent = () => {
    const user: UserState = useSelector((state: RootState) => state.user);

    return (
        <div className="userProfileContent">
            <div className="displayName">
                <div className="username">{ user.username ? user.username : "A definir" }</div>
                <div className="roles">
                    <div className="badge">Founder</div>
                </div>
            </div>
            <div className="profileActions">
                <a href="https://shareyourstream.com/user/@Seith"><ShareICO /></a>
                {/* <CogICO /> */}
                {/* <DotsICO /> */}
            </div>
        </div>
    )

}

export default UserProfileComponent;