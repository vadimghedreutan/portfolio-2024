"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

interface Props {
	title: string
	image: string
	description: string
	link: string
	publishedAt: string
}

const ProjectCard = ({ link, image, title, description }: Props) => {
	const [isLoading, setLoading] = useState(true)
	return (
		<div>
			<Link href={link} className="cursor-pointer group">
				<div className="relative aspect-video w-full overflow-hidden shadow-sm bg-gray-200 dark:bg-gray-900">
					<Image
						src={image}
						alt={title}
						fill
						sizes="100"
						priority
						className={clsx(
							"group-hover:opacity-75 duration-700 ease-in-out object-cover",
							isLoading
								? "grayscale blur-sm scale-110"
								: "grayscale-0 blur-0 scale-100"
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>

				<div className="py-3 pl-1">
					<h3 className="text-xl">{title} - </h3>
					<p className="text-gray-500">{description}</p>
				</div>
			</Link>
		</div>
	)
}
export default ProjectCard
