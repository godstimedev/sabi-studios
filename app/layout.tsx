import type { Metadata, Viewport } from 'next';
import { Archivo, Montserrat, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/Navbar';
import { StructuredData } from '@/components/StructuredData';
import './globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['300', '400', '500', '600'],
	display: 'swap',
});

/*
 * Display face — stands in for Agrandir Wide (commercial licence, not yet
 * supplied). Swap to next/font/local when the .woff2 arrives.
 *
 * `axes` requires `weight` to be ABSENT: next/font throws otherwise. The width
 * axis loads as its full 62..125 range and is pinned at use-site through
 * --font-display--font-variation-settings in globals.css.
 */
const archivo = Archivo({
	subsets: ['latin'],
	variable: '--font-archivo',
	axes: ['wdth'],
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sabistudiosng.com'),
	/*
	 * Copy is taken from the brand guideline: the registered tagline, the
	 * "What We Do" line, and the mission statement — not invented marketing.
	 */
	title: {
		default: 'Sabi Studios | We Sabi Visuals. You Sabi Win.',
		template: '%s | Sabi Studios',
	},
	description:
		'Sabi Studios is a Lagos-based creative studio providing videography, photography, graphic design and content creation for brands looking to communicate their story through strong visual content.',
	applicationName: 'Sabi Studios',
	category: 'Creative Services',
	keywords: [
		'Sabi Studios',
		'We Sabi Visuals',
		'Creative Studio Lagos',
		'Videography Lagos',
		'Photography Lagos',
		'Graphic Design Nigeria',
		'Content Creation Nigeria',
		'Branded Content Nigeria',
		'Documentary Filmmaking Nigeria',
		'Creative Direction Lagos',
		'Video Production Lagos',
		'African Brand Storytelling',
	],
	authors: [{ name: 'Sabi Studios' }, { name: 'James Clement' }, { name: 'Dewa' }],
	creator: 'Sabi Studios',
	publisher: 'Sabi Studios',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	/*
	 * `images` is deliberately omitted here so the generated card from
	 * app/opengraph-image.tsx is used. Setting it would override the file
	 * convention and pin us back to the stale /images/og-image.png.
	 */
	openGraph: {
		title: 'Sabi Studios | We Sabi Visuals. You Sabi Win.',
		description:
			'Videography, photography, graphic design and content creation for brands looking to communicate their story through strong visual content.',
		url: '/',
		siteName: 'Sabi Studios',
		locale: 'en_NG',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sabi Studios | We Sabi Visuals. You Sabi Win.',
		description:
			'Videography, photography, graphic design and content creation for brands with a story to tell.',
		creator: '@sabistudiosng',
		site: '@sabistudiosng',
	},
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

/* themeColor belongs on `viewport` — it is deprecated on `metadata`. */
export const viewport: Viewport = {
	themeColor: '#000000',
	colorScheme: 'dark',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		/*
		 * data-scroll-behavior="smooth" restores Next's navigation scroll
		 * override. Without it, Next 16 lets `scroll-behavior: smooth` apply to
		 * route changes, which slow-scrolls the whole page on every navigation.
		 */
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${montserrat.variable} ${poppins.variable} ${archivo.variable}`}
		>
			<body className="bg-sabi-black">
				<StructuredData />
				<noscript>
					{/* Never strand revealed content invisible when JS is unavailable. */}
					<style>{`.reveal,.reveal-scale{opacity:1!important;transform:none!important}`}</style>
				</noscript>
				<Navbar />
				{children}
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
}
