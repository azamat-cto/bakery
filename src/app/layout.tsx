import { ReactNode } from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";

type Props = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: "",
    description: "",
};

function RootLayout({ children }: Readonly<Props>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
