import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sutrqo3v',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: true, // Use CDN for faster reads in production
    token: process.env.SANITY_API_TOKEN, // Only needed for write operations
});

// Helper for generating image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
