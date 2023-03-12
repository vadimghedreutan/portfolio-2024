import Link from "next/link"
import Image from "next/image"

interface Props {
	title: string
	image: string
	description: string
	link: string
	publishedAt: string
}

const ProjectCard = ({ link, image, title, description }: Props) => {
	return (
		<div className="flex items-center justify-center">
			<Link href={link} className="cursor-pointer">
				<Image
					src={image}
					width={403}
					height={243}
					alt={title}
					placeholder="blur"
					blurDataURL={image}
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
