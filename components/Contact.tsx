"use client"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { MdMarkEmailUnread } from "react-icons/md"

const title_variants = {
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			duration: 2,
			stiffness: 50,
		},
	},
	hidden: { opacity: 0, scale: 0.9 },
}

const social_links = [
	{
		icon: (
			<FaGithub
				className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125"
			/>
		),
		url: "https://github.com/vadimghedreutan",
	},
	{
		icon: (
			<FaTwitter
				className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125"
			/>
		),
		url: "https://twitter.com/GhedreutanVadim",
	},
	{
		icon: (
			<MdMarkEmailUnread
				className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125"
			/>
		),
		url: "mailto:vadim.ghedreutan@gmail.com",
	},
]

const Contact = () => {
	const controls = useAnimation()
	const [ref, inView] = useInView({
		triggerOnce: true,
	})
	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])
	return (
		<section className="bg-[#111010]">
			<div className="flex items-center justify-center h-[50vh]">
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={title_variants}
				>
					<Link
						href="/projects"
						className="font-thunder_hc text-5xl cursor-pointer text-white"
					>
						All Projects <span className="text-primary">.</span>
					</Link>
				</motion.div>
			</div>
			<div className="flex items-center sm:justify-between flex-col sm:flex-row space-y-4 py-6 text-white px-3 sm:px-10">
				<div className="flex items-center space-x-4">
					<div className="flex items-center space-x-4">
						{social_links &&
							social_links.map((link, index) => {
								return (
									<motion.a
										key={index}
										href={link.url}
										target="_blank"
										className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer
										transition-all duration-500 ease-out hover:scale-125"
									>
										{link.icon}
									</motion.a>
								)
							})}
					</div>
					<p className="text-3xl">⏎</p>
				</div>
				<p className="text-sm">@2023 - Design and development by me.</p>
			</div>
		</section>
	)
}
export default Contact
