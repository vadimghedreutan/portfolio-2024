import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { allBlogs } from "contentlayer/generated"
import { Mdx } from "components/mdx"
import { BsArrowLeftShort } from "react-icons/bs"
import Link from "next/link"

export async function generateStaticParams() {
	return allBlogs.map((post) => ({
		slug: post.slug,
	}))
}

export async function generateMetadata({
	params,
}): Promise<Metadata | undefined> {
	const post = allBlogs.find((post) => post.slug === params.slug)
	if (!post) {
		return
	}

	const {
		title,
		publishedAt: publishedTime,
		description: description,
		slug,
	} = post
	const ogImage = `https://vadimghedreutan.io/og?title=${title}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `https://vadimghedreutan.io/blog/${slug}`,
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

export default async function Blog({ params }) {
	const post = allBlogs.find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<section>
			<div className="flex flex-col space-y-4 text-sm px-5 sm:px-10">
				<h1 className="text-xl sm:text-3xl font-bold pb-1">
					{post.title}
				</h1>
				<div className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:text-white rounded-lg px-2 py-1 tracking-tighter w-fit">
					{post.publishedAt}
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
			<Mdx code={post.body.code} />
		</section>
	)
}
