import type { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import Header from "components/Header"
import ProviderAnimation from "../ProviderAnimation"
export const metadata: Metadata = {
	title: "Blog",
	description: "Read my posts on web development, sysadmin, and more.",
}

const BlogPage = () => {
	return (
		<div>
			<Header />

			<ProviderAnimation>
				<div className="px-5 max-w-7xl mx-auto">
					<h1 className="font-thunder_hc tracking-wider text-3xl pb-8">
						Blog<span className="text-primary">.</span>
					</h1>

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
									<p className="text-md lg:text-xl font-medium pb-1">
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
