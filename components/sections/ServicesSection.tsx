'use client';

import { Film, Camera, Video, Sparkles, Palette, Share2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
	{
		icon: Film,
		title: 'Documentary & Storytelling',
		description:
			'Authentic narratives that capture the essence of human experience and cultural heritage.',
		iconColor: 'text-sabi-cyan',
		borderColor: 'border-t-sabi-cyan',
	},
	{
		icon: Sparkles,
		title: 'Branded Content & Commercials',
		description: 'Strategic visual content that elevates brands and connects with audiences.',
		iconColor: 'text-sabi-yellow',
		borderColor: 'border-t-sabi-yellow',
	},
	{
		icon: Camera,
		title: 'Photography',
		description: 'Striking imagery that tells stories and captures moments with cinematic precision.',
		iconColor: 'text-sabi-cyan',
		borderColor: 'border-t-sabi-cyan',
	},
	{
		icon: Share2,
		title: 'Content for Digital & Social',
		description: 'Engaging content optimized for digital platforms and social media engagement.',
		iconColor: 'text-sabi-yellow',
		borderColor: 'border-t-sabi-yellow',
	},
	{
		icon: Video,
		title: 'Video Production',
		description: 'End-to-end production services delivering high-quality visual content.',
		iconColor: 'text-sabi-cyan',
		borderColor: 'border-t-sabi-cyan',
	},
	{
		icon: Palette,
		title: 'Creative Direction',
		description: 'Strategic vision and artistic guidance that shapes compelling visual narratives.',
		iconColor: 'text-sabi-yellow',
		borderColor: 'border-t-sabi-yellow',
	},
];

export function ServicesSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} id="work" className="py-24 md:py-32 bg-sabi-black">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="scroll-animate font-(family-name:--font-montserrat) text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
						Our{' '}
						<span className="bg-linear-to-r from-sabi-yellow to-sabi-cyan bg-clip-text text-transparent">
							Services
						</span>
					</h2>
					<p className="scroll-animate text-sabi-gray text-lg max-w-2xl mx-auto">
						Comprehensive creative solutions tailored to bring your vision to life.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<div
							key={service.title}
							className={`scroll-animate group p-8 bg-sabi-navy/50 border border-sabi-navy border-t-2 ${service.borderColor} rounded-xl
                       transition-all duration-300 hover:-translate-y-2 hover:border-sabi-cyan/50
                       hover:shadow-lg hover:shadow-sabi-cyan/10`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<service.icon
								className={`w-10 h-10 ${service.iconColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
							/>
							<h3 className="font-(family-name:--font-montserrat) text-xl font-bold text-white mb-3">
								{service.title}
							</h3>
							<p className="text-sabi-gray leading-relaxed">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
