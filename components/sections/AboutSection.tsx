'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AboutSection() {
	const ref = useScrollAnimation<HTMLElement>();

	return (
		<section id="about" ref={ref} className="bg-sabi-white py-28 md:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-16">
				<div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
					<div className="lg:col-span-5">
						<div className="reveal flex items-center gap-4">
							<span className="block h-0.5 w-11 bg-sabi-cobalt" />
							<p className="font-sans text-eyebrow uppercase text-sabi-cobalt">Who we sabi</p>
						</div>

						<h2
							className="reveal mt-7 font-heading text-headline text-sabi-black"
							style={{ transitionDelay: '80ms' }}
						>
							We sabi
							<br />
							the angles.
						</h2>

						<p
							className="reveal mt-7 max-w-sm font-sans text-base font-light leading-relaxed text-sabi-ink"
							style={{ transitionDelay: '160ms' }}
						>
							Sabi Studios blends Nigerian culture with modern creative storytelling — confident,
							street-smart and built for brands that want to be seen.
						</p>
					</div>

					<div className="lg:col-span-7">
						<p
							className="reveal font-sans text-xl font-normal leading-relaxed text-sabi-black md:text-statement"
							style={{ transitionDelay: '120ms' }}
						>
							Sabi Studios is a creative studio providing videography, photography, graphic design
							and content creation for brands looking to communicate their story through strong
							visual content.
						</p>

						<div className="mt-12 grid gap-8 sm:grid-cols-2">
							<div
								className="reveal border-t-2 border-sabi-cobalt pt-6"
								style={{ transitionDelay: '200ms' }}
							>
								<p className="font-sans text-eyebrow uppercase text-sabi-cobalt">Mission</p>
								<p className="mt-3 font-sans text-body font-light leading-relaxed text-sabi-ink">
									To help brands grow through powerful visuals and content that connects with
									audiences.
								</p>
							</div>

							<div
								className="reveal border-t-2 border-sabi-red pt-6"
								style={{ transitionDelay: '280ms' }}
							>
								<p className="font-sans text-eyebrow uppercase text-sabi-red">Vision</p>
								<p className="mt-3 font-sans text-body font-light leading-relaxed text-sabi-ink">
									To become one of the most trusted creative studios for modern African brands.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
