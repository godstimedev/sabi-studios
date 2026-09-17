import Image from 'next/image';
import Link from 'next/link';
import logoMark from '@/public/images/SabiMark.png';

const columns = [
	[
		{ label: 'About', href: '#about' },
		{ label: 'Services', href: '#services' },
		{ label: 'Work', href: '#work' },
	],
	[
		{ label: 'Process', href: '#process' },
		{ label: 'Team', href: '#team' },
		{ label: 'Contact', href: '#contact' },
	],
];

const hashtags = ['#SabiStudios', '#WeSabiVisuals', '#ContentWeyWorks', '#NaijaCreative'];

/*
 * Server component on purpose: the copyright year is resolved during render
 * rather than in the browser, which is what caused the hydration-mismatch risk
 * when this markup lived inside the client-side ContactSection.
 *
 * Deliberately un-animated, like the navbar.
 */
export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="grain relative overflow-hidden bg-sabi-black py-16">
			<div className="relative mx-auto max-w-7xl px-6 lg:px-16">
				<div className="flex flex-wrap justify-between gap-12">
					<div>
						<div className="flex items-center gap-3">
							<Image src={logoMark} alt="" aria-hidden="true" width={36} height={36} />
							<span className="font-heading text-lg font-bold tracking-tight text-sabi-white">
								SABI <span className="text-sabi-yellow">STUDIOS</span>
							</span>
						</div>
						<p className="mt-5 max-w-64 font-sans text-sm font-light text-sabi-gray">
							We Sabi Visuals. You Sabi Win.
						</p>
					</div>

					<nav className="flex gap-12">
						{columns.map((column, i) => (
							<div key={i} className="flex flex-col gap-3">
								{column.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										className="font-sans text-sm text-sabi-mist hover:text-sabi-yellow"
									>
										{link.label}
									</Link>
								))}
							</div>
						))}
					</nav>

					<div>
						<p className="font-sans text-eyebrow uppercase text-sabi-yellow">Find us</p>
						<ul className="mt-4 space-y-1.5">
							{hashtags.map((tag) => (
								<li key={tag} className="font-sans text-sm font-light text-sabi-gray">
									{tag}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
					<p className="font-sans text-meta font-light text-sabi-gray">
						&copy; {year} Sabi Studios. All rights reserved.
					</p>
					<p className="font-sans text-meta font-light text-sabi-gray">Lagos, Nigeria</p>
				</div>
			</div>
		</footer>
	);
}
