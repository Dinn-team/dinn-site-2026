import './BenefitsCards.css';

interface Benefit {
    icon: string;
    title: string;
    description: string;
}

interface BenefitsCardsProps {
    title?: string;
    benefits: Benefit[];
}

export default function BenefitsCards({ title, benefits }: BenefitsCardsProps) {
    return (
        <section className="benefits-section section">
            <div className="container">
                {title && <h2 className="section-title text-center">{title}</h2>}

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
