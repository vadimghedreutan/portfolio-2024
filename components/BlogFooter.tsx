import { getBlogPosts } from "db/blog"
import { HoverEffect } from "./ui/card-hover-effect"

const BlogFooter = () => {
	let allBlogs = getBlogPosts()
	return (
		<section className="sm:py-12 py-8 w-full relative">
			<div className="px-5 sm:px-2 max-w-2xl mx-auto">
				<h1 className="font-thunder_hc text-4xl font-medium pb-3">
					Articles
					<span className="text-primary"> .</span>
				</h1>
				<HoverEffect items={allBlogs} />
			</div>
		</section>
	)
}

export default BlogFooter
