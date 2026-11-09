import type { FeatureContent } from '../types';
import { distribuicao } from './distribuicao';
import { giro } from './giro';
import { localizador } from './localizador';
import { mercado } from './mercado';
import { oportunidades } from './oportunidades';
import { preco } from './preco';
import { ruptura } from './ruptura';

/** Funcionalidades com página completa (molde do Suporte). A Jean tem página própria (JeanPage). */
export const FEATURE_CONTENT: Record<string, FeatureContent> = {
  ruptura,
  giro,
  preco,
  localizador,
  mercado,
  oportunidades,
  distribuicao,
};
