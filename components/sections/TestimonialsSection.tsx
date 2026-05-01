'use client';

import { Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
	{
		quote:
			'Sabi Studios transformed our brand story into a cinematic masterpiece. Their attention to detail and deep understanding of cultural storytelling is unmatched. Every frame felt intentional and powerful.',
		author: 'Chidinma ',
		role: 'Head of Media, Bukka Hut Nigeria',
	},
	{
		quote:
			'Working on the documentary with Sabi Studios was an immersive experience. Being one with an indigenous edge, it had me explore aspects of Project Management I never really engaged with on other projects. The pre-production planning phase to the adaptive onsite execution was well rounded, all thanks to the fast thinking guys at Sabi Studios.',
		author: 'Eunice Obasun',
		role: 'Project cordinator, Before the oil documentary project',
	},
];

export function TestimonialsSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} className="py-24 md:py-32 bg-linear-to-b from-sabi-black to-sabi-navy/20">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="scroll-animate font-(family-name:--font-montserrat) text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
					What They{' '}
					<span className="bg-linear-to-r from-sabi-yellow to-sabi-cyan bg-clip-text text-transparent">
						Say
					</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={testimonial.author}
							className="scroll-animate relative p-8 bg-sabi-black border border-sabi-navy rounded-xl
                       transition-all duration-300 hover:border-sabi-cyan/30"
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							<Quote className="absolute top-6 left-6 w-12 h-12 text-sabi-cyan/30" />
							<div className="relative z-10 pt-8">
								<p className="text-sabi-gray text-lg leading-relaxed mb-6 italic">
									{`"${testimonial.quote}"`}
								</p>
								<div>
									<p className="font-(family-name:--font-montserrat) font-semibold text-white">
										{testimonial.author}
									</p>
									<p className="text-sabi-cyan text-sm">{testimonial.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
