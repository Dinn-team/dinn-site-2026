import Link from 'next/link';
import './Hero.css';

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
        <section className={`hero ${variant === 'compact' ? 'hero-compact' : ''}`}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-subtitle">{subtitle}</p>

                    <div className="hero-ctas">
                        <Link href={primaryCTA.href} className="btn btn-primary btn-lg">
                            {primaryCTA.text}
                        </Link>
                        {secondaryCTA && (
                            <Link href={secondaryCTA.href} className="btn btn-secondary btn-lg">
                                {secondaryCTA.text}
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="hero-gradient"></div>
        </section>
    );
}
