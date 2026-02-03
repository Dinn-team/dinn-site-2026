import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BenefitsCards from '@/components/BenefitsCards';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Gestão de Estoque Inteligente',
    description: 'Controle total do seu inventário com alertas automáticos, previsão de demanda e gestão inteligente de estoque para farmácias.',
};

export default function EstoquePage() {
    const steps = [
        {
            number: '1',
            title: 'Integração de Dados',
            description: '(Texto será fornecido)'
        },
        {
            number: '2',
            title: 'Análise em Tempo Real',
            description: '(Texto será fornecido)'
        },
        {
            number: '3',
            title: 'Alertas Automáticos',
            description: '(Texto será fornecido)'
        },
        {
            number: '4',
            title: 'Recomendações de Compra',
            description: '(Texto será fornecido)'
        }
    ];

    const benefits = [
        {
            icon: '🎯',
            title: 'Redução de Rupturas',
            description: '(Texto será fornecido)'
        },
        {
            icon: '💡',
            title: 'Otimização de Capital',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📈',
            title: 'Aumento de Vendas',
            description: '(Texto será fornecido)'
        },
        {
            icon: '⚡',
            title: 'Decisões Rápidas',
            description: '(Texto será fornecido)'
        }
    ];

    const useCases = [
        {
            icon: '🏥',
            title: 'Farmácias de Rede',
            description: '(Texto será fornecido)'
        },
        {
            icon: '🏪',
            title: 'Farmácias Independentes',
            description: '(Texto será fornecido)'
        },
        {
            icon: '🚑',
            title: 'Farmácias Hospitalares',
            description: '(Texto será fornecido)'
        }
    ];

    const faqItems = [
        {
            question: 'Como funciona a integração com meu sistema atual?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Quanto tempo leva para implementar?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'O sistema funciona offline?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Posso personalizar os alertas?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Como são calculadas as previsões de demanda?',
            answer: '(Texto será fornecido)'
        }
    ];

    return (
        <>
            <Hero
                title="Gestão de Estoque Inteligente"
                subtitle="Nunca mais perca vendas por falta de produtos. Controle total do seu inventário com inteligência artificial."
                variant="compact"
            />

            {/* Pain Section */}
            <section className="section">
                <div className="container content-wrapper">
                    <h2 className="text-center">O Problema que Resolvemos</h2>
                    <p className="text-center text-secondary" style={{ fontSize: 'var(--font-size-lg)' }}>
                        (Texto será fornecido - descrever a dor de forma objetiva)
                    </p>
                </div>
            </section>

            {/* What We Deliver */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title text-center">O que Entregamos</h2>
                    <div className="card-grid">
                        <div className="card">
                            <h3>📊 Dashboard Completo</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>🔔 Alertas Inteligentes</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>📱 Acesso Mobile</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>📈 Relatórios Detalhados</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <HowItWorks steps={steps} />

            {/* Benefits */}
            <BenefitsCards title="Benefícios" benefits={benefits} />

            {/* Use Cases */}
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

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* Final CTA */}
            <CTASection
                title="Pronto para otimizar seu estoque?"
                description="Solicite uma demonstração e veja como podemos transformar a gestão do seu inventário."
            />
        </>
    );
}
