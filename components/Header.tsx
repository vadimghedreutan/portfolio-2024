"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
	{ href: "/projects", text: "Projects" },
	{ href: "/blog", text: "Blog" },
]

const Header = () => {
	const path = usePathname()
	return (
		<header className="max-w-7xl mx-auto px-5 py-6 sm:py-10">
			<div className="flex items-center justify-between">
				<Link
					href="/"
					className="relative h-12 w-12 flex items-center cursor-pointer"
				>
					<img
						src="/logo.svg"
						alt="Vadim Ghedreutan"
						className="object-contain"
					/>
				</Link>

				<nav className="flex items-center space-x-8">
					<ul className="space-x-5 font-medium flex">
						{links.map((l) => (
							<li
								key={l.href}
								className="group transition-all duration-300 ease-in-out"
							>
								<Link
									href={l.href}
									className={`${
										l.href === path ? "font-bold" : ""
									}`}
								>
									<span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
										{l.text}
									</span>
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
