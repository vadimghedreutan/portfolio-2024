import Work from "./Work"
import { items } from "./info"

const Works = () => {
	return (
		<section className="mt-24 w-full relative">
			<div className="px-5 sm:px-10 big:max-w-screen-2xl mx-auto">
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
