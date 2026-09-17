'use client';

import Image, { type StaticImageData } from 'next/image';
import bukkaImg from '@/public/images/Bukka.jpeg';
import ghanaImg from '@/public/images/Ghana.jpeg';
import guoImg from '@/public/images/GUO.jpeg';
import fantiImg from '@/public/images/Fanti.jpeg';
import oilImg from '@/public/images/Oil.jpeg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Project = {
	category: string;
	title: string;
	sub: string;
	image: StaticImageData;
	link: string;
	/* Duotone at rest — one of the four brand hues, never an invented colour. */
	tint: string;
	span: string;
	sizes: string;
};

const projects: Project[] = [
	{
		category: 'Documentary',
		title: 'Before the Oil Documentary',
		sub: 'Ekiti · 2026',
		image: oilImg,
		link: 'https://drive.google.com/file/d/1KyyC7PXvZD9aQmlFLWQkVn3plUatYcEU/preview?usp=drive_link',
		tint: 'bg-sabi-cobalt',
		span: 'md:col-span-2',
		sizes: '(min-width: 1024px) 66vw, 100vw',
	},
	{
		category: 'Event',
		title: 'Fanti Festival',
		sub: 'Lagos · 2026',
		image: fantiImg,
		link: 'https://drive.google.com/file/d/1nv_bKmUaM72Ma44Wy9qsl6OPY0MxGigd/preview?usp=drive_link',
		tint: 'bg-sabi-red',
		span: 'md:col-span-1',
		sizes: '(min-width: 1024px) 33vw, 100vw',
	},
	{
		category: 'Creative Direction',
		title: 'Bukka Hut Suya & Grills',
		sub: 'Lagos · 2025',
		image: bukkaImg,
		link: 'https://drive.google.com/file/d/10mff3lPUwujSftYglTB9Spvx188ch43N/preview?usp=drive_link',
		tint: 'bg-sabi-orange',
		span: 'md:col-span-1',
		sizes: '(min-width: 1024px) 33vw, 100vw',
	},
	{
		category: 'Social',
		title: 'GUO Transport',
		sub: 'Lagos · 2025',
		image: guoImg,
		link: 'https://drive.google.com/file/d/1kNMtNdlnWMej-aCmFbTJZd9GRTgrapsU/preview?usp=drive_link',
		tint: 'bg-sabi-cobalt',
		span: 'md:col-span-1',
		sizes: '(min-width: 1024px) 33vw, 100vw',
	},
	{
		category: 'Documentary',
		title: 'Exploring Ghana',
		sub: 'Accra · 2025',
		image: ghanaImg,
		link: 'https://drive.google.com/file/d/1KHG-DRnbFJbiceplepJbaaG2zfg6vjF3/preview?usp=drive_link',
		tint: 'bg-sabi-orange',
		span: 'md:col-span-2',
		sizes: '(min-width: 1024px) 66vw, 100vw',
	},
];

export function WorkGrid() {
	const ref = useScrollAnimation<HTMLElement>();

	return (
		<section id="work" ref={ref} className="bg-sabi-white py-28 md:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-16">
				<div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
					<div>
						<div className="reveal flex items-center gap-4">
							<span className="block h-0.5 w-11 bg-sabi-orange" />
							{/* Orange at text size fails contrast on white, so the label
							    uses a darkened shade of the same hue. */}
							<p className="font-sans text-eyebrow uppercase text-sabi-orange-deep">
								Selected work
							</p>
						</div>
						<h2
							className="reveal mt-6 font-heading text-headline text-sabi-black"
							style={{ transitionDelay: '80ms' }}
						>
							Clean visuals.
							<br />
							Real impact.
						</h2>
					</div>
					<p
						className="reveal max-w-68 font-sans text-base font-light leading-relaxed text-sabi-ink"
						style={{ transitionDelay: '160ms' }}
					>
						Hover any frame to bring it into full colour.
					</p>
				</div>

				<div className="grid auto-rows-tile grid-cols-1 gap-4 md:grid-cols-3">
					{projects.map((project, i) => (
						<a
							key={project.title}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className={`reveal-scale group relative block overflow-hidden rounded-xs bg-sabi-black ${project.span}`}
							style={{ transitionDelay: `${i * 80}ms` }}
						>
							<Image
								src={project.image}
								alt={project.title}
								fill
								sizes={project.sizes}
								placeholder="blur"
								className="object-cover grayscale contrast-125 brightness-90 transition-visual duration-700 ease-sabi group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
							/>

							{/* mix-blend-color over a desaturated image = a true duotone. */}
							<span
								className={`pointer-events-none absolute inset-0 opacity-90 mix-blend-color transition-opacity duration-700 ease-sabi group-hover:opacity-0 ${project.tint}`}
							/>
							<span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-transparent to-transparent" />

							<span className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/40 px-3.5 py-1.5 font-sans text-micro font-semibold uppercase tracking-label text-sabi-white">
								{project.category}
							</span>

							<span className="pointer-events-none absolute inset-x-6 bottom-5">
								<span className="block font-heading text-xl font-bold text-sabi-white md:text-2xl">
									{project.title}
								</span>
								<span className="mt-1 block font-sans text-meta font-light text-white/80">
									{project.sub}
								</span>
							</span>

							<span className="pointer-events-none absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-sabi-yellow opacity-0 transition duration-500 ease-sabi group-hover:scale-100 group-hover:opacity-100">
								<svg viewBox="0 0 24 24" className="h-7 w-7 fill-sabi-black" aria-hidden="true">
									<path d="M8 5v14l11-7z" />
								</svg>
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
