"use client"
import React from "react"
import { motion } from "framer-motion"
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

const Footer = () => {
	return (
		<section className="py-12 px-5 sm:px-10 big:max-w-screen-2xl mx-auto">
			<div className="flex flex-col items-center">
				<div className="flex items-center space-x-4 mb-4">
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
				<p className="text-sm">- Design and development by me.</p>
				<p className="text-sm">@2024</p>
			</div>
		</section>
	)
}
export default Footer
