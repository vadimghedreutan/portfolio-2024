"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaTwitter } from "react-icons/fa"

import me from "../app/profile_art.webp"

const Hero = () => {
	return (
		<div className="relative sm:min-h-[40vh] min-h-[69vh] max-w-7xl mx-auto px-5 flex sm:items-center sm:justify-center">
			<div className="flex flex-col justify-center gap-6">
				<div className="md:max-w-3xl">
					<h1 className="font-thunder_hc text-7xl md:text-8xl 3xs:text-5xl sm:text-center mr-8 sm:mr-0">
						building beautiful user interfaces.
					</h1>
				</div>
				<div className="flex sm:items-center sm:justify-center py-2">
					<div>
						<Image
							src={me}
							alt="Vadim Ghedreutan"
							className="rounded-full"
							placeholder="blur"
							width={160}
							priority
						/>
					</div>
				</div>
			</div>
			<div className="absolute top-0 right-4">
				<div className="flex flex-col items-center space-y-4">
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
					>
						<FaGithub
							className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
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
					>
						<FaTwitter
							className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer
              transition-all duration-500 ease-out hover:scale-125"
						/>
					</motion.a>
				</div>
			</div>
		</div>
	)
}
export default Hero
