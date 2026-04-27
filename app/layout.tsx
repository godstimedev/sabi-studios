import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
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
	title: 'Sabi Studios | Creative Media Agency',
	description:
		'Lagos-based creative studio crafting cinematic, culture-driven stories through film, photography, and digital content.',
	generator: 'v0.app',
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
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
				{children}
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
}
