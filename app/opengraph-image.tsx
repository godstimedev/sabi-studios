import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Sabi Studios — We Sabi Visuals. You Sabi Win.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/*
 * Generated from the brand rather than shipped as a static export, so the OG
 * card can never drift from the palette and tagline the way the old
 * /images/og-image.png did.
 */
export default async function OpengraphImage() {
	/*
	 * Montserrat is committed as WOFF (not WOFF2 — Satori cannot read that) so
	 * the card renders in the brand headline face and the build stays offline.
	 */
	const [mark, montserrat800, montserrat600] = await Promise.all([
		readFile(join(process.cwd(), 'public/images/SabiMark.png')),
		readFile(join(process.cwd(), 'app/fonts/Montserrat-800.woff')),
		readFile(join(process.cwd(), 'app/fonts/Montserrat-600.woff')),
	]);
	const markSrc = `data:image/png;base64,${mark.toString('base64')}`;

	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					backgroundColor: '#000000',
					fontFamily: 'Montserrat',
					// Yellow key, cobalt fill — the hero's grade, flattened.
					backgroundImage:
						'radial-gradient(60% 55% at 8% 20%, rgba(255,214,0,0.20) 0%, rgba(0,0,0,0) 62%), radial-gradient(55% 50% at 95% 95%, rgba(0,74,173,0.34) 0%, rgba(0,0,0,0) 62%)',
					padding: '72px 80px',
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={markSrc} width={70} height={70} alt="" />
					<div style={{ display: 'flex', fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>
						<span style={{ color: '#FFFFFF' }}>SABI&nbsp;</span>
						<span style={{ color: '#FFD600' }}>STUDIOS</span>
					</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							fontSize: 82,
							fontWeight: 800,
							letterSpacing: -2.5,
							lineHeight: 1.05,
							color: '#FFFFFF',
						}}
					>
						<span>We Sabi Visuals.&nbsp;</span>
						<span>
							{/* NBSP: Satori trims a trailing ordinary space here. */}
							{'You Sabi '}
							<span style={{ color: '#FFD600' }}>Win.</span>
						</span>
					</div>

					<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 34 }}>
						<div style={{ display: 'flex', width: 56, height: 4, backgroundColor: '#FFD600' }} />
						<div
							style={{
								display: 'flex',
								fontSize: 22,
								color: '#D4D4D4',
								letterSpacing: 1.5,
							}}
						>
							Videography · Photography · Design · Content — Lagos, Nigeria
						</div>
					</div>
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{ name: 'Montserrat', data: montserrat600, weight: 600, style: 'normal' },
				{ name: 'Montserrat', data: montserrat800, weight: 800, style: 'normal' },
			],
		},
	);
}
