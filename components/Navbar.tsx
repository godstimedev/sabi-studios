'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LogoLink } from '@/components/LogoLink';

const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Work', href: '#work' },
	{ label: 'Process', href: '#process' },
	{ label: 'Team', href: '#team' },
];

/*
 * Deliberately un-animated: no scroll listener, no transitions, no reveal.
 * The bar is a constant dark glass surface so the logomark and links stay
 * legible over the hero video without needing a state change.
 */
export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-sabi-black/85 backdrop-blur-lg">
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
				<LogoLink className="flex shrink-0 items-center gap-3" priority />

				<nav className="hidden items-center gap-9 lg:flex">
					{navLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="font-sans text-sm text-sabi-mist hover:text-sabi-yellow"
						>
							{link.label}
						</Link>
					))}
					<Link
						href="#contact"
						className="rounded-xs bg-sabi-yellow px-6 py-3 font-heading text-sm font-bold text-sabi-black"
					>
						Let&rsquo;s Talk
					</Link>
				</nav>

				<button
					type="button"
					onClick={() => setMenuOpen((open) => !open)}
					className="-mr-2 p-2 text-sabi-yellow lg:hidden"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
				>
					{menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{menuOpen && (
				<div className="flex flex-col gap-5 border-t border-white/10 bg-sabi-black px-6 py-7 lg:hidden">
					{navLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className="font-heading text-lg font-bold text-sabi-white"
						>
							{link.label}
						</Link>
					))}
					<Link
						href="#contact"
						onClick={() => setMenuOpen(false)}
						className="mt-1 inline-flex justify-center rounded-xs bg-sabi-yellow px-6 py-3.5 font-heading text-sm font-bold text-sabi-black"
					>
						Let&rsquo;s Talk
					</Link>
				</div>
			)}
		</header>
	);
}
