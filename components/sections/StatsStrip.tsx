'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
	{ number: '50+', label: 'Brands Elevated' },
	{ number: '200+', label: 'Productions' },
	{ number: '3', label: 'Continents' },
	{ number: '100%', label: 'Culture-Driven' },
];

export function StatsStrip() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} className="py-16 border-y border-sabi-navy/50 bg-sabi-navy/10">
			<div className="max-w-5xl mx-auto px-6">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
					{stats.map((stat, i) => (
						<div
							key={stat.label}
							className="scroll-animate"
							style={{ transitionDelay: `${i * 100}ms` }}
						>
							<p className="font-(family-name:--font-montserrat) text-5xl md:text-6xl font-black bg-linear-to-r from-sabi-yellow to-sabi-cyan bg-clip-text text-transparent">
								{stat.number}
							</p>
							<p className="text-sabi-gray text-xs mt-3 uppercase tracking-widest">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
