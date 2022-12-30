import { ExportSavedContext } from "@/pages/dashboard/tools/exportSaved/ExportSavedContext";
import { ExportSavedContextType, ISearchResult } from "@/types/contexts.type";
import { useContext } from "react";

const SelectedResourceComponent = () => {
    const { selectedResult } = useContext(ExportSavedContext) as ExportSavedContextType;
    
    return (
        selectedResult ? (
            <div className="re"></div>
        ) : (
            null
        )
    )
}

export default SelectedResourceComponent;