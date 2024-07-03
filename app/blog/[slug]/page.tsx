import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CustomMDX } from "components/mdx"
import Balancer from "react-wrap-balancer"
import { BsArrowLeftShort } from "react-icons/bs"
import Link from "next/link"
import { getBlogPosts } from "db/blog"
import { unstable_noStore as noStore } from "next/cache"

export async function generateMetadata({
	params,
}): Promise<Metadata | undefined> {
	let post = getBlogPosts().find((post) => post.slug === params.slug)
	if (!post) {
		return
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata
	let ogImage = image
		? `https://vadimghedreutan.io/blog${image}`
		: `https://vadimghedreutan.io/blog/og?title=${title}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `https://vadimghedreutan.io/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	}
}

function formatDate(date: string) {
	noStore()
	let currentDate = new Date().getTime()
	if (!date.includes("T")) {
		date = `${date}T00:00:00`
	}
	let targetDate = new Date(date).getTime()
	let timeDifference = Math.abs(currentDate - targetDate)
	let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

	let fullDate = new Date(date).toLocaleString("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})

	if (daysAgo < 1) {
		return "Today"
	} else if (daysAgo < 7) {
		return `${fullDate} (${daysAgo}d ago)`
	} else if (daysAgo < 30) {
		const weeksAgo = Math.floor(daysAgo / 7)
		return `${fullDate} (${weeksAgo}w ago)`
	} else if (daysAgo < 365) {
		const monthsAgo = Math.floor(daysAgo / 30)
		return `${fullDate} (${monthsAgo}mo ago)`
	} else {
		const yearsAgo = Math.floor(daysAgo / 365)
		return `${fullDate} (${yearsAgo}y ago)`
	}
}

export default function Blog({ params }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<section className="big:max-w-screen-2xl mx-auto px-5 sm:px-10">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://vadimghedreutan.io${post.metadata.image}`
							: `https://vadimghedreutan.io/og?title=${post.metadata.title}`,
						url: `https://vadimghedreutan.io/blog/${post.slug}`,
						author: {
							"@type": "Person",
							name: "Vadim Ghedreutan",
						},
					}),
				}}
			/>
			<div className="flex flex-col space-y-4">
				<h1 className="text-xl sm:text-3xl font-bold pb-1">
					<Balancer>{post.metadata.title}</Balancer>
				</h1>
				<div className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:text-white text-sm rounded-lg px-2 py-1 tracking-tighter w-fit">
					{formatDate(post.metadata.publishedAt)}
				</div>
				<Link
					href="/blog"
					aria-label="Go back to articles"
					className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 
				transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
				>
					<BsArrowLeftShort className="h-6 w-6 text-zinc-800 dark:text-zinc-100 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
				</Link>
			</div>
			<article className="prose prose-quoteless prose-neutral dark:prose-invert max-w-full big:max-w-screen-2xl mx-auto py-12">
				<CustomMDX source={post.content} />
			</article>
		</section>
	)
}
