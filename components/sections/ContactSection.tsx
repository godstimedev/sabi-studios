'use client';

import Link from 'next/link';
import { Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TikTokIcon } from '@/components/icons/TikTokIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { XIcon } from '@/components/icons/XIcon';

export function ContactSection() {
	const ref = useScrollAnimation();

	return (
		<section
			ref={ref}
			id="contact"
			className="py-24 md:py-32 bg-linear-to-t from-sabi-navy/30 to-sabi-black"
		>
			<div className="max-w-4xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="scroll-animate font-(family-name:--font-montserrat) text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
						Ready to tell your{' '}
						<span className="bg-linear-to-r from-sabi-yellow to-sabi-cyan bg-clip-text text-transparent">
							story
						</span>
						?
					</h2>
					<p className="scroll-animate text-sabi-gray text-lg">
						{"Let's create something extraordinary together."}
					</p>
				</div>

				<form
					action="https://api.web3forms.com/submit"
					method="POST"
					className="scroll-animate max-w-xl mx-auto space-y-6"
				>
					{/* Replace this value with the Access Key you get from Web3Forms */}
					<input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

					{/* Optional: Add a subject to the email */}
					<input type="hidden" name="subject" value="New Contact Form Submission - Sabi Studios" />

					<div>
						<input
							type="text"
							name="name"
							required
							placeholder="Your Name"
							className="w-full px-6 py-4 bg-sabi-navy/50 border border-sabi-navy rounded-lg
                       text-white placeholder:text-sabi-gray/60 focus:outline-none
                       focus:border-sabi-cyan transition-colors duration-300"
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							required
							placeholder="Your Email"
							className="w-full px-6 py-4 bg-sabi-navy/50 border border-sabi-navy rounded-lg
                       text-white placeholder:text-sabi-gray/60 focus:outline-none
                       focus:border-sabi-cyan transition-colors duration-300"
						/>
					</div>
					<div>
						<textarea
							name="message"
							required
							rows={5}
							placeholder="Your Message"
							className="w-full px-6 py-4 bg-sabi-navy/50 border border-sabi-navy rounded-lg
                       text-white placeholder:text-sabi-gray/60 focus:outline-none
                       focus:border-sabi-cyan transition-colors duration-300 resize-none"
						/>
					</div>
					<button
						type="submit"
						className="w-full px-8 py-4 bg-sabi-yellow text-sabi-black font-semibold rounded-lg
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                     hover:shadow-sabi-yellow/25 flex items-center justify-center gap-2"
					>
						<Send className="w-5 h-5" />
						Send Message
					</button>
				</form>

				<div className="scroll-animate mt-16 flex items-center justify-center gap-6">
					<Link
						href="https://www.instagram.com/sabicreativestudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 border border-sabi-navy rounded-full text-sabi-gray
                     transition-all duration-300 hover:border-sabi-cyan hover:text-sabi-cyan
                     hover:scale-110"
					>
						<InstagramIcon className="w-6 h-6" />
					</Link>
					<Link
						href="https://www.tiktok.com/@sabistudiosng"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 border border-sabi-navy rounded-full text-sabi-gray
                     transition-all duration-300 hover:border-sabi-cyan hover:text-sabi-cyan
                     hover:scale-110"
					>
						<TikTokIcon className="w-6 h-6" />
					</Link>
					<Link
						href="https://x.com/sabistudiosng"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 border border-sabi-navy rounded-full text-sabi-gray
                     transition-all duration-300 hover:border-sabi-cyan hover:text-sabi-cyan
                     hover:scale-110"
					>
						<XIcon className="w-6 h-6" />
					</Link>
				</div>

				<div className="scroll-animate mt-16 pt-8 border-t border-sabi-navy/50 text-center">
					<p className="text-sabi-gray text-sm">
						© {new Date().getFullYear()} Sabi Studios. All rights reserved.
					</p>
				</div>
			</div>
		</section>
	);
}
