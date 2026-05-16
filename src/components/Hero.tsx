interface HeroProps {
    title: string;
    subtitle: string;
    primaryCTA?: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    variant?: 'default' | 'compact';
}

export default function Hero({
    title,
    subtitle,
    primaryCTA = { text: 'Solicitar demo', href: '/contato' },
    secondaryCTA,
    variant = 'default'
}: HeroProps) {
    return (
        <section className={`relative flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 ${variant === 'compact' ? 'pt-24 pb-12 md:pt-32 md:pb-16' : ''}`}>
            <div className="container relative z-10 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <h1 
                      className="text-[clamp(40px,6vw,88px)] leading-[1.1] tracking-[-0.02em] font-bold text-text-primary reveal visible"
                      dangerouslySetInnerHTML={{ __html: title.replace(/\*(.*?)\*/g, '<span class="font-light italic text-color-accent">$1</span>') }}
                    />
                    <p className="text-[clamp(16px,2vw,24px)] text-text-muted max-w-2xl reveal visible" style={{ transitionDelay: '0.1s' }}>
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 reveal visible" style={{ transitionDelay: '0.2s' }}>
                        <a href={primaryCTA.href} className="btn btn-primary btn-lg w-full sm:w-auto">
                            {primaryCTA.text}
                        </a>
                        {secondaryCTA && (
                            <a href={secondaryCTA.href} className="btn btn-outline btn-lg w-full sm:w-auto">
                                {secondaryCTA.text}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-color-accent/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </section>
    );
}
