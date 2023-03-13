"use client"
import { motion } from "framer-motion"
import { FaGithub, FaTwitter } from "react-icons/fa"

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
					<div className="relative w-44 h-44 sm:w-48 sm:h-48">
						<motion.img
							initial={{
								opacity: 0,
								y: 15,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							exit={{
								opacity: 0,
								y: 15,
							}}
							transition={{
								delay: 0.05,
							}}
							className="rounded-full object-contain"
							src="/profile_art.webp"
							alt="Vadim Ghedreutan"
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
