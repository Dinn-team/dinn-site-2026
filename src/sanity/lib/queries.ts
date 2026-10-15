// GROQ Queries for Sanity
//
// Idioma: cada artigo é um documento por idioma (pt/en/es), ligado às outras
// versões pelo `translationKey`. Documentos antigos não têm `contentLanguage` nem
// `translationKey`; `coalesce` os trata como PT e usa o slug como chave, então
// o site funciona antes e depois da migração dos dados.
//
// O campo se chama `contentLanguage` (e não `language`) de propósito: o dataset
// já tinha um `language: "en"` solto num artigo em português, vindo de um
// import antigo. Reaproveitar esse nome moveria o artigo para /en.

const CARD_FIELDS = `
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  author,
  publishedAt,
  categories,
  "language": coalesce(contentLanguage, 'pt'),
  "translationKey": coalesce(translationKey, slug.current)`;

/** Artigos de um idioma (sem corpo), do mais recente para o mais antigo. */
export const postsByLanguageQuery = `*[_type == "post" && coalesce(contentLanguage, 'pt') == $lang] | order(publishedAt desc) {${CARD_FIELDS}
}`;

/**
 * Artigos de um idioma com corpo e versões irmãs (outros idiomas do mesmo
 * artigo), usados para hreflang e para o seletor de idioma levar o leitor à
 * versão equivalente.
 */
export const articlesByLanguageQuery = `*[_type == "post" && coalesce(contentLanguage, 'pt') == $lang] | order(publishedAt desc) {${CARD_FIELDS},
  _updatedAt,
  body,
  "alternates": *[_type == "post" && coalesce(translationKey, slug.current) == coalesce(^.translationKey, ^.slug.current) && _id != ^._id]{
    "language": coalesce(contentLanguage, 'pt'),
    "slug": slug.current
  }
}`;
