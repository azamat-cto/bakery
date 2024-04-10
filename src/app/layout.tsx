import "@/styles/globals.css";

import type { Metadata } from "next";
import { Dancing_Script, Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/cn";

type RootLayoutProps = {
    children: ReactNode;
};

const DANCING_SCRIPT = Dancing_Script({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--font-dancing-script",
});

const MONTSERRAT = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "",
    description: "",
    icons: {
        icon: {
            url: "/favicon.png",
        },
    },
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html
            lang="en"
            className={cn(
                DANCING_SCRIPT.variable,
                MONTSERRAT.variable,
                "scroll-smooth",
            )}
            suppressHydrationWarning
        >
            <body className="bg-background font-sans text-foreground antialiased">
                <Header />
                <main className="overflow-x-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
