import * as React from 'react';
import { ProfileContextType } from '@/types/profile.type';
import Path from '@/routes/paths';
import { FunctionComponent, ReactNode } from "react";

export const ProfileContext = React.createContext<ProfileContextType | null>(null);

interface BaseLayoutProps {
    children?: ReactNode;
}

const ProfileProvider: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    const [currentPath, setCurrentPath] = React.useState<string>(Path.Dashboard.Profile.Me);

    const updatePath = (newPath: string) => {
        setCurrentPath(newPath)
    };
    
    return <ProfileContext.Provider value={{ currentPath, updatePath }}>
        { children }
    </ProfileContext.Provider>;
};

export default ProfileProvider;