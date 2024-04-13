import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/contexts/ActiveSectionContext";
import type { SectionName } from "@/lib/types";

export function useSectionInView(sectionName: SectionName, threshold?: number) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}
