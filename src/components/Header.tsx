"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";

import Bread1 from "@/assets/images/bread-1.png";
import Bread4 from "@/assets/images/bread-4.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

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
		url: "/favourites",
		label: "Favourites",
	},
	{
		key: "location",
		url: "/location",
		label: "Location",
	},
];

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: ReactNode;
	className?: string;
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: MobileLinkProps) {
	const router = useRouter();

	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</Link>
	);
}

function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky left-0 top-0 z-[50] w-full bg-transparent">
			<div className="container">
				<div className="flex h-[3.5rem] items-center justify-between">
					<Link
						className="font-serif text-xl text-primary transition-colors hover:text-primary-alt"
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
						<SheetContent
							side="left"
							className="border-r-0 bg-[hsla(0,0%,6%,0.2)] px-12 pt-24 backdrop-blur-[16px]"
						>
							<nav>
								<ul className="flex flex-col gap-y-10">
									{links.map((link) => (
										<li key={link.key}>
											<MobileLink
												className="font-semibold text-heading transition-colors hover:text-primary"
												href={link.url}
												onOpenChange={setOpen}
											>
												{link.label}
											</MobileLink>
										</li>
									))}
								</ul>
							</nav>

							<Image
								className="absolute right-3 top-[11rem] w-[80px]"
								src={Bread4}
								width={286}
								height={281}
								alt="Bread"
							/>
							<Image
								className="absolute left-24 top-[28rem] w-[60px]"
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
