import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		/*
		 * Next 16 allowlists qualities and defaults to [75]. Anything not listed
		 * is coerced down on the component side and 400s on a direct
		 * /_next/image request, so the work grid's higher quality is declared.
		 */
		qualities: [75, 90],
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
