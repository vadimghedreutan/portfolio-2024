export default function loading() {
	return (
		<div className="max-w-7xl mx-auto pt-32 pb-12">
			<div className=" grid grid-cols-fluid_second">
				{[...Array(15)].map((i, index) => (
					<div
						role="status"
						className="max-w-lg p-3 rounded animate-pulse"
						key={index}
					>
						<div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
						<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						<span className="sr-only">Loading...</span>
					</div>
				))}
			</div>
		</div>
	)
}
