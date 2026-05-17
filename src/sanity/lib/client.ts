import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'sutrqo3v',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: true, // Use CDN for faster reads in production
    token: import.meta.env.SANITY_API_TOKEN, // Only needed for write operations
});

// Helper for generating image URLs
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
