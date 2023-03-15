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
				className="mx-auto flex max-w-lg flex-col items-center justify-center py-10 px-5"
			>
				<div className="flex items-center justify-between space-x-2 pb-5">
					<div className="px-2">
						<p className="text-xl sm:text-2xl font-semibold">
							{title}
						</p>
					</div>
				</div>
				<div className="group relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer">
					<Image
						src={image}
						alt={title}
						fill
						sizes="100"
						priority
						className={clsx(
							"group-hover:opacity-75 duration-700 ease-in-out",
							isLoading
								? "grayscale blur-sm scale-110"
								: "grayscale-0 blur-0 scale-100"
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>
				<div className="mx-auto max-w-sm text-center sm:max-w-lg text-gray-500 pt-5">
					<p>{description}</p>
				</div>
			</Link>
		</div>
	)
}
export default Work
