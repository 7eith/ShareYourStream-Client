import DashboardBreadcrumbComponent from "@/components/dashboard/layouts/DashboardBreadcrumbComponent";
import React, { CSSProperties, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/index";
import { useRecentlyPlayedTracks } from "@/hooks/store/spotify/useRecentlyPlayedTracksHooks";
import { useOnClickOutside } from "usehooks-ts";
import LazyLoadedImage from "@/components/global/LazyLoadedImage";

const CardLoadingComponent = () => {

    return (
        <div className="cardLoadingContainer">
            Loading ...
        </div>
    )
}

const ListenedTrack: React.FC<{ playedTimestamp: string, track: TrackObjectFull }> = ({ playedTimestamp, track }) => {

    const ref = useRef(null);
    const [hasFocus, setFocusState] = useState<boolean>(false);

    const artists: string = track.artists[0].name;

    useOnClickOutside(ref, () => setFocusState(false));

    return (
        <div
            ref={ref}
            className={`historyElement ${hasFocus ? "focus" : null}`}
            onClick={() => setFocusState(true)}
        >
            <LazyLoadedImage 
                url={track.album.images.at(-1)?.url} 
                width={64} 
                height={64}
                backgroundColor="#2b2b40"             
            />
            <div className="trackInfos">
                <div className="trackName">{track.name}</div>
                <div className="artistsName">{artists}</div>
            </div>
        </div>
    )
}

const StreamHistoryTable: React.FC<{ items: PlayHistoryObject[] }> = ({ items }) => {

    return (
        <div className="listenHistory">
            {
                items.map((historyObject, index) =>
                    <ListenedTrack
                        playedTimestamp={historyObject.played_at}
                        track={historyObject.track}
                        key={index}
                    />
                )

            }
        </div>
    )
}

const StreamHistoryPage = () => {

    const { recentlyPlayedTracks, reload, isError, isLoading } = useRecentlyPlayedTracks();

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
                            <CardLoadingComponent />
                        ) : recentlyPlayedTracks ? (
                            <StreamHistoryTable items={recentlyPlayedTracks.items} />
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default StreamHistoryPage;