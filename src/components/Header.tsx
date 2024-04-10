"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Bread1 from "@/assets/images/bread-1.png";
import Bread4 from "@/assets/images/bread-4.png";

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
        <header className="sticky left-0 top-0 z-50 w-full bg-transparent">
            <div className="container">
                <div className="flex h-14 items-center justify-between">
                    <Link
                        className="font-display text-xl text-primary transition-colors"
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
                                className="size-8"
                                size="icon"
                                variant="link"
                            >
                                <HamburgerMenuIcon />
                                <span className="sr-only">Open</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="px-12 pt-24">
                            <nav>
                                <ul className="flex flex-col gap-y-10">
                                    {links.map((link) => (
                                        <li key={link.key}>
                                            <a
                                                className="font-semibold transition-colors hover:text-primary"
                                                href={link.url}
                                                onClick={() => {
                                                    router.push(
                                                        link.toString(),
                                                    );
                                                    setOpen(false);
                                                }}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <Image
                                className="absolute right-3 top-44 w-[80px] invert"
                                src={Bread4}
                                width={286}
                                height={281}
                                alt="Bread"
                            />
                            <Image
                                className="absolute left-24 top-[28rem] w-[60px] invert"
                                src={Bread1}
                                width={200}
                                height={205}
                                alt="Bread"
                            />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;
