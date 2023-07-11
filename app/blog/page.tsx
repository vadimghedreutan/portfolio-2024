import type { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import ProviderAnimation from "../ProviderAnimation"
export const metadata: Metadata = {
	title: "Blog",
	description: "Read my posts on web development, sysadmin, and more.",
}

const BlogPage = () => {
	return (
		<div className="px-5 sm:px-10 big:max-w-screen-2xl mx-auto">
			<h1 className="font-thunder_hc tracking-wider text-4xl bg-primary p-2 w-fit rounded-lg text-white">
				Blog<span className="text-white">.</span>
			</h1>

			<ProviderAnimation>
				<article className="flex flex-col gap-8 mt-12">
					{allBlogs
						.sort((a, b) => {
							if (
								new Date(a.publishedAt) >
								new Date(b.publishedAt)
							) {
								return -1
							}
							return 1
						})
						.map((post) => (
							<div
								key={post.slug}
								className="group relative flex flex-col items-start cursor-pointer"
							>
								<h2 className="text-base font-semibold tracking-tight">
									<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
									<Link href={`/blog/${post.slug}`}>
										<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
										<span className="relative z-10">
											{post.title}
										</span>
									</Link>
								</h2>
								<time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-600 pl-3.5">
									{post.publishedAt}
									<span
										className="absolute inset-y-0 left-0 flex items-center"
										aria-hidden="true"
									>
										<span className="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
									</span>
								</time>
								<p className="relative z-10 mt-1 text-base text-zinc-600 dark:text-zinc-400">
									{post.description}
								</p>
								<div
									aria-hidden="true"
									className="relative z-10 mt-3 flex items-center text-sm font-medium text-teal-500"
								>
									Read article
								</div>
							</div>
						))}
				</article>
			</ProviderAnimation>
		</div>
	)
}
export default BlogPage
