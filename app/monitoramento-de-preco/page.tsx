import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BenefitsCards from '@/components/BenefitsCards';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Monitoramento de Preço',
    description: 'Acompanhe os preços da concorrência em tempo real e mantenha sua farmácia sempre competitiva no mercado.',
};

export default function MonitoramentoPrecoPage() {
    const steps = [
        {
            number: '1',
            title: 'Coleta de Dados',
            description: '(Texto será fornecido)'
        },
        {
            number: '2',
            title: 'Análise Comparativa',
            description: '(Texto será fornecido)'
        },
        {
            number: '3',
            title: 'Alertas de Oportunidade',
            description: '(Texto será fornecido)'
        }
    ];

    const benefits = [
        {
            icon: '💰',
            title: 'Competitividade',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📊',
            title: 'Insights de Mercado',
            description: '(Texto será fornecido)'
        },
        {
            icon: '⚡',
            title: 'Ajustes Rápidos',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📈',
            title: 'Aumento de Margem',
            description: '(Texto será fornecido)'
        }
    ];

    const useCases = [
        {
            icon: '🎯',
            title: 'Precificação Dinâmica',
            description: '(Texto será fornecido)'
        },
        {
            icon: '🔍',
            title: 'Análise de Concorrentes',
            description: '(Texto será fornecido)'
        },
        {
            icon: '💡',
            title: 'Estratégias Promocionais',
            description: '(Texto será fornecido)'
        }
    ];

    const faqItems = [
        {
            question: 'Como os preços são coletados?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Com que frequência os dados são atualizados?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Posso monitorar concorrentes específicos?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'O sistema sugere preços automaticamente?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Como funciona a análise de margem?',
            answer: '(Texto será fornecido)'
        }
    ];

    return (
        <>
            <Hero
                title="Monitoramento de Preço em Tempo Real"
                subtitle="Mantenha-se competitivo com inteligência de preços. Acompanhe a concorrência e tome decisões estratégicas baseadas em dados."
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
                            <h3>🔍 Monitoramento 24/7</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>📊 Comparativos Detalhados</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>🔔 Alertas Personalizados</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>📈 Histórico de Preços</h3>
                            <p>(Texto será fornecido)</p>
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
                title="Pronto para ser mais competitivo?"
                description="Solicite uma demonstração e descubra como o monitoramento de preços pode aumentar suas vendas."
            />
        </>
    );
}
