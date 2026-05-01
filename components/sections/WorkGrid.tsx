'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
	{
		category: 'Documentary',
		title: 'Before the Oil Documentry',
		sub: 'Ekiti · 2026',
		image: '/images/Oil.jpeg',
		link: 'https://drive.google.com/file/d/1KyyC7PXvZD9aQmlFLWQkVn3plUatYcEU/preview?usp=drive_link',
		gradient: 'linear-gradient(135deg, #0b1e3a 0%, #1a3a5c 60%, #2ec4c7 100%)',
		span: 'md:col-span-2',
		height: 'h-80',
	},
	{
		category: 'Event Highlight',
		title: 'Fanti Festival',
		sub: 'Lagos · 2026',
		image: '/images/Fanti.jpeg',
		link: 'https://drive.google.com/file/d/1nv_bKmUaM72Ma44Wy9qsl6OPY0MxGigd/preview?usp=drive_link',
		gradient: 'linear-gradient(135deg, #ffd43b 0%, #ff9500 100%)',
		span: 'md:col-span-1',
		height: 'h-80',
	},
	{
		category: 'Creative Direction',
		title: 'Bukka Hut Suya and Grills Ad campaign	',
		sub: 'Lagos · 2025',
		image: '/images/Bukka.jpeg',
		link: 'https://drive.google.com/file/d/10mff3lPUwujSftYglTB9Spvx188ch43N/preview?usp=drive_link',
		gradient: 'linear-gradient(135deg, #ffd43b 0%, #2ec4c7 100%)',
		span: 'md:col-span-1',
		height: 'h-64',
	},
	{
		category: 'Social Content',
		title: 'GUO Transport',
		sub: 'Lagos · 2025',
		image: '/images/GUO.jpeg',
		link: 'https://drive.google.com/file/d/1kNMtNdlnWMej-aCmFbTJZd9GRTgrapsU/preview?usp=drive_link',
		gradient: 'linear-gradient(135deg, #1a0b3a 0%, #0b1e3a 50%, #2ec4c7 100%)',
		span: 'md:col-span-1',
		height: 'h-64',
	},
	{
		category: 'Documentary',
		title: 'Exploring Ghana',
		sub: 'Accra · 2025',
		image: '/images/Ghana.jpeg',
		link: 'https://drive.google.com/file/d/1KHG-DRnbFJbiceplepJbaaG2zfg6vjF3/preview?usp=drive_link',
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
						<a
							key={project.title}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className={`scroll-animate group relative block ${project.span} ${project.height} rounded-2xl overflow-hidden cursor-pointer`}
							style={{
								background: project.gradient,
								transitionDelay: `${i * 80}ms`,
							}}
						>
							{/* If you add an image, it will show here. The gradient acts as a fallback */}
							{project.image && (
								<div className="absolute inset-0">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-overlay opacity-60 group-hover:opacity-100 group-hover:mix-blend-normal"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-sabi-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300" />
								</div>
							)}

							{/* Subtle noise texture */}
							<div
								className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
								style={{
									backgroundImage:
										"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
								}}
							/>

							<div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none z-10">
								<span className="self-start px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white/90 text-xs font-medium tracking-wider uppercase border border-white/10">
									{project.category}
								</span>
								<div>
									<p className="font-(family-name:--font-montserrat) text-2xl font-bold text-white shadow-sm">
										{project.title}
									</p>
									<p className="text-white/80 text-sm mt-1">{project.sub}</p>
								</div>
							</div>

							{/* Hover overlay with Play Icon */}
							<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm z-20">
								<div className="w-16 h-16 rounded-full bg-sabi-yellow/90 flex items-center justify-center pl-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_30px_rgba(255,212,59,0.5)]">
									<svg className="w-8 h-8 text-sabi-black" fill="currentColor" viewBox="0 0 24 24">
										<path d="M8 5v14l11-7z" />
									</svg>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
