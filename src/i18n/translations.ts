import { ptBR } from './locales/pt';
import { enUS } from './locales/en';
import { es419 } from './locales/es';

export const translations = {
  pt: ptBR,
  en: enUS,
  es: es419,
};

export type TranslationKey = string; // In a real project we could use deep keyof but string is fine

// Helper function to resolve dot-notation paths
export function resolvePath(obj: any, path: string): string | any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}
