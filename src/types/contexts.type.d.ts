export type ExportSavedContextType = {
    query: string;
    debouncedQuery: string;
    updateQuery: (_query: string) => void;

    searchType: ExportSavedFilterOptions | undefined;
    updateSearchType: (_type: ExportSavedFilterOptions) => void;

    selectedResult: ISearchResult | null;
    selectResult: (_result: ISearchResult | null) => void;
};

export type ISearchResult = {
    id: string | undefined;
    image: string | undefined;
    text: string | undefined;
}

export type ExportSavedSearchFilterType = {
    icon: JSX.Element,
    type: FilterOptions
};

export type SearchFilterComponentProps = {
    type: FilterOptions,
    ico: JSX.Element,
    active: boolean,
    handleClick: Dispatch<SetStateAction<FilterOptions | undefined>>
};
  
export type ExportSavedFilterOptions = "album" | "artist";
