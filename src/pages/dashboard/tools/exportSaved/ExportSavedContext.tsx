import * as React from 'react';
import { ExportSavedComputingState, ExportSavedContextType, ExportSavedFilterOptions, ISearchResult } from '@/types/contexts.type';
import { FunctionComponent, ReactNode } from "react";
import { useDebounce } from 'usehooks-ts';

export const ExportSavedContext = React.createContext<ExportSavedContextType | null>(null);

interface BaseLayoutProps {
    children?: ReactNode;
}

const ExportSavedContextProvider: FunctionComponent<BaseLayoutProps> = ({ children }) => {

    const [query, setQuery] = React.useState<string>("");
    const debouncedQuery = useDebounce<string>(query, 100);

    const [searchType, setSearchType] = React.useState<ExportSavedFilterOptions>("artist");
    const [selectedResult, setResult] = React.useState<ISearchResult | null>(null);

    const [savedTracks, setSavedTracks] = React.useState<TrackObjectSimplified[]>();
    const [computingState, setComputingState] = React.useState<ExportSavedComputingState>();

    const updateQuery = (_query: string) => {
        setQuery(_query);
    };

    const updateSearchType = (_type: ExportSavedFilterOptions) => {
        setSearchType(_type);
    }

    const selectResult = (_id: ISearchResult | null) => {
        setResult(_id ? _id : null);
    }

    const updateSavedTracks = (_tracks: TrackObjectSimplified[]) => { setSavedTracks(_tracks) };
    const updateComputingState = (_state: ExportSavedComputingState | undefined) => { setComputingState(_state) };

    return <ExportSavedContext.Provider value={{
        debouncedQuery,
        query, updateQuery,
        searchType, updateSearchType,
        selectedResult, selectResult,
        computingState, updateComputingState,
        savedTracks, updateSavedTracks
    }}>
        {children}
    </ExportSavedContext.Provider>;
};

export default ExportSavedContextProvider;