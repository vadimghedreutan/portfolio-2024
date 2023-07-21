"use client"
import { useState, useEffect } from "react"
import clsx from "clsx"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
	const controls = useAnimation()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])
	return (
		<div className="relative px-5 sm:px-10 w-full big:max-w-screen-2xl mx-auto">
			<div className="mb-12">
				<div className="w-full">
					<div className="max-w-2xl flex flex-col space-y-6">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							hey, I'm vadim 👋
						</h1>
						<p className="prose mt-6 text-zinc-600 dark:text-zinc-400 pb-2">
							I'm a System Administrator, Web Developer,
							proficient in troubleshooting issues, operating
							systems, databases, servers, and networks. Skilled
							in designing visually appealing, user-friendly
							websites using multiple languages and frameworks.
						</p>
						{/* grid gallery */}
						<div className="columns-2 gap-4 sm:w-4/5">
							<div className="relative h-40 mb-4">
								<Image
									src="/profile/img_0166.webp"
									alt="kartbahn karlsruhe"
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
									src="/profile/profile_600_800.webp"
									alt="vadim ghedreutan"
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
									alt="Algarve"
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
						</div>

						<div className="flex items-center space-x-4">
							{socials.map(({ name, link, icon }, index) => (
								<motion.a
									key={index}
									href={link}
									target="_blank"
									aria-label={name}
									className="cursor-pointer"
									custom={index}
									ref={ref}
									animate={controls}
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
