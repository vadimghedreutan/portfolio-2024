import Work from "./Work"
import { items } from "./info"
import Link from "next/link"

const Works = () => {
	return (
		<section className="py-24 px-5 sm:px-10">
			<div className="pb-8 flex items-center justify-between">
				<h1 className="font-thunder_hc text-5xl font-medium">
					Projects<span className="text-primary">.</span>
				</h1>
				<Link
					href="/projects"
					className="text-lg underline transition-all hover:text-primary cursor-pointer"
				>
					See all projects
				</Link>
			</div>
			<div className="relative grid lg:grid-cols-3 gap-4">
				{items &&
					items
						.sort((a, b) => {
							if (
								new Date(a.publishedAt) >
								new Date(b.publishedAt)
							) {
								return -1
							}
							return 1
						})
						.slice(0, 3)
						.map((work, index) => <Work key={index} {...work} />)}
			</div>
		</section>
	)
}
export default Works
