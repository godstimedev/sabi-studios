'use client';

import { useCountUp } from '@/hooks/useCountUp';

const stats = [
	{ target: 20, suffix: '+', label: 'Brands elevated' },
	{ target: 100, suffix: '+', label: 'Productions' },
	{ target: 2, suffix: '', label: 'Countries' },
	{ target: 100, suffix: '%', label: 'Culture-driven' },
];

function Stat({
	target,
	suffix,
	label,
	delay,
}: {
	target: number;
	suffix: string;
	label: string;
	delay: number;
}) {
	const { ref, value } = useCountUp(target, 1800 + delay);

	return (
		<div ref={ref as React.RefObject<HTMLDivElement>}>
			{/*
			 * The live number is aria-hidden and a static, complete label sits
			 * beside it — otherwise screen readers announce every tick.
			 */}
			{/* tabular-nums stops the width jumping as the digits tick up. */}
			<p
				aria-hidden="true"
				className="font-display text-5xl leading-none tabular-nums text-sabi-yellow md:text-6xl"
			>
				{value}
				{suffix}
			</p>
			<p className="sr-only">{`${target}${suffix} ${label}`}</p>
			<p aria-hidden="true" className="mt-4 font-sans text-eyebrow uppercase text-white/70">
				{label}
			</p>
		</div>
	);
}

export function StatsStrip() {
	return (
		<section className="grain relative overflow-hidden bg-sabi-black py-20">
			<div className="relative mx-auto max-w-7xl px-6 lg:px-16">
				<div className="grid grid-cols-2 gap-10 md:grid-cols-4">
					{stats.map((stat, i) => (
						<Stat
							key={stat.label}
							target={stat.target}
							suffix={stat.suffix}
							label={stat.label}
							delay={i * 120}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
