import Work from "./Work"
import { items } from "./info"

const Works = () => {
	return (
		<section className="sm:py-12 py-8 w-full relative">
			<div className="px-5 max-w-2xl mx-auto">
				<h1 className="font-thunder_hc text-4xl font-medium pb-6">
					What I've been working on the past few years
					<span className="text-primary"> .</span>
				</h1>
				<div className="pb-8">
					<div className="relative grid lg:grid-cols-2 gap-4">
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
								.slice(0, 4)
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
