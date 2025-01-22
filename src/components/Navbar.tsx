"use client";

// import LoginModal from "@/features/Auth/components/loginModal";
import {
	Button,
	Link,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuToggle,
	Navbar as NavbarUi,
	useDisclosure,
} from "@heroui/react";
import { Image } from "@heroui/react";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
	{ title: "Example", link: "/example" },
	{ title: "About", link: "/about" },
];

const IsActivePage = (link : string) => {
	return link === usePathname();
}

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (

		<NavbarUi
			isBordered
			className="bg-white"
			maxWidth="2xl"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="text-black"
				/>
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3" justify="center">
				<Link href="/">
					<NavbarBrand>
						<Image
							className="rounded-none"
							src="/WeatherLogo.svg"
							alt="Vercel logomark"
							width={30}
							height={30}
						/>
						<p className="text-black font-bold text-xl ml-2">Weather App</p>
					</NavbarBrand>
				</Link>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex" justify="start">
				<Link href="/">
					<NavbarBrand>
						<Image
							className="rounded-none dark:invert"
							src="/WeatherLogo.svg"
							alt="Weather App logomark"
							width={30}
							height={30}
						/>
						<p className="text-black font-bold text-xl ml-2">Weather App</p>
					</NavbarBrand>
				</Link>
			</NavbarContent>

			{/* Main Menu */}
			<NavbarContent className="hidden sm:flex gap-12" justify="center">
				{navItems.map((item) => (
					<NavbarItem key={item.title} isActive = {IsActivePage(item.link)}>
						<Link href={item.link} color={IsActivePage(item.link) ? "primary" : "foreground"} className="text-lg font-medium">
							{item.title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			{/* Collapsable Menu */}
			<NavbarMenu>
				{navItems.map((item) => (
					<NavbarItem key={item.title}>
						<Link href={item.link} className="text-black">
							{item.title}
						</Link>
					</NavbarItem>
				))}
			</NavbarMenu>

			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						className="bg-indigo-500 text-white font-bold"
						variant="flat"
						onPress={onOpen}
					>
						Sign In
					</Button>
					{/* <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} /> */}
				</NavbarItem>
			</NavbarContent>
		</NavbarUi>
	);
}
