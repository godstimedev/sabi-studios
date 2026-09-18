'use client';

import Image, { type StaticImageData } from 'next/image';
import clementImg from '@/public/images/Clement.jpeg';
import dewaImg from '@/public/images/Dewa.webp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const team: {
	name: string;
	role: string;
	bio: string;
	image: StaticImageData;
}[] = [
	{
		name: 'James Clement',
		role: 'Co-Founder & Creative Team Lead',
		bio: 'Leads concept and direction across the studio’s film and documentary work, shaping how each story is told before a single frame is shot.',
		image: clementImg,
	},
	{
		name: 'Dewa',
		role: 'Co-Founder & Head of Operations',
		bio: 'Runs production and delivery, keeping crews, schedules and clients moving so the creative work lands on time and on brief.',
		image: dewaImg,
	},
];

export function TeamSection() {
	const ref = useScrollAnimation<HTMLElement>();

	return (
		<section id="team" ref={ref} className="bg-sabi-white py-28 md:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-16">
				<div className="reveal flex items-center gap-4">
					<span className="block h-0.5 w-11 bg-sabi-cobalt" />
					<p className="font-sans text-eyebrow uppercase text-sabi-cobalt">The visionaries</p>
				</div>

				<h2
					className="reveal mt-6 mb-16 font-heading text-headline text-sabi-black"
					style={{ transitionDelay: '80ms' }}
				>
					Who dey behind
					<br />
					the lens.
				</h2>

				<div className="grid gap-12 md:grid-cols-2 md:gap-14">
					{team.map((member, i) => (
						<div key={member.name} className="reveal group" style={{ transitionDelay: `${i * 140}ms` }}>
							<div className="relative h-120 w-full overflow-hidden rounded-xs bg-sabi-paper">
								{/*
								 * grayscale-at-rest is a hover reveal, and group-hover only
								 * fires under @media (hover: hover) — Tailwind adds that
								 * guard automatically. Touch devices can never trigger it, so
								 * the desaturated look is gated to pointer-fine (mouse/
								 * trackpad) devices and touch just gets the photo in colour.
								 */}
								<Image
									src={member.image}
									alt={member.name}
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
									placeholder="blur"
									className="object-cover object-top transition-visual duration-700 ease-sabi pointer-fine:grayscale pointer-fine:contrast-125 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
								/>
							</div>

							<h3 className="mt-7 font-heading text-2xl font-bold tracking-tight text-sabi-black">
								{member.name}
							</h3>
							<p className="mt-2 font-sans text-eyebrow uppercase text-sabi-cobalt">{member.role}</p>
							<p className="mt-4 font-sans text-body font-light leading-relaxed text-sabi-ink">
								{member.bio}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
