import { useEffect, useRef } from 'react';

/**
 * Reveals any `.reveal` / `.reveal-scale` descendants as the section scrolls
 * into view. Fires once per element, then stops observing it.
 *
 * Under `prefers-reduced-motion` the elements are marked visible immediately
 * and no observer is created — the CSS also force-shows them, so this is
 * belt-and-braces against content being stranded invisible.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>() {
	const ref = useRef<T>(null);

	useEffect(() => {
		const root = ref.current;
		if (!root) return;

		const elements = root.querySelectorAll('.reveal, .reveal-scale');
		if (!elements.length) return;

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced || typeof IntersectionObserver === 'undefined') {
			elements.forEach((el) => el.classList.add('is-visible'));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
		);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return ref;
}
