import DashboardBreadcrumbComponent from "@/components/dashboard/layouts/DashboardBreadcrumbComponent";
import React, { useEffect, useState } from "react";
import { SpotifyAPIService } from "@/services/spotifyAPIService";

import { ReactComponent as ReloadICO } from "@/assets/svgs/ico/reload.svg";
import { useEffectOnce, useTimeout } from "usehooks-ts";
import { useSelector } from "react-redux";
import { RootState } from "@/index";

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

    const { spotifyId } = useSelector((state: RootState) => state.user);

    const [ listenHistory, setListenHistory ] = useState<UsersRecentlyPlayedTracksResponse>();
    const [ isFetching, setFetchingState ] = useState<boolean>(false);
    
    const [ isLoading, setLoadingState ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);
    
    useEffect(() => {
        
        if (listenHistory === undefined && !isFetching && spotifyId) {
            setFetchingState(true)
        
            const spotifyService = new SpotifyAPIService();

            spotifyService.getListenHistory()
            .then((response: UsersRecentlyPlayedTracksResponse) => {
                setListenHistory(response);
                setLoadingState(false);
            })
            .catch((err: { status: number, message: string; }) => {
                setError(err.message);
                setLoadingState(false)
            })
            .finally(() => {
                setFetchingState(false);
            })

        }
    })
    

    return (
        <div className="streamHistoryPage">
            <DashboardBreadcrumbComponent pageTitle={"Stream History"} pagePath={["Listened Song"]} />
            <div className="dashboardCard">
                <div className="cardHeader">
                    <div className="cardTitle">{ isLoading ? "Loading..." : "Listening History" }</div>
                    <div className="cardTitleActions">
                        <div className="action">
                            <div className="label" onClick={() => { setListenHistory(undefined)} }>
                                Reload
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardContent streamHistoryContainer">
                    {
                        isLoading || error !== null ? (
                            error !== null ? error : "Loading..."
                        ) : null
                    }
                    { 
                        listenHistory?.items !== undefined ? <StreamHistoryTable items={listenHistory.items} /> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default StreamHistoryPage;