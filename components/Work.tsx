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

const Work = ({ image, title, description, link }: Props) => {
	const [isLoading, setLoading] = useState(true)
	return (
		<div>
			<Link
				href={link}
				rel="noopener noreferrer"
				target="_blank"
				className="mx-auto flex max-w-lg flex-col items-center justify-center py-10 px-5"
			>
				<div className="flex items-center justify-between space-x-2 pb-5">
					<div className="px-2">
						<p className="text-xl sm:text-2xl font-semibold">
							{title}
						</p>
					</div>
				</div>
				<div className="relative aspect-video w-full overflow-hidden shadow-sm bg-gray-200 dark:bg-gray-900 rounded-lg">
					<Image
						src={image}
						alt={title}
						fill
						sizes="100"
						priority
						className={clsx(
							"object-cover",
							isLoading
								? "grayscale scale-105"
								: "grayscale-0 scale-100"
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>
				<div className="mx-auto max-w-sm text-center sm:max-w-lg text-neutral-500 dark:text-neutral-400 pt-5">
					<p>{description}</p>
				</div>
			</Link>
		</div>
	)
}
export default Work
