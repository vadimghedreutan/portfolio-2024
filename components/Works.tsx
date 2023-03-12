import Work from "./Work"
import { items } from "./info"

const Works = () => {
	return (
		<section className="py-8 px-5 max-w-7xl mx-auto">
			<div className="relative grid bg-clr_first dark:bg-[#272C38]">
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
						.slice(0, 1)
						.map((work, index) => <Work key={index} {...work} />)}
			</div>
			<div className="relative grid lg:grid-cols-2 bg-clr_second dark:bg-clr_third">
				{items.slice(1, 3).map((work, index) => (
					<Work key={index} {...work} />
				))}
			</div>
		</section>
	)
}
export default Works
