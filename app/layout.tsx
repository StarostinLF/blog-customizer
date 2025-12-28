import './styles/globals.scss';

import type { Metadata } from 'next';

import { SITE_NAME, DESCRIPTION } from '@/lib/constants';
import { getPageUrl } from '@/lib/get-page-url';

export async function generateMetadata(): Promise<Metadata> {
	const { baseUrl } = await getPageUrl();

	return {
		title: SITE_NAME,
		description: DESCRIPTION,
		generator: 'Next.js',
		applicationName: SITE_NAME,
		referrer: 'origin-when-cross-origin',
		metadataBase: new URL(baseUrl),
		openGraph: {
			title: SITE_NAME,
			description: DESCRIPTION,
			url: baseUrl,
			siteName: SITE_NAME,
			locale: 'ru_RU',
			type: 'website',
		},
		robots: {
			index: false,
			follow: false,
			nocache: false,
			googleBot: {
				index: false,
				follow: false,
				noimageindex: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		manifest: `${baseUrl}/manifest.webmanifest`,
		verification: {
			google: 'google',
			yandex: 'yandex',
			yahoo: 'yahoo',
		},
		alternates: {
			canonical: baseUrl,
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={'ru'}>
			<body>{children}</body>
		</html>
	);
}
