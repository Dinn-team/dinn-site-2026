import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link href="/" className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8h16v16H8z" fill="currentColor"/>
            </svg>
            <span>Dinn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link href="/" className="nav-link">Home</Link>
            
            <div className="nav-dropdown">
              <button className="nav-link dropdown-trigger">
                Soluções
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link href="/estoque" className="dropdown-item">Estoque</Link>
                <Link href="/monitoramento-de-preco" className="dropdown-item">Monitoramento de Preço</Link>
                <Link href="/localizacao-de-produtos" className="dropdown-item">Localização de Produtos</Link>
                <Link href="/estimativa-de-giro" className="dropdown-item">Estimativa de Giro</Link>
                <Link href="/estudos-e-pesquisas" className="dropdown-item">Estudos e Pesquisas</Link>
              </div>
            </div>
            
            <Link href="/blog" className="nav-link">Blog</Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contato" className="btn btn-primary">
            Solicitar demo
          </Link>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="nav-mobile">
        <Link href="/" className="nav-link-mobile">Home</Link>
        <div className="nav-section-mobile">
          <p className="nav-section-title">Soluções</p>
          <Link href="/estoque" className="nav-link-mobile">Estoque</Link>
          <Link href="/monitoramento-de-preco" className="nav-link-mobile">Monitoramento de Preço</Link>
          <Link href="/localizacao-de-produtos" className="nav-link-mobile">Localização de Produtos</Link>
          <Link href="/estimativa-de-giro" className="nav-link-mobile">Estimativa de Giro</Link>
          <Link href="/estudos-e-pesquisas" className="nav-link-mobile">Estudos e Pesquisas</Link>
        </div>
        <Link href="/blog" className="nav-link-mobile">Blog</Link>
        <Link href="/contato" className="btn btn-primary" style={{marginTop: 'var(--space-md)'}}>
          Solicitar demo
        </Link>
      </nav>
    </header>
  );
}
