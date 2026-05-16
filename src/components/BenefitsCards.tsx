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
        <section className="py-20 md:py-32">
            <div className="container">
                {title && <h2 className="text-3xl md:text-[40px] font-bold text-text-primary text-center mb-12">{title}</h2>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="card flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl">{benefit.icon}</div>
                            <h3 className="text-[20px] font-bold text-text-primary">{benefit.title}</h3>
                            <p className="text-[16px] text-text-muted leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
