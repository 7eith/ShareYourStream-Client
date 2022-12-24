import { useSelector } from "react-redux";
import { RootState } from "@/index";
import SpotifyLinkedMiddleware from "@/components/dashboard/middlewares/SpotifyLinkedMiddleware";
import DashboardBreadcrumbComponent from "@/components/dashboard/layouts/DashboardBreadcrumbComponent";

import { ReactComponent as AlbumICO } from "@/assets/svgs/album.svg";
import { ReactComponent as DisqueICO } from "@/assets/svgs/disque.svg";

import ExportSavedContextProvider from "./ExportSavedContext";
import { ExportSavedSearchFilterType } from "@/types/contexts.type";
import SearchFilterComponent from "@/components/dashboard/tools/exportSaved/SearchFilterComponent";
import SearchComponent from "@/components/dashboard/tools/exportSaved/SearchComponent";
import SelectedResourceComponent from "@/components/dashboard/tools/exportSaved/SelectedResourceComponent";

const SearchFilters: ExportSavedSearchFilterType[] = [
    { type: "artist", icon: <DisqueICO /> },
    { type: "album", icon: <AlbumICO />, },
]

const ExportSavedPage = () => {
    // const [query, setQuery] = useState<string>("What you got in mind ?");

    // const debouncedValue = useDebounce<string>(query, 3000)

    const { spotifyId } = useSelector((state: RootState) => state.user);

    // useEffect(() => {
    //     if (debouncedValue !== "What you got in mind ?" && debouncedValue.length > 0) {
    //         console.log('searching for ' + query)
    //     }
    // }, [debouncedValue])

    return (
        spotifyId ? (
            <ExportSavedContextProvider>
                <div className="exportLikeToolPage">
                    <DashboardBreadcrumbComponent pageTitle={"Export Likes to Playlist"} pagePath={["Listened Song"]} />
                    <div className="actionStep">
                        <div className="typeSelectorContainer actionContent">
                            { SearchFilters.map((searchFilter, index) => <SearchFilterComponent key={index} {...searchFilter} />) }
                        </div>
                    </div>
                    <div className="actionStep">
                        <div className="searchSavedContainer actionContent">
                            <SearchComponent />
                        </div>
                    </div>
                    <SelectedResourceComponent />
                </div>
            </ExportSavedContextProvider>
        ) : (
            <SpotifyLinkedMiddleware />
        )
    )
}

export default ExportSavedPage;