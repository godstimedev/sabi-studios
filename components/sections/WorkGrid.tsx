'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
	{
		category: 'Documentary',
		title: 'Heritage Stories',
		sub: 'Lagos · 2024',
		gradient: 'linear-gradient(135deg, #0b1e3a 0%, #1a3a5c 60%, #2ec4c7 100%)',
		span: 'md:col-span-2',
		height: 'h-80',
	},
	{
		category: 'Photography',
		title: 'Light & Form',
		sub: 'Editorial · 2024',
		gradient: 'linear-gradient(135deg, #ffd43b 0%, #ff9500 100%)',
		span: 'md:col-span-1',
		height: 'h-80',
	},
	{
		category: 'Branded Content',
		title: 'Lumina Rebrand',
		sub: 'Commercial · 2023',
		gradient: 'linear-gradient(135deg, #ffd43b 0%, #2ec4c7 100%)',
		span: 'md:col-span-1',
		height: 'h-64',
	},
	{
		category: 'Social Content',
		title: 'Gen-Z Voices',
		sub: 'Campaign · 2024',
		gradient: 'linear-gradient(135deg, #1a0b3a 0%, #0b1e3a 50%, #2ec4c7 100%)',
		span: 'md:col-span-1',
		height: 'h-64',
	},
	{
		category: 'Creative Direction',
		title: 'Artisan Stories',
		sub: 'Direction · 2024',
		gradient: 'linear-gradient(135deg, #000000 0%, #0b1e3a 60%, #ffd43b 100%)',
		span: 'md:col-span-1',
		height: 'h-64',
	},
];

export function WorkGrid() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} className="py-24 md:py-32 bg-sabi-black">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-end justify-between mb-12">
					<h2 className="scroll-animate font-(family-name:--font-montserrat) text-3xl md:text-4xl lg:text-5xl font-bold text-white">
						Selected{' '}
						<span className="bg-linear-to-r from-sabi-yellow to-sabi-cyan bg-clip-text text-transparent">
							Work
						</span>
					</h2>
					<p className="scroll-animate text-sabi-gray text-sm hidden md:block">
						A glimpse into what we make.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{projects.map((project, i) => (
						<div
							key={project.title}
							className={`scroll-animate group relative ${project.span} ${project.height} rounded-2xl overflow-hidden cursor-pointer`}
							style={{
								background: project.gradient,
								transitionDelay: `${i * 80}ms`,
							}}
						>
							{/* Subtle noise texture */}
							<div
								className="absolute inset-0 opacity-10 mix-blend-overlay"
								style={{
									backgroundImage:
										"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
								}}
							/>

							<div className="absolute inset-0 flex flex-col justify-between p-6">
								<span className="self-start px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium tracking-wider uppercase">
									{project.category}
								</span>
								<div>
									<p className="font-(family-name:--font-montserrat) text-2xl font-bold text-white">
										{project.title}
									</p>
									<p className="text-white/60 text-sm mt-1">{project.sub}</p>
								</div>
							</div>

							{/* Hover overlay */}
							<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<span className="font-(family-name:--font-montserrat) font-semibold text-sabi-yellow text-sm tracking-widest uppercase">
									View Project →
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
