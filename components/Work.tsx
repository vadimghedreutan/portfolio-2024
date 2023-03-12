import Link from "next/link"
import Image from "next/image"

interface Props {
	title: string
	image: string
	description: string
	link: string
	publishedAt: string
}

const Work = ({ image, title, description, link }: Props) => {
	return (
		<div>
			<Link
				href={link}
				className="group mx-auto flex max-w-lg flex-col items-center justify-center py-10 px-5"
			>
				<div className="flex items-center justify-between space-x-2">
					<div className="px-2">
						<p className="text-xl sm:text-2xl font-semibold">
							{title}
						</p>
					</div>
				</div>
				<div className="pt-4 pb-6 sm:pt-8">
					<Image
						src={image}
						width={427}
						height={284}
						alt={title}
						placeholder="blur"
						blurDataURL={image}
						className="transition-transform duration-500 ease-in-out sm:group-hover:scale-105 border-[.8px] border-gray-900 p-1"
					/>
				</div>
				<div className="mx-auto max-w-sm text-center sm:max-w-lg">
					<p>{description}</p>
				</div>
			</Link>
		</div>
	)
}
export default Work
