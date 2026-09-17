import { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 *
 * Returns a ref to attach to the element and the current display value.
 * Under `prefers-reduced-motion` (or without IntersectionObserver) the final
 * value is shown immediately rather than animated.
 */
export function useCountUp(target: number, durationMs = 1800) {
	const ref = useRef<HTMLElement>(null);
	const [value, setValue] = useState(0);
	const started = useRef(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let frame = 0;

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced || typeof IntersectionObserver === 'undefined') {
			// Deferred to the next frame rather than set in the effect body, so
			// the first paint isn't followed by a synchronous cascading render.
			frame = requestAnimationFrame(() => setValue(target));
			return () => cancelAnimationFrame(frame);
		}

		const run = () => {
			const start = performance.now();

			const tick = (now: number) => {
				const elapsed = now - start;
				const progress = Math.min(elapsed / durationMs, 1);
				// easeOutExpo — fast out of the gate, long settle. Reads as
				// deliberate rather than mechanical.
				const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

				setValue(Math.round(eased * target));

				if (progress < 1) frame = requestAnimationFrame(tick);
			};

			frame = requestAnimationFrame(tick);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting || started.current) return;
					started.current = true;
					observer.unobserve(entry.target);
					run();
				});
			},
			{ threshold: 0.4 },
		);

		observer.observe(el);

		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	}, [target, durationMs]);

	return { ref, value };
}
