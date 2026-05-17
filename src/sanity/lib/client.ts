import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
    projectId: 'sutrqo3v', // Hardcoded to bypass old Vercel env vars
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false, // Must be false for static builds (Vercel) to fetch the freshest data
    token: import.meta.env.SANITY_API_TOKEN, // Only needed for write operations
});

// Helper for generating image URLs
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
