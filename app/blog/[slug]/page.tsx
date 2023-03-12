import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { allBlogs } from "contentlayer/generated"
import Header from "components/Header"
import { Mdx } from "components/mdx"

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
			<Header />

			<div className="flex flex-col space-y-2 max-w-7xl mx-auto text-sm px-5">
				<h1 className="text-xl sm:text-3xl font-bold pb-1">
					{post.title}
				</h1>
				<div className="bg-neutral-700 dark:bg-neutral-800 text-white rounded-md px-2 py-1 tracking-tighter w-fit">
					{post.publishedAt}
				</div>
			</div>
			<Mdx code={post.body.code} />
		</section>
	)
}
