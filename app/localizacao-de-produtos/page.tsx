import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import BenefitsCards from '@/components/BenefitsCards';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Localização de Produtos',
    description: 'Encontre produtos rapidamente no estoque com sistema de mapeamento inteligente e redução de tempo de busca.',
};

export default function LocalizacaoProdutosPage() {
    const steps = [
        {
            number: '1',
            title: 'Mapeamento do Estoque',
            description: '(Texto será fornecido)'
        },
        {
            number: '2',
            title: 'Sistema de Busca',
            description: '(Texto será fornecido)'
        },
        {
            number: '3',
            title: 'Navegação Guiada',
            description: '(Texto será fornecido)'
        }
    ];

    const benefits = [
        {
            icon: '⚡',
            title: 'Agilidade no Atendimento',
            description: '(Texto será fornecido)'
        },
        {
            icon: '😊',
            title: 'Melhor Experiência',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📍',
            title: 'Organização Visual',
            description: '(Texto será fornecido)'
        },
        {
            icon: '💼',
            title: 'Produtividade',
            description: '(Texto será fornecido)'
        }
    ];

    const useCases = [
        {
            icon: '🏪',
            title: 'Grandes Estoques',
            description: '(Texto será fornecido)'
        },
        {
            icon: '👥',
            title: 'Treinamento de Equipe',
            description: '(Texto será fornecido)'
        },
        {
            icon: '📦',
            title: 'Inventário Rápido',
            description: '(Texto será fornecido)'
        }
    ];

    const faqItems = [
        {
            question: 'Como funciona o mapeamento do estoque?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Preciso reorganizar meu estoque?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'O sistema funciona em dispositivos móveis?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Posso personalizar as localizações?',
            answer: '(Texto será fornecido)'
        },
        {
            question: 'Como treinar a equipe?',
            answer: '(Texto será fornecido)'
        }
    ];

    return (
        <>
            <Hero
                title="Localização Inteligente de Produtos"
                subtitle="Encontre qualquer produto em segundos. Sistema de mapeamento que transforma a eficiência do seu estoque."
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
                            <h3>🗺️ Mapa Visual do Estoque</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>🔍 Busca Instantânea</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>📱 App Mobile</h3>
                            <p>(Texto será fornecido)</p>
                        </div>
                        <div className="card">
                            <h3>🏷️ Etiquetas Inteligentes</h3>
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
                title="Pronto para agilizar seu estoque?"
                description="Solicite uma demonstração e veja como a localização inteligente pode transformar sua operação."
            />
        </>
    );
}
