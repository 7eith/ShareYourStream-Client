import { ProfileContextType } from "@/types/profile.type";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import ProfileProvider, { ProfileContext } from "./ProfileContext";

import { ReactComponent as DiscordICO } from "@/assets/svgs/discord.svg";
import { ReactComponent as SpotifyICO } from "@/assets/svgs/spotify.svg";
import { RootState } from "@/index";
import { useSelector } from "react-redux";

import ProfileUserAvatarComponent from "@/components/dashboard/profile/ProfileUserAvatarComponent";
import UserProfileComponent from "@/components/dashboard/profile/UserProfileComponent";

const ProfilePageHeader = () => {
    const { currentPath } = useContext(ProfileContext) as ProfileContextType;
    const { spotifyId  } = useSelector((state: RootState) => state.user);

    return (
        <div className="profileLayoutHeader">
            <div className="profilePageUserProfileContainer">
                <div className="profilePageUserProfileContent">
                    <div className="profileAvatarSection">
                        <ProfileUserAvatarComponent />
                        <div className="userProfileContainer">
                            <UserProfileComponent />
                            <div className="userSocialContainer">
                                <div className="socialUser">
                                    <DiscordICO />
                                </div>
                                {
                                    spotifyId !== null ? (
                                        <a href={`https://open.spotify.com/user/${spotifyId}`} className="socialUser">
                                            <SpotifyICO className="spotifyICO" />
                                        </a>
                                    ) : null
                                }
                            </div>
                            {/* <div className="userChartContainer">
                                <div className="playlistNumbers">54 playlist • 79 follower • 11 following</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProfilePage = () => {
    return (
        <ProfileProvider>
            <div className="profileLayout">
                <ProfilePageHeader />
                <Outlet />
            </div>
        </ProfileProvider>
    )
}

export default ProfilePage;