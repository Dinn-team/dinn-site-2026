import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BenefitsCards from '@/components/BenefitsCards';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Estimativa de Giro',
    description: 'Previsões semanais e mensais de giro de estoque para otimizar compras e reduzir perdas na sua farmácia.',
};

export default function EstimativaGiroPage() {
    const steps = [
        {
            number: '1',
            title: 'Análise Histórica',
            description: '(Texto será fornecido)'
        },
        {
            number: '2',
            title: 'Modelagem Preditiva',
            description: '(Texto será fornecido)'
        },
        {
            number: '3',
            title: 'Geração de Previsões',
            description: '(Texto será fornecido)'
        },
        {
            number: '4',
            title: 'Recomendações de Ação',
            description: '(Texto será fornecido)'
        }
    ];

    const benefits = [
        {
            icon: '💰',
            title: 'Redução de Perdas',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📊',
            title: 'Compras Otimizadas',
            description: '(Texto será fornecido)'
        },
        {
            icon: '🎯',
            title: 'Precisão nas Previsões',
            description: '(Texto será fornecido)'
        },
        {
            icon: '⚡',
            title: 'Decisões Ágeis',
            description: '(Texto será fornecido)'
        }
    ];

    const useCases = [
        {
            icon: '📅',
            title: 'Planejamento Semanal',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📆',
            title: 'Planejamento Mensal',
            description: '(Texto será fornecido)'
        },
        {
            icon: '🎁',
            title: 'Sazonalidade',
            description: '(Texto será fornecido)'
        }
    ];

    const faqItems = [
        {
            question: 'Como são calculadas as estimativas?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Qual a precisão das previsões?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'O sistema considera sazonalidade?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Posso ajustar manualmente as previsões?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Como funciona para produtos novos?',
            answer: '(Texto será fornecido)'
        }
    ];

    return (
        <>
            <Hero
                title="Estimativa de Giro Semanal e Mensal"
                subtitle="Previsões precisas para otimizar suas compras. Reduza perdas e maximize lucros com inteligência preditiva."
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

            {/* Giro Semanal e Mensal - Blocos Separados */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title text-center">O que Entregamos</h2>

                    <div style={{ display: 'grid', gap: 'var(--space-2xl)', maxWidth: '900px', margin: '0 auto' }}>
                        {/* Giro Semanal */}
                        <div className="card" style={{ padding: 'var(--space-2xl)' }}>
                            <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
                                📅 Estimativa de Giro Semanal
                            </h3>
                            <div className="card-grid" style={{ marginTop: 'var(--space-lg)' }}>
                                <div>
                                    <h4>🎯 Previsão de Demanda</h4>
                                    <p>(Texto será fornecido)</p>
                                </div>
                                <div>
                                    <h4>📊 Análise de Tendências</h4>
                                    <p>(Texto será fornecido)</p>
                                </div>
                                <div>
                                    <h4>⚡ Alertas Rápidos</h4>
                                    <p>(Texto será fornecido)</p>
                                </div>
                            </div>
                        </div>

                        {/* Giro Mensal */}
                        <div className="card" style={{ padding: 'var(--space-2xl)' }}>
                            <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
                                📆 Estimativa de Giro Mensal
                            </h3>
                            <div className="card-grid" style={{ marginTop: 'var(--space-lg)' }}>
                                <div>
                                    <h4>📈 Planejamento Estratégico</h4>
                                    <p>(Texto será fornecido)</p>
                                </div>
                                <div>
                                    <h4>💰 Otimização de Capital</h4>
                                    <p>(Texto será fornecido)</p>
                                </div>
                                <div>
                                    <h4>🎁 Sazonalidade</h4>
                                    <p>(Texto será fornecido)</p>
                                </div>
                            </div>
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
                title="Pronto para prever o futuro do seu estoque?"
                description="Solicite uma demonstração e veja como nossas previsões podem otimizar suas compras."
            />
        </>
    );
}
