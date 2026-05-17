import { createClient } from '@sanity/client';
const client = createClient({
    projectId: 'sutrqo3v',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
});
client.fetch(`*[_type == "post"] | order(publishedAt desc) { title, publishedAt }`).then(posts => console.log(JSON.stringify(posts, null, 2))).catch(console.error);
