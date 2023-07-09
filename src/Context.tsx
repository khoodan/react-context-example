import React, { createContext, useState } from "react";

/**
 * This is the type of the data and functions provided to the child nodes
 */
export type GlobalContextType = {
    information: string;
    setInformation: (information: string) => void;
    setDefaultInformation: () => void;
}

/**
 * This is the context itself
 */
export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

/**
 * This is the provider for the context
 * It is a wrapper for child components to provide information to them
 * All functions/data should be stored here
 */
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [information, setInformation] = useState<string>("");

    const setDefaultInformation = () => {
        setInformation("here is some default information");
    }

    const providedValue: GlobalContextType = {
        information,
        setInformation,
        setDefaultInformation
    };

    return (
        <GlobalContext.Provider value={providedValue}>
            {children}
        </GlobalContext.Provider>
    );
}

/**
 * This is a custom hook to use the context
 */
export const useGlobalContext = () => React.useContext(GlobalContext);