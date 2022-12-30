import * as React from 'react';
import { ExportSavedContextType, ExportSavedFilterOptions, ISearchResult } from '@/types/contexts.type';
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

    const updateQuery = (_query: string) => {
        setQuery(_query);
    };

    const updateSearchType = (_type: ExportSavedFilterOptions) => {
        setSearchType(_type);
    }

    const selectResult = (_id: ISearchResult | null) => {
        setResult(_id ? _id : null);
    }

    return <ExportSavedContext.Provider value={{ query, debouncedQuery, updateQuery, searchType, updateSearchType, selectedResult, selectResult }}>
        {children}
    </ExportSavedContext.Provider>;
};

export default ExportSavedContextProvider;