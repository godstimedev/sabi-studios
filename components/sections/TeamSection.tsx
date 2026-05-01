'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const team = [
	{
		name: 'James Clement',
		title: 'Co-Founder & Creative Team Lead',
		bio: 'James Clement is a Lagos-based cinematographer and creative director focused on culturally rooted, human-centered storytelling. Drawn to documentary filmmaking by a passion for authenticity, his work explores identity, community, and lived experience across Nigeria. With a quiet, observational style, he creates intimate films that carry emotional depth and give voice to often overlooked stories.',
		image: '/images/Clement.jpeg',
	},
	{
		name: 'Dewa',
		title: 'Co-Founder & Head of Operations',
		bio: "Dewa is a wedding, portrait, and editorial photographer based in Ibadan and Lagos, Nigeria, specializing in authoritative storytelling with dramatic chiaroscuro lighting, warm golden tones, and a mission to capture royalty, class, and elegance in every frame — building a legacy as Nigeria's #1 visual artist. 📸🇳🇬",
		image: '/images/Dewa.webp',
	},
];

export function TeamSection() {
	const ref = useScrollAnimation();

	return (
		<section ref={ref} id="team" className="py-24 md:py-32 bg-sabi-black">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="scroll-animate font-(family-name:--font-montserrat) text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
					The{' '}
					<span className="bg-linear-to-r from-sabi-cyan to-sabi-yellow bg-clip-text text-transparent">
						Visionaries
					</span>
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
									className="object-cover object-top"
									sizes="(max-width: 768px) 192px, 192px"
								/>
							</div>
							<h3 className="font-(family-name:--font-montserrat) text-2xl font-bold text-white mb-2">
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
