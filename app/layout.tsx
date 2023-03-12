import "./globals.css"
import clsx from "clsx"
import localFont from "next/font/local"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: {
		default: "Vadim Ghedreutan",
		template: "%s | Vadim Ghedreutan",
	},
	description: "Developer, System Administrator, and creator.",
	openGraph: {
		title: "Vadim Ghedreutan",
		description: "Developer, System Administrator, and creator.",
		url: "https://vadimghedreutan.io",
		siteName: "Vadim Ghedreutan",
		images: [
			{
				url: "https://vadimghedreutan.io/og.jpg",
				width: 1920,
				height: 1080,
			},
		],
		locale: "de-DE",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Vadim Ghedreutan",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	verification: {
		google: "5cP42JTz0Y4vOZy_JAj7frAPm0KxsugsuzJ93GJQg5o",
	},
}

const thunder_hc = localFont({
	src: "../public/fonts/Thunder-BoldHC.otf",
	weight: "700",
	variable: "--font-thunder_hc",
	display: "swap",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={clsx(
				"text-clr_dark bg-clr_theme_white dark:text-gray-50 dark:bg-clr_theme_dark",
				thunder_hc.variable
			)}
		>
			<body>{children}</body>
		</html>
	)
}
