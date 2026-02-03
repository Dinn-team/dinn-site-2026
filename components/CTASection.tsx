import './CTASection.css';
import Link from 'next/link';

interface CTASectionProps {
    title: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function CTASection({
    title,
    description,
    ctaText = 'Solicitar demo',
    ctaHref = '/contato'
}: CTASectionProps) {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">{title}</h2>
                    <p className="cta-description">{description}</p>
                    <Link href={ctaHref} className="btn btn-primary btn-lg">
                        {ctaText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
