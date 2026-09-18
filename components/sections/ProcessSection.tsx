'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
	{
		title: 'Listen',
		description:
			'We start with your business, your audience and the thing you actually need people to understand.',
	},
	{
		title: 'Direct',
		description: 'Concept, treatment, shot list and look. Nothing rolls until the story is clear on paper.',
	},
	{
		title: 'Produce',
		description: 'Cinematic capture with a crew that moves fast and adapts on location.',
	},
	{
		title: 'Deliver',
		description: 'Cut, graded and versioned for every platform you need it on.',
	},
];

/*
 * Pumpkin Orange is the one brand field that takes BLACK type. White reads at
 * 3.18:1 and yellow at 2.25:1 against #F16514 — both fail. Do not "brighten"
 * this section by switching the type to white.
 */
export function ProcessSection() {
	const ref = useScrollAnimation<HTMLElement>();

	return (
		<section
			id="process"
			ref={ref}
			className="grain-dark relative overflow-hidden bg-sabi-orange py-28 md:py-32"
		>
			<div className="relative mx-auto max-w-7xl px-6 lg:px-16">
				<div className="reveal flex items-center gap-4">
					<span className="block h-0.5 w-11 bg-sabi-black" />
					<p className="font-sans text-eyebrow uppercase text-sabi-black">How we work</p>
				</div>

				<h2
					className="reveal mt-6 max-w-3xl font-heading text-headline text-sabi-black"
					style={{ transitionDelay: '80ms' }}
				>
					Every project answers one question.
				</h2>

				<p
					className="reveal mt-6 max-w-xl font-sans text-lead font-light text-black/80"
					style={{ transitionDelay: '160ms' }}
				>
					From the first conversation to the final delivery, the work is judged against whether it
					helps you win.
				</p>

				<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, i) => (
						<div
							key={step.title}
							className="reveal border-t-2 border-sabi-black pt-8"
							style={{ transitionDelay: `${i * 110}ms` }}
						>
							<p className="font-display text-5xl leading-none text-black/25">
								{String(i + 1).padStart(2, '0')}
							</p>
							<h3 className="mt-4 font-heading text-title text-sabi-black">{step.title}</h3>
							<p className="mt-2.5 font-sans text-sm font-light leading-relaxed text-black/80">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
