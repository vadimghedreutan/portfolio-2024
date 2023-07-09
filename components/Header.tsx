"use client"
import Link from "next/link"
import Logo from "./logo"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { LayoutGroup, motion } from "framer-motion"

const navItems = {
	"/": {
		name: "home",
	},
	"/projects": {
		name: "projects",
	},
	"/blog": {
		name: "blog",
	},
}

const Header = () => {
	let pathname = usePathname() || "/"
	if (pathname.includes("/blog/")) {
		pathname = "/blog"
	}
	return (
		<header className="px-5 sm:px-10 py-6 sm:py-10 tracking-tight">
			<div className="flex items-center justify-between">
				<div className="relative h-12 w-12 flex items-center cursor-pointer">
					<Logo />
				</div>
				<LayoutGroup>
					<nav className="flex items-center">
						<ul className="flex flex-row space-x-4">
							{Object.entries(navItems).map(
								([path, { name }]) => {
									const isActive = path === pathname
									return (
										<Link
											key={path}
											href={path}
											className={clsx(
												"transition-all hover:text-zinc-800 dark:hover:text-zinc-200 flex align-middle",
												{
													"text-zinc-500": !isActive,
												}
											)}
										>
											<span className="relative py-1 px-2">
												{name}
												{path === pathname ? (
													<motion.div
														className="absolute h-[1px] top-7 mx-2 inset-0 bg-zinc-200 dark:bg-zinc-800 z-[-1] dark:bg-gradient-to-r from-transparent to-zinc-900"
														layoutId="sidebar"
														transition={{
															type: "spring",
															stiffness: 350,
															damping: 30,
														}}
													/>
												) : null}
											</span>
										</Link>
									)
								}
							)}
						</ul>
					</nav>
				</LayoutGroup>
			</div>
		</header>
	)
}
export default Header
