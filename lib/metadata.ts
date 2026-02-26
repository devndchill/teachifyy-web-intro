import type { Metadata } from 'next';

export const siteConfig = {
    name: 'Teachifyy',
    description: 'Career launchpad for teachers with assessment, coaching, certification, and job support.',
    url: '',
    ogImage: '/assets/newLogo.png',
    links: {
        twitter: '',
        linkedin: '',
        youtube: '',
    },
};

export function constructMetadata({
    title = siteConfig?.name,
    description = siteConfig?.description,
    image = siteConfig?.ogImage,
    ...props
}: {
    title?: string;
    description?: string;
    image?: string;
    [key: string]: any;
}): Metadata {
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: image }],
            type: 'website',
            siteName: siteConfig.name,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@Teachifyy',
        },
        icons: {
            icon: [
                { url: '/assets/favicon.ico' },
                { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
                { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            ],
            apple: [
                { url: '/assets/apple-touch-icon.png' }
            ],
        },
        manifest: '/assets/site.webmanifest',
        ...props,
    };
}
