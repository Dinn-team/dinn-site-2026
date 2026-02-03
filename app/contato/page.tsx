import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import './contato.css';

export const metadata: Metadata = {
    title: 'Contato - Solicitar Demo',
    description: 'Entre em contato com o Dinn e solicite uma demonstração gratuita da nossa plataforma de inteligência de dados.',
};

export default function ContatoPage() {
    return (
        <>
            <Hero
                title="Solicite uma Demonstração"
                subtitle="Preencha o formulário abaixo e nossa equipe entrará em contato para agendar uma demonstração personalizada."
                variant="compact"
            />

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Nome completo *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Seu nome"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">E-mail *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefone *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">Farmácia/Empresa *</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            required
                                            placeholder="Nome da farmácia"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="interest">Interesse principal</label>
                                    <select id="interest" name="interest">
                                        <option value="">Selecione uma opção</option>
                                        <option value="estoque">Gestão de Estoque</option>
                                        <option value="preco">Monitoramento de Preço</option>
                                        <option value="localizacao">Localização de Produtos</option>
                                        <option value="giro">Estimativa de Giro</option>
                                        <option value="pesquisas">Estudos e Pesquisas</option>
                                        <option value="todos">Todas as soluções</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mensagem (opcional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Conte-nos mais sobre suas necessidades..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    Solicitar demonstração
                                </button>

                                <p className="form-disclaimer">
                                    Ao enviar este formulário, você concorda com nossa{' '}
                                    <a href="/politicas-de-privacidade">Política de Privacidade</a>.
                                </p>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card card">
                                <h3>📧 E-mail</h3>
                                <p>contato@dinn.com.br</p>
                            </div>

                            <div className="info-card card">
                                <h3>💬 Suporte</h3>
                                <p>Segunda a Sexta, 9h às 18h</p>
                            </div>

                            <div className="info-card card">
                                <h3>🚀 Resposta Rápida</h3>
                                <p>Retornamos em até 24 horas úteis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
