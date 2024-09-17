"use client"
import React from "react"
import { cn } from "../../utils/cn"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		metadata: {
			title: string
			publishedAt: string
			summary: string
		}
		slug: string
	}[]
	className?: string
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div className={cn("grid grid-cols-1 lg:grid-cols-2", className)}>
			{items
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) >
						new Date(b.metadata.publishedAt)
					) {
						return -1
					}
					return 1
				})
				.slice(0, 4)
				.map((item, idx) => (
					<Link
						href={`/devlabs/${item.slug}`}
						key={item.slug}
						className="relative p-2 group block h-full w-full"
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
									layoutId="hoverBackground"
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: {
											duration: 0.15,
											delay: 0.2,
										},
									}}
								/>
							)}
						</AnimatePresence>
						<Card>
							<CardTitle>
								{item.metadata.title}
								<CardTime>{item.metadata.publishedAt}</CardTime>
							</CardTitle>
							<CardDescription>
								{item.metadata.summary}
							</CardDescription>
						</Card>
					</Link>
				))}
		</div>
	)
}

export const Card = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full p-3 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
				className
			)}
		>
			<div className="relative z-50">
				<div className="p-3">{children}</div>
			</div>
		</div>
	)
}
export const CardTitle = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<h4
			className={cn(
				"text-zinc-100 text-lg font-semibold tracking-tight",
				className
			)}
		>
			{children}
		</h4>
	)
}

export const CardTime = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<time className="relative z-10 order-first mt-2 flex items-center text-sm text-zinc-500 dark:text-zinc-600 pl-3.5">
			{children}
			<span
				className="absolute inset-y-0 left-0 flex items-center"
				aria-hidden="true"
			>
				<span className="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
			</span>
		</time>
	)
}

export const CardDescription = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<p
			className={cn(
				"mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	)
}
