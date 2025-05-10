import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'imgs.crazygames.com' //! mock
			}
		]
	}
}

export default nextConfig
