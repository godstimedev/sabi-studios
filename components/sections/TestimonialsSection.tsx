'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/*
 * The two quotes differ ~5x in length, so they are deliberately NOT rendered as
 * equal-height cards (which is what made the old layout look broken). The short
 * one leads as a large pull-quote; the long one sits offset beneath it.
 */
export function TestimonialsSection() {
	const ref = useScrollAnimation<HTMLElement>();

	return (
		<section ref={ref} className="grain relative overflow-hidden bg-sabi-black py-28 md:py-32">
			<div className="relative mx-auto max-w-7xl px-6 lg:px-16">
				<div className="reveal mb-16 flex items-center gap-4">
					<span className="block h-0.5 w-11 bg-sabi-yellow" />
					<p className="font-sans text-eyebrow uppercase text-sabi-yellow">What they say</p>
				</div>

				<figure className="reveal max-w-4xl" style={{ transitionDelay: '80ms' }}>
					<svg viewBox="0 0 24 24" className="h-11 w-11 fill-sabi-yellow" aria-hidden="true">
						<path d="M10 7H6a3 3 0 00-3 3v7h7v-7H7a3 3 0 013-3zm11 0h-4a3 3 0 00-3 3v7h7v-7h-3a3 3 0 013-3z" />
					</svg>

					<blockquote className="mt-6 font-heading text-2xl font-semibold leading-snug tracking-tight text-sabi-white md:text-quote">
						Sabi Studios transformed our brand story into a cinematic masterpiece. Their attention to
						detail and deep understanding of cultural storytelling is unmatched. Every frame felt
						intentional and powerful.
					</blockquote>

					<figcaption className="mt-7 flex items-center gap-4">
						<span className="block h-0.5 w-8 bg-sabi-yellow" />
						<span>
							<span className="block font-heading text-body font-bold text-sabi-white">
								Chidinma
							</span>
							<span className="block font-sans text-meta font-light text-sabi-cobalt-soft">
								Head of Media, Bukka Hut Nigeria
							</span>
						</span>
					</figcaption>
				</figure>

				<figure
					className="reveal ml-auto mt-20 max-w-3xl"
					style={{ transitionDelay: '160ms' }}
				>
					<blockquote className="border-l-2 border-sabi-red pl-8 font-sans text-lg font-light leading-relaxed text-sabi-mist">
						Working on the documentary with Sabi Studios was an immersive experience. Being one with
						an indigenous edge, it had me explore aspects of Project Management I never really
						engaged with on other projects. The pre-production planning phase to the adaptive onsite
						execution was well rounded, all thanks to the fast thinking guys at Sabi Studios.
					</blockquote>

					<figcaption className="mt-6 pl-10">
						<span className="block font-heading text-body font-bold text-sabi-white">
							Eunice Obasun
						</span>
						<span className="block font-sans text-meta font-light text-sabi-cobalt-soft">
							Project Coordinator, Before the Oil documentary project
						</span>
					</figcaption>
				</figure>
			</div>
		</section>
	);
}
