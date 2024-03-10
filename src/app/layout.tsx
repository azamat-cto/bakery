import "@/styles/globals.css";

import type { Metadata } from "next";
import { Dancing_Script, Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import { cn } from "@/lib/utils";

type RootLayoutProps = {
	children: ReactNode;
};

const fontDancingScript = Dancing_Script({
	weight: ["700"],
	variable: "--font-dancing-script",
});

const fontMontserrat = Montserrat({
	weight: ["400", "600", "700"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "",
	description: "",
	icons: {
		icon: "/favicon.png",
	},
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(fontMontserrat.variable, fontDancingScript.variable)}
		>
			<body
				className={cn(
					"bg-background text-foreground font-sans antialiased",
				)}
			>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}

export default RootLayout;
