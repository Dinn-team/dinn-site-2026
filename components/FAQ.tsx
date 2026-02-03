'use client';

import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    title?: string;
    items: FAQItem[];
}

export default function FAQ({ title = 'Perguntas Frequentes', items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section section">
            <div className="container">
                <h2 className="section-title text-center">{title}</h2>

                <div className="faq-list">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleItem(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{item.question}</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="faq-icon"
                                >
                                    <path
                                        d="M6 9l6 6 6-6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>

                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
