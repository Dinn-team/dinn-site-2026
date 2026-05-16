interface Step {
    number: string;
    title: string;
    description: string;
}

interface HowItWorksProps {
    title?: string;
    steps: Step[];
}

export default function HowItWorks({ title = 'Como funciona', steps }: HowItWorksProps) {
    return (
        <section className="py-20 md:py-32">
            <div className="container">
                <h2 className="text-3xl md:text-[40px] font-bold text-text-primary text-center mb-16">{title}</h2>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative max-w-5xl mx-auto">
                    {/* Linha conectora desktop */}
                    <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-color-border -z-10"></div>
                    
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col md:items-center text-left md:text-center relative">
                            {/* Círculo do número */}
                            <div className="w-[80px] h-[80px] shrink-0 rounded-full bg-white border-2 border-color-accent text-color-accent font-bold text-3xl flex items-center justify-center mb-6 shadow-sm z-10">
                                {step.number}
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[20px] font-bold text-text-primary">{step.title}</h3>
                                <p className="text-[16px] text-text-muted leading-relaxed">{step.description}</p>
                            </div>
                            
                            {/* Linha conectora mobile (aparece apenas em mobile entre os itens) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden absolute top-[80px] left-[40px] bottom-[-24px] w-[2px] bg-color-border -z-10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
