import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkGrid } from '@/components/sections/WorkGrid';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

/*
 * Section colour choreography — no two adjacent fields alike:
 * black · YELLOW · white · black · COBALT · white · ORANGE · black · white · RED · black
 */
export default function SabiStudiosPage() {
	return (
		<>
			<main className="min-h-screen bg-sabi-black">
				<HeroSection />
				<MarqueeStrip />
				<AboutSection />
				<StatsStrip />
				<ServicesSection />
				<WorkGrid />
				<ProcessSection />
				<TestimonialsSection />
				<TeamSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
