import Image from "next/image"

import me from "../app/profile_art.webp"

const About = () => {
	return (
		<section className="py-12 lg:py-24 px-5 sm:px-10 bg-primary relative">
			<h1 className="font-thunder_hc text-5xl sm:text-7xl font-medium absolute -top-6 sm:-top-8 left-5 sm:left-10">
				About<span className="text-[#0F0F0F]">.</span>
			</h1>
			<div className="flex items-center flex-col lg:flex-row max-w-screen-2xl mx-auto">
				<div className="flex-1">
					<p className="text-xl lg:leading-[2.75rem] md:text-2xl lg:text-3xl">
						Hey, I'm Vadim Ghedreutan. My expertise as a system
						administrator includes maintaining the IT
						infrastructure, troubleshooting issues, proficient in a
						range of technologies, including operating systems,
						databases, servers, and networks. As a web developer
						skilled in designing, developing, and maintaining
						visually appealing and user-friendly websites using
						various programming languages and frameworks.
					</p>
				</div>
				<div className="px-8 pt-10 lg:pt-0">
					<Image
						src={me}
						alt="Vadim Ghedreutan"
						className="rounded-full"
						placeholder="blur"
						width={230}
						priority
					/>
				</div>
			</div>
		</section>
	)
}
export default About
