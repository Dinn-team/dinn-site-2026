import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Sem token: o site apenas lê (client.fetch) de um dataset público. Manter um
// token de escrita aqui só criaria um segredo para vazar, sem uso nenhum.
export const client = createClient({
    projectId: 'sutrqo3v', // Hardcoded to bypass old Vercel env vars
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false, // Must be false for static builds (Vercel) to fetch the freshest data
    // Rascunhos (drafts.*) nunca entram no site, mesmo que um dia o client ganhe
    // um token. A automação grava só rascunhos; quem publica é uma pessoa.
    perspective: 'published',
});

// Helper for generating image URLs
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
