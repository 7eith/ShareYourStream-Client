import { useSelector } from "react-redux";
import { RootState } from "@/index";
import SpotifyLinkedMiddleware from "@/components/dashboard/middlewares/SpotifyLinkedMiddleware";
import DashboardBreadcrumbComponent from "@/components/dashboard/layouts/DashboardBreadcrumbComponent";

// import AlbumICO from "@/assets/icos/album.png";
// import DisqueICO from "@/assets/icos/disque.png";
import { ReactComponent as AlbumICO } from "@/assets/svgs/album.svg";
import { ReactComponent as DisqueICO } from "@/assets/svgs/disque.svg";
import { Dispatch, ReactComponentElement, SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

type FilterOptions = "album" | "artist";

type ISearchFilterTypeProps = {
    type: FilterOptions,
    ico: JSX.Element,
    active: boolean,
    handleClick: Dispatch<SetStateAction<FilterOptions | undefined>>
};

type SearchFilterComponent = {
    ico: JSX.Element,
    name: FilterOptions
};

const SearchFilters: SearchFilterComponent[] = [
    { ico: <AlbumICO />, name: "album" },
    { ico: <DisqueICO />, name: "artist" },
]

const SearchFilterTypeComponent: React.FC<ISearchFilterTypeProps> = ({ type, ico, active, handleClick }) => {
    return (
        <div
            className={`filterType ${active ? "active" : null}`}
            onClick={() => { handleClick(type) }}
        >
            {ico}
            <div className="description">
                <div className="name">{type}</div>
                <div className="text">using {type}</div>
            </div>
        </div>
    )
}

const ExportLikesToolPage = () => {
    const [ query, setQuery ] = useState<string>("What you got in mind ?");
    const debouncedValue = useDebounce<string>(query, 3000)

    const { spotifyId } = useSelector((state: RootState) => state.user);

    const [ typeOfSearch, setTypeOfSearch ] = useState<FilterOptions>();

    useEffect(() => {
        if (debouncedValue !== "What you got in mind ?" && debouncedValue.length > 0) {
            console.log('searching for ' + query)
        }
      }, [debouncedValue])

    return (
        spotifyId ? (
            <div className="exportLikeToolPage">
                <DashboardBreadcrumbComponent pageTitle={"Export Likes to Playlist"} pagePath={["Listened Song"]} />
                <div className="typeSelectorContainer">
                    {
                        SearchFilters.map((searchFilter, index) => (
                            <SearchFilterTypeComponent
                                key={index}
                                type={searchFilter.name}
                                ico={searchFilter.ico}
                                active={typeOfSearch === searchFilter.name}
                                handleClick={setTypeOfSearch}
                            />
                        ))
                    }
                </div>
                <div className="searchBar">
                    { query }
                    <input 
                        type="text" 
                        placeholder="Type here..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
            </div>
        ) : (
            <SpotifyLinkedMiddleware />
        )
    )
}

export default ExportLikesToolPage;