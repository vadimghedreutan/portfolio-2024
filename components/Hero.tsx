"use client"
import { useState } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const socials = [
	{
		name: "Github",
		link: "https://github.com/vadimghedreutan",
		icon: (
			<FaGithub className="h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out hover:scale-125" />
		),
	},
	{
		name: "Twitter",
		link: "https://twitter.com/GhedreutanVadim",
		icon: (
			<FaTwitter className="h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out hover:scale-125" />
		),
	},
	{
		name: "Email",
		link: "mailto:dev.vadimghedreutan@gmail.com",
		icon: (
			<MdEmail className="h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ease-out hover:scale-125" />
		),
	},
]

const variants = {
	visible: (index: number): any => ({
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1,
			stiffness: 50,
			delay: index * 0.1,
		},
	}),
	hidden: { opacity: 0 },
}

const Hero = () => {
	const [isLoading, setLoading] = useState(true)
	return (
		<div className="relative px-5 sm:px-2 w-full max-w-2xl mx-auto">
			<div className="mb-12">
				<div className="w-full">
					<div className="flex flex-col sm:space-y-12 space-y-8">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-mabry_pro_medium">
							hey, I'm vadim 👋
						</h1>

						<div className="columns-3 sm:gap-4 gap-2">
							<div className="relative h-40 mb-4">
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
									onLoadingComplete={() => setLoading(false)}
								/>
							</div>
							<div className="relative h-80 sm:mb-0 ">
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
									onLoadingComplete={() => setLoading(false)}
								/>
							</div>
							<div className="relative h-80 mb-4 ">
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
									onLoadingComplete={() => setLoading(false)}
								/>
							</div>
							<div className="relative h-40 sm:mb-0">
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
									onLoadingComplete={() => setLoading(false)}
								/>
							</div>
							<div className="relative h-40 mb-4">
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
									onLoadingComplete={() => setLoading(false)}
								/>
							</div>
							<div className="relative h-80 sm:mb-0 ">
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
									onLoadingComplete={() => setLoading(false)}
								/>
							</div>
						</div>

						<p className="pb-2 font-mabry_pro_medium sm:text-xl text-lg">
							I'm a System Administrator proficient in
							troubleshooting issues, operating systems,
							databases, servers, and networks. Skilled in
							designing visually appealing, user-friendly websites
							using multiple languages and frameworks.
						</p>

						<div className="flex items-center space-x-4">
							{socials.map(({ name, link, icon }, index) => (
								<motion.a
									key={index}
									href={link}
									target="_blank"
									aria-label={name}
									className="cursor-pointer"
									custom={index}
									animate="visible"
									initial="hidden"
									variants={variants}
								>
									{icon}
								</motion.a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero
