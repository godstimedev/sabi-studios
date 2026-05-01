import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sabistudiosng.com'),
	title: {
		default: 'Sabi Studios | Lagos-Based Creative Media Agency',
		template: '%s | Sabi Studios',
	},
	description:
		'Sabi Studios is a Lagos-based creative studio crafting cinematic, culture-driven stories through film, photography, and digital content. We create stories that connect, move, and endure.',
	keywords: [
		'Sabi Studios',
		'Creative Agency Lagos',
		'Cinematographer Nigeria',
		'Video Production Lagos',
		'Creative Director Nigeria',
		'Documentary Filmmaking',
		'Editorial Photography',
		'Brand Storytelling',
		'Visual Arts Nigeria',
		'African Storytellers',
	],
	authors: [{ name: 'Sabi Studios' }, { name: 'James Clement' }, { name: 'Dewa' }],
	creator: 'Sabi Studios',
	publisher: 'Sabi Studios',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: 'Sabi Studios | Lagos-Based Creative Media Agency',
		description: 'Cinematic, culture-driven stories through film, photography, and digital content.',
		url: 'https://sabistudiosng.com',
		siteName: 'Sabi Studios',
		images: [
			{
				url: '/images/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Sabi Studios - Creative Media Agency',
			},
		],
		locale: 'en_NG',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sabi Studios | Creative Media Agency',
		description: 'Cinematic, culture-driven stories through film, photography, and digital content.',
		images: ['/images/og-image.png'],
		creator: '@sabistudiosng',
		site: '@sabistudiosng',
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${montserrat.variable} ${poppins.variable} bg-black`}>
			<body className="font-sans antialiased">
				<Navbar />
				{children}
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
}
