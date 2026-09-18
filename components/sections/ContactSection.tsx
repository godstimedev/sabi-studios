'use client';

import { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { TikTokIcon } from '@/components/icons/TikTokIcon';
import { XIcon } from '@/components/icons/XIcon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const socials = [
	{ label: 'Instagram', href: 'https://instagram.com/sabicreativestudios', Icon: InstagramIcon },
	{ label: 'TikTok', href: 'https://tiktok.com/@sabistudiosng', Icon: TikTokIcon },
	{ label: 'X', href: 'https://x.com/sabistudiosng', Icon: XIcon },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactSection() {
	const ref = useScrollAnimation<HTMLElement>();
	const [status, setStatus] = useState<Status>('idle');

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		setStatus('sending');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: new FormData(form),
			});

			if (!response.ok) throw new Error(`Request failed: ${response.status}`);

			setStatus('sent');
			form.reset();
		} catch {
			setStatus('error');
		}
	}

	return (
		<section id="contact" ref={ref} className="grain relative overflow-hidden bg-sabi-red">
			{/* ---- Brand promise ---- */}
			<div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 text-center lg:px-16">
				<p className="reveal font-sans text-eyebrow uppercase text-sabi-yellow">Our brand promise</p>

				<h2
					className="reveal mx-auto mt-8 max-w-4xl font-heading text-display text-sabi-white"
					style={{ transitionDelay: '80ms' }}
				>
					Does this help
					<br />
					the client <span className="text-sabi-yellow">win?</span>
				</h2>

				<p
					className="reveal mx-auto mt-8 max-w-xl font-sans text-lg font-light leading-relaxed text-white/90"
					style={{ transitionDelay: '160ms' }}
				>
					Creative excellence. Professional execution. Visual storytelling that delivers results.
					Every project gets measured against that one question.
				</p>
			</div>

			<div className="relative h-px bg-white/25" />

			{/* ---- Contact ---- */}
			<div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 lg:px-16">
				<div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
					<div className="lg:col-span-5">
						<h2 className="reveal font-heading text-headline text-sabi-white">
							Ready to tell
							<br />
							your story?
						</h2>

						<p
							className="reveal mt-6 max-w-sm font-sans text-base font-light leading-relaxed text-white/90"
							style={{ transitionDelay: '80ms' }}
						>
							Tell us what you&rsquo;re building. We&rsquo;ll tell you how we&rsquo;d shoot it.
						</p>

						<div className="reveal mt-11 flex gap-3" style={{ transitionDelay: '160ms' }}>
							{socials.map(({ label, href, Icon }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-sabi-white transition duration-300 ease-sabi hover:-translate-y-0.5 hover:border-sabi-yellow hover:bg-sabi-yellow hover:text-sabi-black"
								>
									<Icon className="size-4.5" />
								</a>
							))}
						</div>
					</div>

					<form
						onSubmit={handleSubmit}
						className="reveal lg:col-span-7"
						style={{ transitionDelay: '120ms' }}
					>
						<input
							type="hidden"
							name="access_key"
							value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''}
						/>
						<input type="hidden" name="subject" value="New enquiry from sabistudiosng.com" />

						<div className="grid gap-5 sm:grid-cols-2">
							<div>
								<label htmlFor="name" className="mb-2.5 block font-sans text-eyebrow uppercase text-white/85">
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									placeholder="Your name"
									className="w-full rounded-xs border border-white/30 bg-black/25 px-4 py-3.5 font-sans text-body font-light text-sabi-white transition placeholder:text-white/55 focus:border-sabi-yellow focus:bg-black/40 focus:outline-none"
								/>
							</div>
							<div>
								<label htmlFor="email" className="mb-2.5 block font-sans text-eyebrow uppercase text-white/85">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="you@brand.com"
									className="w-full rounded-xs border border-white/30 bg-black/25 px-4 py-3.5 font-sans text-body font-light text-sabi-white transition placeholder:text-white/55 focus:border-sabi-yellow focus:bg-black/40 focus:outline-none"
								/>
							</div>
						</div>

						<div className="mt-5">
							<label htmlFor="message" className="mb-2.5 block font-sans text-eyebrow uppercase text-white/85">
								Project
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								required
								placeholder="What are we making?"
								className="w-full resize-y rounded-xs border border-white/30 bg-black/25 px-4 py-3.5 font-sans text-body font-light text-sabi-white transition placeholder:text-white/55 focus:border-sabi-yellow focus:bg-black/40 focus:outline-none"
							/>
						</div>

						<button
							type="submit"
							disabled={status === 'sending'}
							className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xs bg-sabi-yellow px-7 py-4 font-heading text-sm font-bold text-sabi-black transition duration-300 ease-sabi hover:-translate-y-0.5 hover:shadow-yellow-lift disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
						>
							{status === 'sending' ? (
								<>
									Sending
									<Loader2 className="h-4 w-4 animate-spin" />
								</>
							) : (
								<>
									Send it
									<Send className="h-4 w-4" />
								</>
							)}
						</button>

						{/* aria-live so the outcome is announced, not just shown. */}
						<p aria-live="polite" className="mt-4 min-h-6 font-sans text-sm font-light">
							{status === 'sent' && (
								<span className="text-sabi-yellow">
									Message sent. We&rsquo;ll get back to you shortly.
								</span>
							)}
							{status === 'error' && (
								<span className="text-white">
									Something went wrong. Email us directly and we&rsquo;ll pick it up.
								</span>
							)}
						</p>
					</form>
				</div>
			</div>
		</section>
	);
}
