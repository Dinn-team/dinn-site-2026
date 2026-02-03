import Hero from '@/components/Hero';
import BenefitsCards from '@/components/BenefitsCards';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import './page.css';

export default function Home() {
  const painPoints = [
    "Dificuldade em controlar o estoque e evitar rupturas",
    "Falta de visibilidade sobre a competitividade de preços",
    "Perda de tempo procurando produtos no estoque",
    "Decisões de compra baseadas em intuição, não em dados",
    "Dificuldade em acompanhar tendências do mercado farmacêutico"
  ];

  const features = [
    {
      icon: "📦",
      title: "Gestão de Estoque",
      description: "Controle inteligente do seu inventário com alertas de ruptura e reposição automática.",
      href: "/estoque"
    },
    {
      icon: "💰",
      title: "Monitoramento de Preço",
      description: "Acompanhe preços da concorrência em tempo real e mantenha-se competitivo.",
      href: "/monitoramento-de-preco"
    },
    {
      icon: "📍",
      title: "Localização de Produtos",
      description: "Encontre produtos rapidamente no estoque com sistema de mapeamento inteligente.",
      href: "/localizacao-de-produtos"
    },
    {
      icon: "📊",
      title: "Estimativa de Giro",
      description: "Previsões semanais e mensais para otimizar suas compras e reduzir perdas.",
      href: "/estimativa-de-giro"
    },
    {
      icon: "🔬",
      title: "Estudos e Pesquisas",
      description: "Pesquisas personalizadas sobre tendências e oportunidades do mercado farmacêutico.",
      href: "/estudos-e-pesquisas"
    }
  ];

  const clients = [
    "Farmácia Exemplo 1",
    "Farmácia Exemplo 2",
    "Farmácia Exemplo 3",
    "Farmácia Exemplo 4"
  ];

  const faqItems = [
    {
      question: "Como o Dinn pode ajudar minha farmácia?",
      answer: "(Texto será fornecido)"
    },
    {
      question: "Quais dados o Dinn utiliza?",
      answer: "(Texto será fornecido)"
    },
    {
      question: "O sistema é fácil de implementar?",
      answer: "(Texto será fornecido)"
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "(Texto será fornecido)"
    },
    {
      question: "O Dinn oferece suporte técnico?",
      answer: "(Texto será fornecido)"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Transforme dados em decisões estratégicas para sua farmácia"
        subtitle="O Dinn é a plataforma de inteligência de dados que ajuda farmácias a otimizar estoque, monitorar preços e tomar decisões baseadas em informações reais do mercado."
      />

      {/* Pain Points Section */}
      <section className="section pain-section">
        <div className="container">
          <h2 className="section-title text-center">Desafios que resolvemos</h2>
          <div className="pain-list">
            {painPoints.map((pain, index) => (
              <div key={index} className="pain-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="var(--color-accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title text-center">Nossas Soluções</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <span className="feature-link">
                  Saiba mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section purpose-section">
        <div className="container">
          <div className="purpose-content">
            <h2>Nosso Propósito</h2>
            <p>
              O Dinn nasceu para democratizar o acesso a inteligência de dados no mercado farmacêutico.
              Acreditamos que toda farmácia, independente do tamanho, merece tomar decisões baseadas em
              dados confiáveis e insights estratégicos.
            </p>
            <p>
              Nossa missão é transformar a forma como farmácias gerenciam seus negócios, trazendo
              eficiência, competitividade e crescimento sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section social-proof-section">
        <div className="container">
          <h2 className="section-title text-center">Clientes que confiam no Dinn</h2>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <p>{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* Final CTA */}
      <CTASection
        title="Pronto para transformar sua farmácia?"
        description="Solicite uma demonstração gratuita e descubra como o Dinn pode revolucionar a gestão do seu negócio."
      />
    </>
  );
}
