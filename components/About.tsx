"use client"
import { motion } from "framer-motion"

const About = () => {
	return (
		<section className="px-5 max-w-7xl mx-auto lg:pb-8">
			<h1 className="font-thunder_hc tracking-wider text-4xl font-medium">
				<motion.span
					className="-mb-5 -mr-11 pb-5 pr-12 inline-block"
					animate={{
						scale: [0, 1, 1.1, 1],
						rotate: [0, 0, 50, 50, 0],
					}}
					transition={{
						duration: 2,
						ease: "easeInOut",
						times: [0, 0.2, 0.5, 0.8, 1],
						repeatDelay: 4,
					}}
				>
					👋
				</motion.span>{" "}
				About<span className="text-primary">.</span>
			</h1>
			<p className="mt-4 max-w-3xl lg:text-lg">
				Hey, I'm Vadim Ghedreutan. My expertise as a system
				administrator includes maintaining the IT infrastructure,
				troubleshooting issues, proficient in a range of technologies,
				including operating systems, databases, servers, and networks.
				As a web developer skilled in designing, developing, and
				maintaining visually appealing and user-friendly websites using
				various programming languages and frameworks.
			</p>
		</section>
	)
}
export default About
