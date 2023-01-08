import { ExportSavedContext } from "@/pages/dashboard/tools/exportSaved/ExportSavedContext";
import { ExportSavedContextType } from "@/types/contexts.type";
import { ReactComponent as ShareICO } from "@/assets/svgs/ico/share.svg";

import { useContext } from "react";
import { useExtractSavedTracks } from "@/hooks/spotify/useExtractSavedTracks";

const SavedTracksComponent = () => {
    const { selectedResult, searchType } = useContext(ExportSavedContext) as ExportSavedContextType;

    const { isLoading, savedTracks, isComputing } = useExtractSavedTracks();

    if (isLoading)
        return <div className="loading">Loading</div>;

    if (isComputing)   
        return <div className="computing">Computing !</div>;

    return (
        <div className="savedTracksContainer">
            { savedTracks?.map((track, index) => (
                <div className="track">{ track.name } { track.artists[0].name }</div>
            ))}
        </div>
    )
}

const SelectedResourceComponent = () => {
    const { selectedResult, searchType, computingState, savedTracks } = useContext(ExportSavedContext) as ExportSavedContextType;

    const resourceLink = `https://open.spotify.com/${searchType}/${selectedResult?.id}`;
    
    return (
        selectedResult ? (
            <div className="selectedResourceComponent">
                <div className="resourceHeader">
                    <img 
                        src={selectedResult.image}
                        alt={selectedResult.text} 
                    />
                    <div className="resourceSection">
                        <div className="name">
                            <div className="text">{ selectedResult.text }</div>
                            <a
                                href={resourceLink} 
                                className="gotoResource"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <ShareICO />
                            </a>
                        </div>
                        <div className="stats">
                            { searchType === "album" ? (
                                <div className="dataText">{ selectedResult.tracks } songs </div>
                            ) : (
                                <div className="dataText">{ selectedResult.followers } followers </div>
                            )}
                        </div>

                    </div>

                </div>
                <div className="resourceActions ">
                    <SavedTracksComponent />
                </div>
            </div>
        ) : (
            null
        )
    )
}

export default SelectedResourceComponent;