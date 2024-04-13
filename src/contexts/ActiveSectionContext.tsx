"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

import type { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
    children: ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("hero");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    return (
        <ActiveSectionContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider",
        );
    }

    return context;
}

export default ActiveSectionContextProvider;
