"use client"
import { motion } from "framer-motion"

const ProviderAnimation = ({ children }: any) => {
	return (
		<motion.div
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
		>
			{children}
		</motion.div>
	)
}
export default ProviderAnimation
