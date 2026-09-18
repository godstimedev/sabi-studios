'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		/*
		 * Respect reduced motion: hold the first frame instead of looping
		 * cinematic footage behind the headline.
		 */
		const onReady = () => setReady(true);
		video.addEventListener('canplay', onReady);

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		/*
		 * State changes are deferred to the next frame rather than run in the
		 * effect body, which would cascade a second render before first paint.
		 * The rAF also covers the fast-cache case where 'canplay' already fired
		 * before this effect attached its listener.
		 */
		const frame = requestAnimationFrame(() => {
			if (reduced) {
				video.pause();
				setReady(true);
				return;
			}

			if (video.readyState >= 2) setReady(true);

			// Some mobile browsers reject the autoplay promise. The gradients and
			// headline stand on their own, so just surface whatever frame exists.
			void video.play().catch(() => setReady(true));
		});

		return () => {
			video.removeEventListener('canplay', onReady);
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<section
			id="hero"
			className="grain hero-frame lg:hero-frame-locked relative flex items-center overflow-hidden bg-sabi-black"
		>
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				playsInline
				preload="metadata"
				aria-hidden="true"
				tabIndex={-1}
				className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
					ready ? 'opacity-50' : 'opacity-0'
				}`}
			>
				<source src="/videos/HeroBg.mp4" type="video/mp4" />
			</video>

			{/*
			 * Grade the footage toward the brand: black floor, yellow key, cobalt
			 * fill. The yellow is kept low and tight — it is a tint on the
			 * footage, not a wash over it.
			 */}
			<div className="absolute inset-0 bg-linear-to-b from-sabi-black/75 via-sabi-black/35 to-sabi-black" />
			<div className="hero-key-light absolute inset-0" />
			<div className="hero-fill-light absolute inset-0" />

			{/* pb leaves room for the scroll cue pinned at the bottom. */}
			<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-20 lg:px-16">
				<div className="rise flex items-center gap-4">
					<span className="block h-0.5 w-11 bg-sabi-yellow" />
					<p className="font-sans text-eyebrow uppercase text-sabi-yellow">
						Lagos, Nigeria &middot; Creative Studio
					</p>
				</div>

				<h1
					className="rise mt-8 max-w-4xl font-heading text-display text-sabi-white"
					style={{ animationDelay: '120ms' }}
				>
					We Sabi Visuals.
					<br />
					You Sabi <span className="text-sabi-yellow">Win.</span>
				</h1>

				<p
					className="rise mt-8 max-w-xl font-sans text-lead font-light text-sabi-mist"
					style={{ animationDelay: '260ms' }}
				>
					Videography, photography, graphic design and content creation for brands looking to
					communicate their story through strong visual content.
				</p>

				<div className="rise mt-11 flex flex-wrap items-center gap-4" style={{ animationDelay: '400ms' }}>
					<Link
						href="#work"
						className="group inline-flex items-center gap-2.5 rounded-xs border-2 border-transparent bg-sabi-yellow px-7 py-4 font-heading text-sm font-bold text-sabi-black transition duration-300 ease-sabi hover:-translate-y-0.5 hover:shadow-yellow-lift"
					>
						See the work
						<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
					<Link
						href="#contact"
						className="inline-flex items-center rounded-xs border-2 border-white/35 px-7 py-4 font-heading text-sm font-bold text-sabi-white transition duration-300 ease-sabi hover:-translate-y-0.5 hover:border-sabi-yellow hover:text-sabi-yellow"
					>
						Start a project
					</Link>
				</div>
			</div>

			<div
				className="rise absolute inset-x-0 bottom-7 z-10 hidden md:block"
				style={{ animationDelay: '600ms' }}
			>
				<div className="relative mx-auto flex max-w-7xl items-center justify-end px-6 lg:px-16">
					<a
						href="#about"
						aria-label="Scroll to content"
						className="absolute left-1/2 -translate-x-1/2 text-white/60 transition-colors duration-300 hover:text-sabi-yellow"
					>
						<ChevronDown className="h-7 w-7 animate-bounce" strokeWidth={1.5} />
					</a>

					<p className="font-sans text-micro uppercase tracking-eyebrow text-white/50">
						Est. Lagos &middot; Working across West Africa
					</p>
				</div>
			</div>
		</section>
	);
}
