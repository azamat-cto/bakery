"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Bread1 from "@/assets/images/bread-1.png";
import Bread4 from "@/assets/images/bread-4.png";

import IconMenuLine from "./icons/line/IconMenuLine";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
    {
        key: "home",
        url: "/",
        label: "Home",
    },
    {
        key: "news",
        url: "/news",
        label: "News",
    },
    {
        key: "about",
        url: "/about",
        label: "About Us",
    },
    {
        key: "favourites",
        url: "/favorites",
        label: "Favorites",
    },
    {
        key: "location",
        url: "/location",
        label: "Location",
    },
];

function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-transparent">
            <div className="container">
                <div className="flex h-14 items-center justify-between">
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
                                    <Link href={link.url}>{link.label}</Link>
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
                                                    router.push(
                                                        link.url.toString(),
                                                    );
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
            </div>
        </header>
    );
}

export default Header;