import { ProfileContextType } from "@/types/profile.type";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import ProfileProvider, { ProfileContext } from "./ProfileContext";

import { ReactComponent as DotsICO } from "@/assets/svgs/ico/horizontalDots.svg";
import { ReactComponent as CogICO } from "@/assets/svgs/ico/cog.svg";
import { ReactComponent as ShareICO } from "@/assets/svgs/ico/share.svg";

import { ReactComponent as DiscordICO } from "@/assets/svgs/discord.svg";
import { ReactComponent as SpotifyICO } from "@/assets/svgs/spotify.svg";
import { RootState } from "@/index";
import { useSelector } from "react-redux";

const ProfilePageHeader = () => {
    const { currentPath } = useContext(ProfileContext) as ProfileContextType;
    const { spotifyId  } = useSelector((state: RootState) => state.user);


    const DEBUG_link = "https://i.pinimg.com/originals/88/c1/2d/88c12dfcb28c16e51b30234a0513a74c.jpg";

    // TODO: do breadcrumb here 
    
    return (
        <div className="profileLayoutHeader">
            <div className="profilePageTitle">
                <div className="title">
                    <div className="pageTitle">Profile</div>
                    <div className="pageBreadcrumb">Home • Profile</div> 
                </div>
                <div className="actions">
                    <div className="action icoBtn"><DotsICO /></div>
                </div>
            </div>
            <div className="profilePageUserProfileContainer">
                <div className="profilePageUserProfileContent">
                    <div className="profileAvatarSection">
                        <div className="userAvatar">
                            <img src={DEBUG_link} />

                        </div>
                        <div className="userProfileContainer">
                            <div className="userProfileContent">
                                <div className="displayName">
                                    <div className="username">Seithh</div>
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
                            <div className="userChartContainer">
                                <div className="playlistNumbers">54 playlist • 79 follower • 11 following</div>
                            </div>
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