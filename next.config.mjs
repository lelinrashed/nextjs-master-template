/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: false, // To handle compression in the reverse proxy (nginx)
	images: {
		contentDispositionType: "attachment",
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [],
		minimumCacheTTL: 60,
	},
	logging: {
		fetches: {
			fullUrl: process.env.NODE_ENV !== "production",
		},
	},
	output: undefined, // Set to "standalone" to deploy using Docker container
	poweredByHeader: process.env.NODE_ENV !== "production",
};

export default nextConfig;
