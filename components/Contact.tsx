import { MdMarkEmailRead } from "react-icons/md"

const Contact = () => {
	return (
		<section className="px-5 max-w-7xl mx-auto">
			<div className="flex items-center justify-center py-12">
				<div className="flex flex-col items-center justify-center space-y-4">
					<a
						href="mailto:vadim.ghedreutan@gmail.com"
						rel="noopener noreferrer"
						target="_blank"
						className="bg-primary flex h-16 w-16 items-center justify-center rounded-full"
					>
						<MdMarkEmailRead className="h-6 w-6 cursor-pointer text-white" />
					</a>

					<div className="flex items-center">
						<span className="w-4 h-4 bg-primary rounded-full mr-2"></span>{" "}
						Vadim Ghedreutan
					</div>
					<div className="text-sm">
						@2023 - Design and development by me.
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contact
