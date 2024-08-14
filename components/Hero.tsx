"use client"
import { useState } from "react"
import Image from "next/image"
import { FlipWords } from "../components/ui/flip-words"
import clsx from "clsx"

const Hero = () => {
	const [isLoading, setIsLoading] = useState(true)
	const words = ["Windows", "Linux", "Mac", "Network"]
	return (
		<div className="relative px-5 sm:px-2 w-full max-w-2xl mx-auto">
			<div className="mb-12">
				<div className="w-full">
					<div className="flex flex-col sm:space-y-12 space-y-8">
						<h1 className="text-4xl sm:text-4xl font-thunder_hc">
							hey, I'm vadim 👋
						</h1>

						<div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-2 sm:gap-3">
							<div className="relative h-40">
								<Image
									src="/profile/img_0166.webp"
									alt="Vadim Ghedreutan"
									fill
									sizes="100vw"
									priority
									className={clsx(
										"object-cover rounded-lg",
										isLoading ? "grayscale" : "grayscale-0"
									)}
									onLoad={() => setIsLoading(false)}
								/>
							</div>
							<div className="relative sm:row-span-2 row-span-1 ">
								<Image
									src="/profile/img_0457.webp"
									alt="Parque regional Montaña de Riaño"
									fill
									sizes="100vw"
									priority
									className={clsx(
										"object-cover rounded-lg",
										isLoading ? "grayscale" : "grayscale-0"
									)}
									onLoad={() => setIsLoading(false)}
								/>
							</div>
							<div className="relative">
								<Image
									src="/profile/img_0205.webp"
									alt="Praia da Manta Rota Algarve"
									fill
									sizes="100vw"
									priority
									className={clsx(
										"object-cover rounded-lg",
										isLoading ? "grayscale" : "grayscale-0"
									)}
									onLoad={() => setIsLoading(false)}
								/>
							</div>
							<div className="relative row-span-2">
								<Image
									src="/profile/img_0270.webp"
									alt="Snowboard Freiburg"
									fill
									sizes="100vw"
									priority
									className={clsx(
										"object-cover rounded-lg",
										isLoading ? "grayscale" : "grayscale-0"
									)}
									onLoad={() => setIsLoading(false)}
								/>
							</div>
							<div className="relative row-span-2">
								<Image
									src="/profile/img_0215.webp"
									alt="Cabanas de Tavira"
									fill
									sizes="100vw"
									priority
									className={clsx(
										"object-cover rounded-lg",
										isLoading ? "grayscale" : "grayscale-0"
									)}
									onLoad={() => setIsLoading(false)}
								/>
							</div>
							<div className="relative h-40">
								<Image
									src="/profile/img_0213.webp"
									alt="Cabanas de Tavira"
									fill
									sizes="100vw"
									priority
									className={clsx(
										"object-cover rounded-lg",
										isLoading ? "grayscale" : "grayscale-0"
									)}
									onLoad={() => setIsLoading(false)}
								/>
							</div>
						</div>

						<div className="flex justify-center items-center">
							<div className="text-lg sm:text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
								<h2>
									<span className="font-bold text-zinc-900 dark:text-white">
										IT Support Specialist:
									</span>{" "}
									Expertise in Mac, Linux, and Windows
									environments. Proficient in web design
									across multiple programming languages.
									Skilled in system upgrades, troubleshooting,
									and providing comprehensive technical
									support.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero
