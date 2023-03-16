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
			<Link href={link} target="_blank" className="cursor-pointer">
				<div className="relative aspect-video w-full overflow-hidden shadow-sm bg-gray-200 dark:bg-gray-900 rounded-lg">
					<Image
						src={image}
						alt={title}
						fill
						sizes="100"
						priority
						className={clsx(
							"object-cover",
							isLoading ? "grayscale" : "grayscale-0"
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>

				<div className="py-3 pl-1">
					<h3 className="text-xl">{title} - </h3>
					<p className="text-neutral-500 dark:text-neutral-400">
						{description}
					</p>
				</div>
			</Link>
		</div>
	)
}
export default ProjectCard
