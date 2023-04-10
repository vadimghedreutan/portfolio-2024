import Work from "./Work"
import { items } from "./info"

const Works = () => {
	return (
		<section className="py-8 px-5 sm:px-10">
			<div className="relative grid sm:grid-cols-2 gap-4">
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
						.map((work, index) => <Work key={index} {...work} />)}
			</div>
		</section>
	)
}
export default Works
