import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// Fotos reais das cidades da Dinn, usadas na página Sobre. Coloque os arquivos
// em public/cidades: vale qualquer nome que comece com "joinville" ou "valencia"
// (ex.: joinville-sc-BR.jpg), em jpg, jpeg, webp, avif ou png. Sem arquivo, o
// cartão mostra o degradê da marca.
const EXT = /\.(jpe?g|webp|avif|png)$/i;

export type CityPhotos = { joinville?: string; valencia?: string };

/** Só roda no servidor (frontmatter do Astro): confere quais arquivos existem. */
export function getCityPhotos(): CityPhotos {
  const dir = join(process.cwd(), 'public', 'cidades');
  if (!existsSync(dir)) return {};
  const files = readdirSync(dir).filter((f) => EXT.test(f)).sort();
  const find = (prefix: string) => {
    const file = files.find((f) => f.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').startsWith(prefix));
    return file ? `/cidades/${encodeURIComponent(file)}` : undefined;
  };
  return { joinville: find('joinville'), valencia: find('valencia') };
}
