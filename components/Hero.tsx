"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import me from "../app/profile_art.webp"

const Hero = () => {
	return (
		<div className="relative px-5 sm:px-10 w-full big:max-w-screen-2xl mx-auto">
			<div className="mb-12">
				<div className="w-full">
					<div className="max-w-2xl flex flex-col space-y-6">
						<Image
							src={me}
							alt="Vadim Ghedreutan"
							className="rounded-full"
							placeholder="blur"
							width={120}
							priority
						/>

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

						<div className="flex items-center space-x-4">
							<motion.a
								animate={{
									scale: [0, 1, 1.1, 1],
								}}
								transition={{
									duration: 1,
									ease: "easeInOut",
									stiffness: 50,
									delay: 0.3,
								}}
								href="https://github.com/vadimghedreutan"
								target="_blank"
								aria-label="Github"
							>
								<FaGithub
									className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer 
              transition-all duration-500 ease-out hover:scale-125"
								/>
							</motion.a>
							<motion.a
								animate={{
									scale: [0, 1, 1.1, 1],
								}}
								transition={{
									duration: 1,
									ease: "easeInOut",
									delay: 0.2,
									stiffness: 50,
								}}
								href="https://twitter.com/GhedreutanVadim"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter
									className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer
              transition-all duration-500 ease-out hover:scale-125"
								/>
							</motion.a>
							<motion.a
								animate={{
									scale: [0, 1, 1.1, 1],
								}}
								transition={{
									duration: 1,
									ease: "easeInOut",
									delay: 0.2,
									stiffness: 50,
								}}
								href="mailto:dev.vadimghedreutan@gmail.com"
								target="_blank"
								aria-label="Email"
							>
								<MdEmail
									className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer
              transition-all duration-500 ease-out hover:scale-125"
								/>
							</motion.a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero
