const items = [
	'DOCUMENTARY',
	'PHOTOGRAPHY',
	'BRANDED CONTENT',
	'CREATIVE DIRECTION',
	'VIDEO PRODUCTION',
	'VISUAL STORYTELLING',
];

const allItems = [...items, ...items];

export function MarqueeStrip() {
	return (
		<div className="py-4 bg-sabi-yellow overflow-hidden">
			<div className="flex whitespace-nowrap animate-marquee">
				{allItems.map((item, i) => (
					<span
						key={i}
						className="flex items-center gap-6 px-6 whitespace-nowrap
                     font-(family-name:--font-montserrat) font-black
                     text-sm tracking-widest text-sabi-black"
					>
						{item}
						<span className="opacity-30 text-xs">✦</span>
					</span>
				))}
			</div>
		</div>
	);
}
