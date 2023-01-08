export type ExportSavedContextType = {
    query: string;
    debouncedQuery: string;
    updateQuery: (_query: string) => void;

    searchType: ExportSavedFilterOptions | undefined;
    updateSearchType: (_type: ExportSavedFilterOptions) => void;

    selectedResult: ISearchResult | null;
    selectResult: (_result: ISearchResult | null) => void;

    savedTracks: TrackObjectSimplified[] | undefined;
    updateSavedTracks: (_tracks: TrackObjectSimplified[]) => void;

    computingState: ExportSavedComputingState | undefined;
    updateComputingState: (_state: ExportSavedComputingState | undefined) => void;
};

export type ExportSavedComputingState = "pending" | "computing" | "fulfilled" | "rejected";

export type ISearchResult = {
    id: string | undefined;
    image: string | undefined;
    text: string | undefined;

    followers?: number | undefined;
    tracks?: number | undefined;
}

export type ExportSavedSearchFilterType = {
    icon: JSX.Element,
    type: FilterOptions
};
  
export type ExportSavedFilterOptions = "album" | "artist";
