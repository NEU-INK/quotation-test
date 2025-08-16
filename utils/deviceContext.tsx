// 用于全局管理设备状态

// deviceContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useMediaQuery, useTheme, Theme } from '@mui/material';

interface DeviceContextProps {
    isMobile: boolean;
}

const DeviceContext = createContext<DeviceContextProps | undefined>(undefined);

interface DeviceProviderProps {
    children: ReactNode;
}

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
    const theme: Theme = useTheme();
    const isMobileQuery = useMediaQuery(theme.breakpoints.down('md'));
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        setIsMobile(isMobileQuery);
    }, [isMobileQuery]);

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevice = (): DeviceContextProps => {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error('useDevice must be used within a DeviceProvider');
    }
    return context;
};
