/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
	experimental: {
		appDir: true,
	},
	headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		]
	},
}

const ContentSecurityPolicy = `
  default-src 'self' vercel.live;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  media-src 'none';
  connect-src *;
`

const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: "Content-Security-Policy",
		value: ContentSecurityPolicy.replace(/\n/g, ""),
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	{
		key: "Referrer-Policy",
		value: "origin-when-cross-origin",
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	// This header indicates whether the site should be allowed to be displayed within an iframe.
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	// This can prevent XSS exploits for websites that allow users to upload and share files.
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	// allowing browsers to proactively perform domain name resolution on external links, images, CSS, JavaScript, and more.
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	//  informs browsers it should only be accessed using HTTPS, instead of using HTTP.
	{
		key: "Strict-Transport-Security",
		value: "max-age=31536000; includeSubDomains; preload",
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},
]

module.exports = withContentlayer(nextConfig)
