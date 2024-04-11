"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/cn";

import IconArrowUpLine from "./icons/line/IconArrowUpLine";
import { Button } from "./ui/button";

function ScrollUp() {
    const [scroll, setScroll] = useState(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 350) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });

    return (
        <Button
            className={cn(
                "fixed -bottom-[100%] right-4 z-50 bg-card text-lg text-heading transition-[bottom]",
                scroll && "bottom-12",
            )}
            size="icon"
            onClick={() => window.scrollTo(0, 0)}
        >
            <IconArrowUpLine />
        </Button>
    );
}

export default ScrollUp;
