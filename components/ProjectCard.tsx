import Link from "next/link"

interface Props {
	title: string
	image: string
	description: string
	link: string
	publishedAt: string
}

const ProjectCard = ({ link, image, title, description }: Props) => {
	return (
		<div>
			<Link href={link} className="cursor-pointer">
				<img
					src={image}
					alt={title}
					className="border-[.8px] border-gray-900 p-1"
				/>

				<div className="py-3 pl-1">
					<h3 className="text-xl">{title} - </h3>
					<p className="text-gray-500">{description}</p>
				</div>
			</Link>
		</div>
	)
}
export default ProjectCard
