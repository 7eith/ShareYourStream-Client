import { ExportSavedContext } from "@/pages/dashboard/tools/exportSaved/ExportSavedContext";
import { ExportSavedContextType, ExportSavedSearchFilterType } from "@/types/contexts.type";
import { useContext} from "react";

const SearchFilterComponent: React.FC<ExportSavedSearchFilterType> = ({ icon, type }) => {
    const { searchType, updateSearchType } = useContext(ExportSavedContext) as ExportSavedContextType;

    const updateSearchFilterType = () => {
        updateSearchType(type);
    }

    return (
        <div
            className={`filterType${searchType === type ? " active" : ""}`}
            onClick={updateSearchFilterType}
        >
            {icon}
            <div className="description">
                <div className="name">{type}</div>
                <div className="text">using {type}</div>
            </div>
        </div>
    )
}

export default SearchFilterComponent;