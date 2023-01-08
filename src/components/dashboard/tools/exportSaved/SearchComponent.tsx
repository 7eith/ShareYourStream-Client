import { ExportSavedContext } from "@/pages/dashboard/tools/exportSaved/ExportSavedContext";
import { ExportSavedContextType, ISearchResult } from "@/types/contexts.type";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/index";

import { ReactComponent as SearchICO } from "@/assets/svgs/ico/search.svg";
import ContentLoader from "react-content-loader";
import LazyLoadedImage from "@/components/global/LazyLoadedImage";

const SearchResultLoadingComponent = () => {
    return (
        <div className="searchResultLoadingComponent">
            <ContentLoader
                speed={2}
                height={56}
                backgroundColor="#2b2b40"
                foregroundColor="#383854"
            >
                <rect x="5" y="0" rx="7" ry="7" width="48" height="48" /> 
                <rect x="70" y="15" rx="3" ry="2" width="150" height="21" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                height={56}
                backgroundColor="#2b2b40"
                foregroundColor="#383854"
            >
                <rect x="5" y="0" rx="7" ry="7" width="48" height="48" /> 
                <rect x="70" y="15" rx="3" ry="2" width="150" height="21" />
            </ContentLoader>
        </div>
    )
}

const ResultElementComponent : React.FC<ISearchResult> = (searchResult) => {

    const { text, image} = searchResult;
 
    const { selectResult } = useContext(ExportSavedContext) as ExportSavedContextType;

    const handleClick = () => {
        selectResult(searchResult);
    }

    return (
        <div 
            className="resultElementComponent"
            onClick={handleClick}
            >
            <LazyLoadedImage 
                url={image}
                width={48} 
                height={48}
                backgroundColor="#2b2b40"             
            />
            <div className="optionName">{ text }</div>
        </div>
    )
}

const SearchResultsComponent: React.FC = () => {

    const { query, debouncedQuery, searchType, selectedResult } = useContext(ExportSavedContext) as ExportSavedContextType;
    const [results, setResults] = useState<ISearchResult[]>();
    const [isLoading, setLoadingState] = useState<boolean>();
    const { spotifyAccessToken } = useSelector((state: RootState) => state.user);

    const searchOnSpotify = () => {
        let headers = {
            "Authorization": `Bearer ${spotifyAccessToken}`
        }

        let params = {
            q: query,
            type: searchType
        }

        axios.get<AlbumSearchResponse | ArtistSearchResponse>(
            "https://api.spotify.com/v1/search",
            { headers, params }
        )
            .then(({ data }) => {
                if (searchType === "album") {
                    let response = data as AlbumSearchResponse;

                    setResults(response.albums.items.map((album) => ({
                        id: album.id,
                        image: album.images.at(-1)?.url, 
                        text: album.name,
                        tracks: album.total_tracks
                    })));
                    setLoadingState(false);
                } else {
                    let response = data as ArtistSearchResponse;

                    setResults(response.artists.items.map((artist) => ({
                        id: artist.id,
                        image: artist.images.at(-1)?.url,
                        text: artist.name,
                        followers: artist.followers.total
                    })))
                    setLoadingState(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (debouncedQuery === "") {
            setResults([]);
            setLoadingState(false);
        } else {
            setLoadingState(true);
            searchOnSpotify()
        }
    }, [debouncedQuery, spotifyAccessToken])

    return (
        <div className="searchResultsComponent">
            {
                isLoading ? 
                    <SearchResultLoadingComponent />
                        :
                    results?.map((element, index) => (<ResultElementComponent key={index} {...element} />))
            }
        </div>
    )
}

const SearchResultComponent = () => {
    const { selectedResult } = useContext(ExportSavedContext) as ExportSavedContextType;

    return (
        selectedResult ? null : <SearchResultsComponent />
    )
}

const SearchBarComponent = () => {

    const { query, updateQuery, selectResult, updateComputingState } = useContext(ExportSavedContext) as ExportSavedContextType;

    const handleClick = () => {
        selectResult(null)
        updateComputingState(undefined);
    }

    return (
        <div className="searchBarComponent" onClick={handleClick}>
            <SearchICO />
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={e => updateQuery(e.target.value)}
                autoComplete="off"
            />
        </div>
    )
}

const SearchComponent = () => {

    const { searchType } = useContext(ExportSavedContext) as ExportSavedContextType;

    return (
        searchType ? (
            <div className={`searchComponent actionStep`}>
                <div className="searchBarContainer">
                    <SearchBarComponent />
                    <div className="advancedSearchBtn">Advanced Search</div>
                </div>
                <SearchResultComponent />
            </div>
        ) : null
    )
}

export default SearchComponent;