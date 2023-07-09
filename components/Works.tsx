import Work from "./Work"
import { items } from "./info"

const Works = () => {
	return (
		<section className="mt-24 w-full relative bg-zinc-50 dark:bg-zinc-800/50">
			<div className="px-5 sm:px-10 2xl:max-w-7xl mx-auto">
				<h1 className="font-thunder_hc text-4xl font-medium py-4">
					Projects
					<span className="text-primary"> .</span>
				</h1>
				<div className="pb-8">
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
								.map((work, index) => (
									<Work key={index} {...work} />
								))}
					</div>
				</div>
			</div>
		</section>
	)
}
export default Works
