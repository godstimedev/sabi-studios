'use client';

import { Camera, Film, Palette, Share2, Sparkles, Video } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
	{
		icon: Film,
		title: 'Documentary & Storytelling',
		description: 'Authentic narratives that capture human experience and cultural heritage.',
	},
	{
		icon: Sparkles,
		title: 'Branded Content & Commercials',
		description: 'Strategic visual content that elevates brands and connects with audiences.',
	},
	{
		icon: Camera,
		title: 'Photography',
		description: 'Striking imagery that tells stories with cinematic precision.',
	},
	{
		icon: Share2,
		title: 'Content for Digital & Social',
		description: 'Engaging content built for the platforms your audience already lives on.',
	},
	{
		icon: Video,
		title: 'Video Production',
		description: 'End-to-end production delivering high-quality visual content.',
	},
	{
		icon: Palette,
		title: 'Creative Direction',
		description: 'Strategic vision and artistic guidance that shapes the whole narrative.',
	},
];

export function ServicesSection() {
	const ref = useScrollAnimation<HTMLElement>();

	return (
		<section
			id="services"
			ref={ref}
			className="grain relative overflow-hidden bg-sabi-cobalt py-28 md:py-32"
		>
			<div className="relative mx-auto max-w-7xl px-6 lg:px-16">
				<div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
					<div>
						<div className="reveal flex items-center gap-4">
							<span className="block h-0.5 w-11 bg-sabi-yellow" />
							<p className="font-sans text-eyebrow uppercase text-sabi-yellow">What we do</p>
						</div>
						<h2
							className="reveal mt-6 font-heading text-headline text-sabi-white"
							style={{ transitionDelay: '80ms' }}
						>
							Content that works.
						</h2>
					</div>
					<p
						className="reveal max-w-xs font-sans text-base font-light leading-relaxed text-sabi-cobalt-soft"
						style={{ transitionDelay: '160ms' }}
					>
						Six ways we turn a brand&rsquo;s story into visual content people actually stop for.
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, i) => (
						<div
							key={service.title}
							className="reveal group relative overflow-hidden rounded-sm border border-sabi-cobalt-soft/20 bg-sabi-cobalt-deep p-9 transition-all duration-500 ease-sabi hover:-translate-y-1.5 hover:border-sabi-yellow/55"
							style={{ transitionDelay: `${i * 90}ms` }}
						>
							<p className="pointer-events-none absolute right-5 top-4 font-display text-6xl leading-none text-sabi-cobalt-soft/15 transition-colors duration-500 group-hover:text-sabi-yellow/30">
								{String(i + 1).padStart(2, '0')}
							</p>

							<service.icon
								className="h-8 w-8 text-sabi-yellow transition-transform duration-500 ease-sabi group-hover:scale-110"
								strokeWidth={1.7}
							/>

							<h3 className="mt-7 font-heading text-title text-sabi-white">{service.title}</h3>
							<p className="mt-3 font-sans text-sm font-light leading-relaxed text-sabi-cobalt-soft">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
