import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkGrid } from '@/components/sections/WorkGrid';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function SabiStudiosPage() {
	return (
		<main className="bg-sabi-black min-h-screen">
			<HeroSection />
			<MarqueeStrip />
			<AboutSection />
			<StatsStrip />
			<ServicesSection />
			<WorkGrid />
			<TestimonialsSection />
			<TeamSection />
			<ContactSection />
		</main>
	);
}
