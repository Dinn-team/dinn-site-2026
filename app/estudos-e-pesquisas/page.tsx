import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BenefitsCards from '@/components/BenefitsCards';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Estudos e Pesquisas Personalizadas',
    description: 'Pesquisas customizadas sobre tendências e oportunidades do mercado farmacêutico para decisões estratégicas.',
};

export default function EstudosPesquisasPage() {
    const steps = [
        {
            number: '1',
            title: 'Definição do Escopo',
            description: '(Texto será fornecido)'
        },
        {
            number: '2',
            title: 'Coleta de Dados',
            description: '(Texto será fornecido)'
        },
        {
            number: '3',
            title: 'Análise Profunda',
            description: '(Texto será fornecido)'
        },
        {
            number: '4',
            title: 'Entrega de Insights',
            description: '(Texto será fornecido)'
        }
    ];

    const benefits = [
        {
            icon: '🎯',
            title: 'Decisões Estratégicas',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📊',
            title: 'Dados Exclusivos',
            description: '(Texto será fornecido)'
        },
        {
            icon: '💡',
            title: 'Oportunidades de Mercado',
            description: '(Texto será fornecido)'
        },
        {
            icon: '🔬',
            title: 'Análise Profunda',
            description: '(Texto será fornecido)'
        }
    ];

    const useCases = [
        {
            icon: '📈',
            title: 'Análise de Tendências',
            description: '(Texto será fornecido)'
        },
        {
            icon: '🎯',
            title: 'Novos Nichos',
            description: '(Texto será fornecido)'
        },
        {
            icon: '💊',
            title: 'Lançamentos de Produtos',
            description: '(Texto será fornecido)'
        }
    ];

    const faqItems = [
        {
            question: 'Quanto tempo leva uma pesquisa?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Posso solicitar temas específicos?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Como são coletados os dados?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Qual o formato de entrega?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'As pesquisas são exclusivas?',
            answer: '(Texto será fornecido)'
        }
    ];

    return (
        <>
            <Hero
                title="Estudos e Pesquisas Personalizadas"
                subtitle="Insights exclusivos sobre o mercado farmacêutico. Pesquisas customizadas para impulsionar suas decisões estratégicas."
                variant="compact"
            />

            <section className="section">
                <div className="container content-wrapper">
                    <h2 className="text-center">O Problema que Resolvemos</h2>
                    <p className="text-center text-secondary" style={{ fontSize: 'var(--font-size-lg)' }}>
                        (Texto será fornecido - descrever a dor de forma objetiva)
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title text-center">O que Entregamos</h2>
                    <div className="card-grid">
                        <div className="card">
                            <h3>📋 Relatórios Completos</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>📊 Dados Exclusivos</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>💡 Recomendações Estratégicas</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>🎯 Insights Acionáveis</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exemplo de Entrega - Pesquisa GLP-1 */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Exemplo de Entrega</h2>

                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-2xl)' }}>
                        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🔬</div>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-sm)' }}>
                                Pesquisa GLP-1 — Janeiro 2026
                            </h3>
                            <p className="text-secondary" style={{ fontSize: 'var(--font-size-lg)' }}>
                                Análise completa do mercado de medicamentos GLP-1 no Brasil
                            </p>
                        </div>

                        <div style={{ display: 'grid', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
                            <div>
                                <h4 style={{ marginBottom: 'var(--space-sm)' }}>📊 Conteúdo da Pesquisa</h4>
                                <ul style={{ paddingLeft: 'var(--space-lg)', color: 'var(--color-text-secondary)' }}>
                                    <li>Análise de demanda e crescimento do mercado</li>
                                    <li>Mapeamento de concorrentes e precificação</li>
                                    <li>Tendências de consumo e perfil de clientes</li>
                                    <li>Oportunidades de posicionamento estratégico</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ marginBottom: 'var(--space-sm)' }}>📋 Formato de Entrega</h4>
                                <p className="text-secondary">(Texto será fornecido - PDF executivo, apresentação, dashboard interativo, etc.)</p>
                            </div>

                            <div>
                                <h4 style={{ marginBottom: 'var(--space-sm)' }}>⏱️ Prazo de Entrega</h4>
                                <p className="text-secondary">(Texto será fornecido - prazo típico para pesquisas customizadas)</p>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button className="btn btn-secondary">
                                Ver exemplo completo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Como Solicitamos Dados */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container content-wrapper">
                    <h2 className="text-center">Como Funciona a Solicitação</h2>
                    <div style={{ display: 'grid', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
                        <div className="card">
                            <h4>📝 Briefing Inicial</h4>
                            <p>(Texto será fornecido - como definimos o escopo)</p>
                        </div>
                        <div className="card">
                            <h4>⏱️ Prazo de Execução</h4>
                            <p>(Texto será fornecido - timeline típico)</p>
                        </div>
                        <div className="card">
                            <h4>📦 Formato de Entrega</h4>
                            <p>(Texto será fornecido - formatos disponíveis)</p>
                        </div>
                    </div>
                </div>
            </section>

            <HowItWorks steps={steps} />
            <BenefitsCards title="Benefícios" benefits={benefits} />

            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title text-center">Casos de Uso</h2>
                    <div className="card-grid">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>{useCase.icon}</div>
                                <h3>{useCase.title}</h3>
                                <p>{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ items={faqItems} />

            <CTASection
                title="Pronto para insights exclusivos?"
                description="Solicite uma pesquisa personalizada e descubra oportunidades únicas para seu negócio."
            />
        </>
    );
}
