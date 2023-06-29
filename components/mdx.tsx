import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const CustomLink = (props) => {
	const href = props.href

	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith("#")) {
		return <a {...props} />
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
	return <Image alt={props.alt} className="rounded-lg" {...props} />
}

const components = {
	Image: RoundedImage,
	a: CustomLink,
}

interface MdxProps {
	code: string
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code)

	return (
		<article className="prose prose-quoteless prose-neutral dark:prose-invert 2xl:max-w-7xl mx-auto py-12">
			<Component components={{ ...components }} />
		</article>
	)
}
