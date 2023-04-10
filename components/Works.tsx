import Work from "./Work"
import { items } from "./info"
import ProviderAnimation from "../app/ProviderAnimation"

const Works = () => {
	return (
		<section className="py-8 px-5 sm:px-10">
			<ProviderAnimation>
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
							.map((work, index) => (
								<Work key={index} {...work} />
							))}
				</div>
			</ProviderAnimation>
		</section>
	)
}
export default Works
