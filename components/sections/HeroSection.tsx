import Link from 'next/link';

export function HeroSection() {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-linear-to-br from-sabi-navy/80 via-sabi-black to-sabi-black" />
			<div className="absolute inset-0 bg-linear-to-t from-sabi-black via-transparent to-transparent" />

			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sabi-yellow/10 rounded-full blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sabi-cyan/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: '1s' }}
				/>
			</div>

			<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
				<h1 className="font-(family-name:--font-montserrat) text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
					We craft stories that{' '}
					<span className="bg-linear-to-r from-sabi-yellow to-sabi-cyan bg-clip-text text-transparent">
						connect
					</span>
					, move, and endure.
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

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
				<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
				</div>
			</div>
		</section>
	);
}
