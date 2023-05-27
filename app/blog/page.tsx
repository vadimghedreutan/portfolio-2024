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
		<div>
			<div className="px-5 sm:px-10">
				<h1 className="font-thunder_hc tracking-wider text-5xl bg-primary p-2 w-fit">
					Blog<span className="text-white">.</span>
				</h1>
			</div>
			<ProviderAnimation>
				<div className="px-5 sm:px-10 py-8">
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
							<Link
								key={post.slug}
								className="flex flex-col space-y-1 mb-4 cursor-pointer"
								href={`/blog/${post.slug}`}
							>
								<div className="w-full flex flex-col">
									<p className="text-md lg:text-xl font-bold pb-1">
										{post.title}
									</p>
									<p className="text-sm text-neutral-500">
										{post.description}
									</p>
									<div className="flex items-center space-x-4">
										<p className="text-sm text-neutral-500 tracking-tighter">
											{post.publishedAt}
										</p>
										<p className="text-sm text-neutral-500 tracking-tighter">
											{post.category}
										</p>
									</div>
								</div>
							</Link>
						))}
				</div>
			</ProviderAnimation>
		</div>
	)
}
export default BlogPage
