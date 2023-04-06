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
		<div className="border rounded-lg dark:border-[hsla(0,0%,100%,.15)] border-[#E9E9E9]">
			<Link href={link} target="_blank" className="mx-auto flex flex-col">
				<div className="flex items-center justify-between space-x-2">
					<div className="p-3">
						<p className="sm:text-lg sm:font-semibold">{title}</p>
						<p className="text-neutral-500 dark:text-neutral-400 hidden lg:inline-flex">
							{description}
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
							isLoading ? "grayscale" : "grayscale-0"
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>
			</Link>
		</div>
	)
}
export default Work
