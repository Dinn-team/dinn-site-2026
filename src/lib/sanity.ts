import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'sutrqo3v',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})
