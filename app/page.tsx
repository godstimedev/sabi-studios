'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Film,
	Camera,
	Video,
	Sparkles,
	Palette,
	Share2,
	Quote,
	// Youtube,
	Send,
} from 'lucide-react';

// Custom TikTok icon since Lucide doesn't have one
function TikTokIcon({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
			<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
		</svg>
	);
}

const Instagram = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
	</svg>
);

// Intersection Observer hook for scroll animations
function useScrollAnimation() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
		);

		const elements = ref.current?.querySelectorAll('.scroll-animate');
		elements?.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return ref;
}

// Hero Section
function HeroSection() {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			{/* Background with gradient overlay for video placeholder */}
			<div className="absolute inset-0 bg-gradient-to-br from-sabi-navy/80 via-sabi-black to-sabi-black" />
			<div className="absolute inset-0 bg-gradient-to-t from-sabi-black via-transparent to-transparent" />

			{/* Animated background elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sabi-yellow/10 rounded-full blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sabi-cyan/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: '1s' }}
				/>
			</div>

			<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
				<h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
					We craft stories that <span className="text-sabi-yellow">connect</span>, move, and endure.
				</h1>

				<p className="mt-6 text-lg md:text-xl text-sabi-gray max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
					Sabi Studios is a Lagos-based creative studio crafting cinematic, culture-driven stories
					through film, photography, and digital content.
				</p>

				<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
					<Link
						href="#work"
						className="group px-8 py-4 bg-sabi-yellow text-sabi-black font-semibold rounded-lg 
                     transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sabi-yellow/25"
					>
						View Our Work
					</Link>
					<Link
						href="#contact"
						className="px-8 py-4 border-2 border-sabi-cyan text-sabi-cyan font-semibold rounded-lg
                     transition-all duration-300 hover:bg-sabi-cyan hover:text-sabi-black"
					>
						{"Let's Talk"}
					</Link>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
				<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
				</div>
			</div>
		</section>
	);
}

// About Section
function AboutSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} className="py-24 md:py-32 bg-sabi-black">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="scroll-animate font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
					About <span className="text-sabi-yellow">Sabi Studios</span>
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

// Services Data
const services = [
	{
		icon: Film,
		title: 'Documentary & Storytelling',
		description:
			'Authentic narratives that capture the essence of human experience and cultural heritage.',
		iconColor: 'text-sabi-cyan',
	},
	{
		icon: Sparkles,
		title: 'Branded Content & Commercials',
		description: 'Strategic visual content that elevates brands and connects with audiences.',
		iconColor: 'text-sabi-yellow',
	},
	{
		icon: Camera,
		title: 'Photography',
		description: 'Striking imagery that tells stories and captures moments with cinematic precision.',
		iconColor: 'text-sabi-cyan',
	},
	{
		icon: Share2,
		title: 'Content for Digital & Social',
		description: 'Engaging content optimized for digital platforms and social media engagement.',
		iconColor: 'text-sabi-yellow',
	},
	{
		icon: Video,
		title: 'Video Production',
		description: 'End-to-end production services delivering high-quality visual content.',
		iconColor: 'text-sabi-cyan',
	},
	{
		icon: Palette,
		title: 'Creative Direction',
		description: 'Strategic vision and artistic guidance that shapes compelling visual narratives.',
		iconColor: 'text-sabi-yellow',
	},
];

// Services Section
function ServicesSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} id="work" className="py-24 md:py-32 bg-sabi-black">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="scroll-animate font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
						Our <span className="text-sabi-cyan">Services</span>
					</h2>
					<p className="scroll-animate text-sabi-gray text-lg max-w-2xl mx-auto">
						Comprehensive creative solutions tailored to bring your vision to life.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<div
							key={service.title}
							className="scroll-animate group p-8 bg-sabi-navy/50 border border-sabi-navy rounded-xl
                       transition-all duration-300 hover:-translate-y-2 hover:border-sabi-cyan/50
                       hover:shadow-lg hover:shadow-sabi-cyan/10"
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<service.icon
								className={`w-10 h-10 ${service.iconColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
							/>
							<h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white mb-3">
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

// Testimonials Data
const testimonials = [
	{
		quote:
			'Sabi Studios transformed our brand story into a cinematic masterpiece. Their attention to detail and deep understanding of cultural storytelling is unmatched. Every frame felt intentional and powerful.',
		author: 'Adaeze Okonkwo',
		role: 'Creative Director, Lumina Brands',
	},
	{
		quote:
			"Working with Sabi was an incredible experience. They don't just create content—they craft visual narratives that resonate on a human level. Our documentary exceeded every expectation.",
		author: 'Emeka Nwosu',
		role: 'Founder, Heritage Films',
	},
];

// Testimonials Section
function TestimonialsSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-sabi-black to-sabi-navy/20">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="scroll-animate font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
					What They <span className="text-sabi-yellow">Say</span>
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
									<p className="font-[family-name:var(--font-montserrat)] font-semibold text-white">
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

// Team Data
const team = [
	{
		name: 'James Clement',
		title: 'Founder & Creative Director',
		bio: "A visionary filmmaker with over a decade of experience crafting stories that bridge cultures. Seun's work has been featured in international film festivals across three continents.",
		image: '/team-founder.jpg',
	},
	{
		name: 'Chiamaka Eze',
		title: 'Co-Founder & Head of Production',
		bio: 'An award-winning producer known for her meticulous attention to detail and ability to bring complex visions to life. Chiamaka oversees all production operations at Sabi Studios.',
		image: '/team-cofounder.jpg',
	},
];

// Team Section
function TeamSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} className="py-24 md:py-32 bg-sabi-black">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="scroll-animate font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
					The <span className="text-sabi-cyan">Visionaries</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{team.map((member, index) => (
						<div
							key={member.name}
							className="scroll-animate text-center"
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							<div
								className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden
                            border-2 border-sabi-navy transition-all duration-300 
                            hover:border-sabi-yellow hover:scale-105"
							>
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 192px, 192px"
								/>
								{/* Placeholder overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-sabi-navy to-sabi-black flex items-center justify-center">
									<span className="text-4xl text-sabi-cyan/50 font-bold">
										{member.name
											.split(' ')
											.map((n) => n[0])
											.join('')}
									</span>
								</div>
							</div>
							<h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white mb-2">
								{member.name}
							</h3>
							<p className="text-sabi-yellow font-medium mb-4">{member.title}</p>
							<p className="text-sabi-gray leading-relaxed">{member.bio}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// Contact/Footer Section
function ContactSection() {
	const ref = useScrollAnimation();

	return (
		<section
			ref={ref}
			id="contact"
			className="py-24 md:py-32 bg-gradient-to-t from-sabi-navy/30 to-sabi-black"
		>
			<div className="max-w-4xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="scroll-animate font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
						Ready to tell your <span className="text-sabi-yellow">story</span>?
					</h2>
					<p className="scroll-animate text-sabi-gray text-lg">
						{"Let's create something extraordinary together."}
					</p>
				</div>

				<form className="scroll-animate max-w-xl mx-auto space-y-6">
					<div>
						<input
							type="text"
							placeholder="Your Name"
							className="w-full px-6 py-4 bg-sabi-navy/50 border border-sabi-navy rounded-lg
                       text-white placeholder:text-sabi-gray/60 focus:outline-none 
                       focus:border-sabi-cyan transition-colors duration-300"
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full px-6 py-4 bg-sabi-navy/50 border border-sabi-navy rounded-lg
                       text-white placeholder:text-sabi-gray/60 focus:outline-none 
                       focus:border-sabi-cyan transition-colors duration-300"
						/>
					</div>
					<div>
						<textarea
							rows={5}
							placeholder="Your Message"
							className="w-full px-6 py-4 bg-sabi-navy/50 border border-sabi-navy rounded-lg
                       text-white placeholder:text-sabi-gray/60 focus:outline-none 
                       focus:border-sabi-cyan transition-colors duration-300 resize-none"
						/>
					</div>
					<button
						type="submit"
						className="w-full px-8 py-4 bg-sabi-yellow text-sabi-black font-semibold rounded-lg
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-lg 
                     hover:shadow-sabi-yellow/25 flex items-center justify-center gap-2"
					>
						<Send className="w-5 h-5" />
						Send Message
					</button>
				</form>

				{/* Social Links */}
				<div className="scroll-animate mt-16 flex items-center justify-center gap-6">
					<Link
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 border border-sabi-navy rounded-full text-sabi-gray
                     transition-all duration-300 hover:border-sabi-cyan hover:text-sabi-cyan
                     hover:scale-110"
					>
						<Instagram className="w-6 h-6" />
					</Link>
					<Link
						href="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 border border-sabi-navy rounded-full text-sabi-gray
                     transition-all duration-300 hover:border-sabi-yellow hover:text-sabi-yellow
                     hover:scale-110"
					>
						{/* <Youtube className="w-6 h-6" /> */}
					</Link>
					<Link
						href="https://tiktok.com"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 border border-sabi-navy rounded-full text-sabi-gray
                     transition-all duration-300 hover:border-sabi-cyan hover:text-sabi-cyan
                     hover:scale-110"
					>
						<TikTokIcon className="w-6 h-6" />
					</Link>
				</div>

				{/* Footer */}
				<div className="scroll-animate mt-16 pt-8 border-t border-sabi-navy/50 text-center">
					<p className="text-sabi-gray text-sm">
						© {new Date().getFullYear()} Sabi Studios. All rights reserved.
					</p>
				</div>
			</div>
		</section>
	);
}

// Main Page Component
export default function SabiStudiosPage() {
	return (
		<main className="bg-sabi-black min-h-screen">
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<TestimonialsSection />
			<TeamSection />
			<ContactSection />
		</main>
	);
}
