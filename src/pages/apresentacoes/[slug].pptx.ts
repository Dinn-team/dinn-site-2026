// Arquivo pptx da apresentação, gerado no build. Lógica em src/lib/presentation-download.ts.
import type { APIRoute } from 'astro';
import { presentationFileRoute } from '@/lib/presentation-download';

const route = presentationFileRoute('pt', 'pptx');

export const getStaticPaths = route.getStaticPaths;
export const GET: APIRoute = route.GET;
