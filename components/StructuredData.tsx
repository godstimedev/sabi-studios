const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sabistudiosng.com';

/*
 * JSON-LD for the studio. Values are taken from the brand guideline (name,
 * tagline, "What We Do", mission) and the real social handles — nothing here
 * is invented. Service list mirrors the six services on the page.
 */
const schema = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	'@id': `${siteUrl}/#organization`,
	name: 'Sabi Studios',
	alternateName: 'Sabi Creative Studios',
	slogan: 'We Sabi Visuals. You Sabi Win.',
	description:
		'Sabi Studios is a creative studio providing videography, photography, graphic design and content creation for brands looking to communicate their story through strong visual content.',
	url: siteUrl,
	logo: `${siteUrl}/images/SabiMark.png`,
	image: `${siteUrl}/opengraph-image`,
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Lagos',
		addressCountry: 'NG',
	},
	areaServed: [
		{ '@type': 'Country', name: 'Nigeria' },
		{ '@type': 'Country', name: 'Ghana' },
	],
	knowsAbout: [
		'Videography',
		'Photography',
		'Graphic Design',
		'Content Creation',
		'Documentary Filmmaking',
		'Creative Direction',
	],
	founder: [
		{ '@type': 'Person', name: 'James Clement', jobTitle: 'Co-Founder & Creative Team Lead' },
		{ '@type': 'Person', name: 'Dewa', jobTitle: 'Co-Founder & Head of Operations' },
	],
	sameAs: [
		'https://instagram.com/sabicreativestudios',
		'https://tiktok.com/@sabistudiosng',
		'https://x.com/sabistudiosng',
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Creative services',
		itemListElement: [
			'Documentary & Storytelling',
			'Branded Content & Commercials',
			'Photography',
			'Content for Digital & Social',
			'Video Production',
			'Creative Direction',
		].map((service) => ({
			'@type': 'Offer',
			itemOffered: { '@type': 'Service', name: service },
		})),
	},
};

export function StructuredData() {
	return (
		<script
			type="application/ld+json"
			// Static, author-controlled object — no user input reaches this.
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
