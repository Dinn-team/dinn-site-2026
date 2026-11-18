// Arquivo pdf da apresentação, gerado no build. Lógica em src/lib/presentation-download.ts.
import type { APIRoute } from 'astro';
import { presentationFileRoute } from '@/lib/presentation-download';

const route = presentationFileRoute('es', 'pdf');

export const getStaticPaths = route.getStaticPaths;
export const GET: APIRoute = route.GET;
