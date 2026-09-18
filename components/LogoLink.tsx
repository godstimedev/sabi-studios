'use client';

import Image from 'next/image';
import logoMark from '@/public/images/SabiMark.png';

/*
 * Shared by Navbar and Footer so both logos scroll-to-top identically.
 *
 * href="#hero" is a real link — the no-JS / pre-hydration fallback — so it
 * still works if JS hasn't loaded yet: it jumps straight to the hero section.
 * Once hydrated, a plain click is intercepted, scrolled manually, and the
 * hash is stripped afterward so the address bar ends up clean (no #hero, and
 * no leftover hash from whatever section the user was on).
 *
 * Modified clicks (cmd/ctrl/shift, middle-click) are left alone so "open in a
 * new tab" etc. still behaves like a normal link.
 */
export function LogoLink({ className, priority }: { className?: string; priority?: boolean }) {
	return (
		<a
			href="#hero"
			onClick={(event) => {
				if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
				event.preventDefault();

				window.scrollTo({
					top: 0,
					behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
				});

				history.replaceState(null, '', window.location.pathname + window.location.search);
			}}
			className={className}
			aria-label="Sabi Studios — back to top"
		>
			<Image src={logoMark} alt="" aria-hidden="true" width={36} height={36} priority={priority} />
			<span className="font-heading text-lg font-bold tracking-tight text-sabi-white">
				SABI <span className="text-sabi-yellow">STUDIOS</span>
			</span>
		</a>
	);
}
