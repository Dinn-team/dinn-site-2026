import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="logo">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8h16v16H8z" fill="currentColor" />
                            </svg>
                            <span>Dinn</span>
                        </div>
                        <p className="footer-description">
                            DiWE Ventures Studio, Dinn 2023. Dinn é uma marca registrada e Startup de unidade de negócio da DiWE Ventures Studio do grupo DiWE.
                        </p>
                    </div>

                    {/* Links Sections */}
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-title">A Dinn</h4>
                            <Link href="/" className="footer-link">Home</Link>
                            <Link href="/blog" className="footer-link">Blog</Link>
                            <Link href="/contato" className="footer-link">Contato</Link>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Soluções</h4>
                            <Link href="/estoque" className="footer-link">Estoque</Link>
                            <Link href="/monitoramento-de-preco" className="footer-link">Monitoramento de Preço</Link>
                            <Link href="/localizacao-de-produtos" className="footer-link">Localização de Produtos</Link>
                            <Link href="/estimativa-de-giro" className="footer-link">Estimativa de Giro</Link>
                            <Link href="/estudos-e-pesquisas" className="footer-link">Estudos e Pesquisas</Link>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-title">Legal</h4>
                            <Link href="/politicas-de-privacidade" className="footer-link">Políticas de Privacidade</Link>
                            <Link href="/seguranca-de-dados" className="footer-link">Segurança de Dados</Link>
                            <Link href="/termos-de-uso" className="footer-link">Termos de Uso</Link>
                            <Link href="/politicas-de-cookies" className="footer-link">Políticas de Cookies</Link>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="footer-cta">
                        <h3>Pronto para começar?</h3>
                        <p>Solicite uma demonstração e veja como o Dinn pode transformar seu negócio.</p>
                        <Link href="/contato" className="btn btn-primary">
                            Solicitar demo
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>Copyright ©2024 by DiWE. Todos os direitos reservados.</p>
                    <div className="footer-badge">
                        <span>Lançamento</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="4" fill="var(--color-accent-primary)" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}
