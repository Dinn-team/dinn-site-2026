import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dinn.com.br';

    // Static pages
    const staticPages = [
        '',
        '/estoque',
        '/monitoramento-de-preco',
        '/localizacao-de-produtos',
        '/estimativa-de-giro',
        '/estudos-e-pesquisas',
        '/blog',
        '/contato',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Blog posts - will be dynamically generated from Sanity
    const blogPosts = [
        '/blog/otimizar-gestao-estoque-farmacia',
        '/blog/tendencias-mercado-farmaceutico-2024',
        '/blog/monitoramento-precos-guia-completo',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPosts];
}
