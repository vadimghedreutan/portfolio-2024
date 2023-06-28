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
		<header className="px-5 sm:px-10 py-6 sm:py-10">
			<div className="flex items-center justify-between">
				<div className="relative h-12 w-12 flex items-center cursor-pointer">
					<Logo />
				</div>

				<nav className="flex items-center">
					<ul className="flex space-x-6">
						{links.map((l) => (
							<li key={l.href} className="transition-all">
								<Link
									href={l.href}
									className={clsx(
										"transition-all hover:text-zinc-600 cursor-pointer",
										{
											"text-zinc-500": l.href !== path,
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
