import './HowItWorks.css';

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
        <section className="how-it-works-section section">
            <div className="container">
                <h2 className="section-title text-center">{title}</h2>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
