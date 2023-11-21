import React from 'react';
import type { Metadata } from 'next';

// Dictionary
import { getDictionary } from '@dictionary';

// Services
import { InternalServices } from '@utils/services';

// Styles
import './styles/main.scss';

const icons = [
    {
        url: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
    },
    {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
    },
    {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
    },
    {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
    },
    {
        url: '/mstile-70x70.png',
        sizes: '70x70',
        type: 'image/png',
    },
    {
        url: '/mstile-144x144.png',
        sizes: '144x144',
        type: 'image/png',
    },
    {
        url: '/mstile-150x150.png',
        sizes: '150x150',
        type: 'image/png',
    },
    {
        url: '/mstile-310x150.png',
        sizes: '310x150',
        type: 'image/png',
    },
    {
        url: '/mstile-310x310.png',
        sizes: '310x310',
        type: 'image/png',
    },
];

export async function generateMetadata(): Promise<Metadata> {
    const dictionary = await getDictionary('en-us');

    const title = dictionary['HOME_PAGE_TITLE'];
    const description = dictionary['HOME_PAGE_DESCRIPTION'];
    const bannerURL = new URL(`${InternalServices.getBLOB()}/images/thumbnail.png`);
    const banner = {
        url: bannerURL,
        secureUrl: bannerURL,
        alt: `${dictionary['HOME_PAGE_TITLE']} banner`,
        width: 1920,
        height: 1080,
    };

    return {
        title: title,
        description: description,
        icons: icons,
        openGraph: {
            title: title,
            description: description,
            type: 'website',
            images: banner,
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: banner,
            site: process.env.TWITTER_HANDLE ?? undefined,
        },
    };
}

interface Props {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
