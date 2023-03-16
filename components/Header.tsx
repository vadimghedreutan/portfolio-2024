"use client"
import Link from "next/link"
import Logo from "./logo"
import clsx from "clsx"
import { usePathname } from "next/navigation"

const links = [
	{ href: "/", text: "Home" },
	{ href: "/projects", text: "Projects" },
	{ href: "/blog", text: "Blog" },
]

const Header = () => {
	const path = usePathname()
	return (
		<header className="max-w-7xl mx-auto px-5 py-6 sm:py-10">
			<div className="flex items-center justify-between">
				<div className="relative h-12 w-12 flex items-center cursor-pointer">
					<Logo />
				</div>

				<nav className="flex items-center space-x-8">
					<ul className="space-x-5 flex">
						{links.map((l) => (
							<li key={l.href} className="transition-all">
								<Link
									href={l.href}
									className={clsx(
										"transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
										{
											"text-neutral-500": l.href !== path,
											"font-bold": l.href === path,
										}
									)}
								>
									{l.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
export default Header
