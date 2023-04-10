import type { Metadata } from "next"
import ProviderAnimation from "../ProviderAnimation"
import ProjectCard from "components/ProjectCard"
import { items } from "../../components/info"

export const metadata: Metadata = {
	title: "Projects",
	description: "React Developer with expertise in CSS frameworks.",
}

const Projects = () => {
	return (
		<div>
			<ProviderAnimation>
				<div className="grid grid-cols-fluid sm:grid-cols-fluid_second px-5 sm:px-10 py-8 gap-4">
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
							.map((item) => (
								<ProjectCard key={item.title} {...item} />
							))}
				</div>
			</ProviderAnimation>
		</div>
	)
}
export default Projects
