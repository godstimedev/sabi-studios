const items = [
	'Documentary',
	'Photography',
	'Branded Content',
	'Creative Direction',
	'Video Production',
	'Visual Storytelling',
];

function Star() {
	return (
		<svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-sabi-black" aria-hidden="true">
			<path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
		</svg>
	);
}

function Track() {
	return (
		// aria-hidden on the duplicate half keeps screen readers from reading the
		// list twice; the first half stays in the accessibility tree.
		<div className="flex w-max shrink-0 items-center gap-8 pr-8">
			{items.map((item) => (
				<div key={item} className="flex items-center gap-8">
					<span className="whitespace-nowrap font-display text-2xl uppercase tracking-wide text-sabi-black md:text-3xl">
						{item}
					</span>
					<Star />
				</div>
			))}
		</div>
	);
}

export function MarqueeStrip() {
	return (
		<section className="grain-dark relative overflow-hidden border-y-3 border-sabi-black bg-sabi-yellow py-5">
			{/* relative keeps the track above the section's grain ::after overlay */}
			<div className="relative flex w-max animate-marquee">
				<Track />
				<div aria-hidden="true" className="flex w-max shrink-0">
					<Track />
				</div>
			</div>
		</section>
	);
}
