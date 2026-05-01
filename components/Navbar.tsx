'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#work' },
	{ label: 'Team', href: '#team' },
	{ label: 'Contact', href: '#contact' },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-sabi-black/90 backdrop-blur-md border-b border-sabi-navy/60 py-3'
					: 'bg-transparent py-5'
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3 shrink-0">
					<div className="relative w-10 h-10 rounded-lg overflow-hidden">
						<Image src="/images/Logo.png" alt="Sabi Studios" fill className="object-cover" sizes="40px" />
					</div>
					<span className="font-(family-name:--font-montserrat) font-bold text-white text-lg tracking-wide">
						SABI <span className="text-sabi-yellow">STUDIOS</span>
					</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="text-sabi-gray text-sm font-medium tracking-wide
                       transition-colors duration-200 hover:text-white"
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Desktop CTA */}
				<Link
					href="#contact"
					className="hidden md:inline-flex items-center px-5 py-2.5 bg-sabi-yellow text-sabi-black
                   font-semibold text-sm rounded-lg transition-all duration-300
                   hover:scale-105 hover:shadow-lg hover:shadow-sabi-yellow/25"
				>
					{"Let's Talk"}
				</Link>

				{/* Mobile hamburger */}
				<button
					onClick={() => setMenuOpen((o) => !o)}
					className="md:hidden p-2 text-white"
					aria-label="Toggle menu"
				>
					{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="md:hidden bg-sabi-black/95 backdrop-blur-md border-t border-sabi-navy/60 px-6 py-6 flex flex-col gap-5">
					{navLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className="text-white font-medium text-lg"
						>
							{link.label}
						</Link>
					))}
					<Link
						href="#contact"
						onClick={() => setMenuOpen(false)}
						className="mt-2 inline-flex justify-center items-center px-5 py-3 bg-sabi-yellow
                     text-sabi-black font-semibold rounded-lg"
					>
						{"Let's Talk"}
					</Link>
				</div>
			)}
		</header>
	);
}
