import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RootLayoutProps = {
	children: ReactNode;
};

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "",
	description: "",
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(fontSans.variable)}
		>
			<body
				className={cn(
					"bg-background text-foreground font-sans antialiased",
				)}
			>
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
