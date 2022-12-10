import DashboardBreadcrumbComponent from "@/components/dashboard/layouts/DashboardBreadcrumbComponent";
import React, { useEffect, useState } from "react";
import { SpotifyAPIService } from "@/services/spotifyAPIService";

import { ReactComponent as ReloadICO } from "@/assets/svgs/ico/reload.svg";
import { useEffectOnce, useTimeout } from "usehooks-ts";
import { useSelector } from "react-redux";
import { RootState } from "@/index";
import { useRecentlyPlayedTracks } from "@/hooks/store/spotify/useRecentlyPlayedTracksHooks";

const StreamHistoryTable: React.FC<{ items: PlayHistoryObject[]}> = ({ items }) => {

    console.log(items)

    const [ animed, setAnim ] = useState(false);

    useTimeout(() => {
        setAnim(true)
    }, 100)

    return (
        <div className="listenHistory">
            {
                items.map((element, index) => {
                    return (
                        <div className={`historyElement fade ${animed ? "show" : ""}`} key={index}>
                            <img src={element.track.album.images[1].url} />
                            <div className="trackInfos">
                                <div className="artistsName">{ element.track.artists[0].name } </div>
                                <div className="trackName">{ element.track.name  }</div>
                            </div>
                        </div>
                    )
                }) 
                
            }
        </div>
    )
}

const StreamHistoryPage = () => {

    const { recentlyPlayedTracks, reload, isError, isLoading } = useRecentlyPlayedTracks();
    const { spotifyId } = useSelector((state: RootState) => state.user);

    return (
        <div className="streamHistoryPage">
            <DashboardBreadcrumbComponent pageTitle={"Stream History"} pagePath={["Listened Song"]} />
            <div className="dashboardCard">
                <div className="cardHeader">
                    <div className="cardTitle">Listening History</div>
                    <div className="cardTitleActions">
                        <div className="action">
                            <div className="label" onClick={reload}>
                                Reload
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardContent streamHistoryContainer">
                    {
                    isError ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : recentlyPlayedTracks ? (
                        <StreamHistoryTable items={recentlyPlayedTracks.items} />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default StreamHistoryPage;