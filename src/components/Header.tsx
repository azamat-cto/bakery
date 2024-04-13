"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Bread1 from "@/assets/images/bread-1.png";
import Bread4 from "@/assets/images/bread-4.png";
import { useActiveSectionContext } from "@/contexts/ActiveSectionContext";
import { cn } from "@/lib/cn";
import { links } from "@/lib/constants";

import IconMenuLine from "./icons/line/IconMenuLine";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });

    return (
        <header
            className={cn(
                "fixed left-0 top-0 z-50 w-full",
                scroll &&
                    "after:content after:absolute after:size-full after:bg-[hsla(0,0%,6%,0.2)] after:backdrop-blur after:top-0 after:left-0 after:-z-10",
            )}
        >
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="container"
            >
                <div className="flex h-16 items-center justify-between">
                    <Link
                        className="font-display text-xl text-primary transition-colors hover:text-primary-alt"
                        href="/"
                    >
                        Bakery
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-x-4">
                            {links.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        className={cn(
                                            "font-medium relative p-2 px-4",
                                            {
                                                "text-heading":
                                                    link.key === activeSection,
                                            },
                                        )}
                                        href={link.url}
                                        onClick={() => {
                                            setActiveSection(link.key);
                                            setTimeOfLastClick(Date.now());
                                        }}
                                    >
                                        <span className="relative z-10">
                                            {link.label}
                                        </span>
                                        {link.key === activeSection && (
                                            <motion.span
                                                className="absolute inset-0 rounded-full bg-primary"
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button
                                className="text-2xl text-foreground hover:bg-transparent hover:text-heading"
                                size="icon"
                                variant="ghost"
                            >
                                <IconMenuLine />
                                <span className="sr-only">Open</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="border-l-0 bg-[hsla(0,0%,6%,0.2)] px-12 pt-24 backdrop-blur"
                        >
                            <nav>
                                <ul className="flex flex-col gap-y-10">
                                    {links.map((link) => (
                                        <li key={link.key}>
                                            <Link
                                                className="font-semibold text-heading transition-colors hover:text-primary"
                                                href={link.url}
                                                onClick={() => {
                                                    setOpen(false);
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <Image
                                className="absolute right-3 top-44 w-[80px]"
                                src={Bread4}
                                width={286}
                                height={281}
                                alt="Pretzel"
                            />
                            <Image
                                className="absolute left-24 top-[28rem] w-[60px]"
                                src={Bread1}
                                width={200}
                                height={205}
                                alt="Croissant"
                            />
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>
        </header>
    );
}

export default Header;
