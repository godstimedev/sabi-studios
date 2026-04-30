'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AboutSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} id="about" className="py-24 md:py-32 bg-sabi-black">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="scroll-animate font-(family-name:--font-montserrat) text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
					About{' '}
					<span className="bg-linear-to-r from-sabi-yellow to-sabi-cyan bg-clip-text text-transparent">
						Sabi Studios
					</span>
				</h2>
				<p className="scroll-animate text-lg md:text-xl text-sabi-gray leading-relaxed">
					We create work that feels real, intentional, and deeply human. Every service we offer is built
					around strong storytelling, visual excellence, and cultural relevance. Our approach combines
					technical mastery with authentic narratives that resonate across cultures and generations.
				</p>
			</div>
		</section>
	);
}
