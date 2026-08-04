import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import type { Report } from '@/data/reports';

interface ReportsListProps {
  reports: Report[];
}

/** Busca e filtros só aparecem quando a lista cresce o suficiente para justificá-los. */
const SEARCH_THRESHOLD = 4;
const FILTERS_THRESHOLD = 3;

export default function ReportsList({ reports }: ReportsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeClient, setActiveClient] = useState('Todos');

  const allClients = useMemo(() => {
    const clients = new Set(reports.map(r => r.client));
    return ['Todos', ...Array.from(clients)];
  }, [reports]);

  const filteredReports = useMemo(() => {
    let result = reports;

    if (activeClient !== 'Todos') {
      result = result.filter(report => report.client === activeClient);
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        report =>
          report.title.toLowerCase().includes(lowerTerm) ||
          report.excerpt.toLowerCase().includes(lowerTerm) ||
          report.client.toLowerCase().includes(lowerTerm)
      );
    }

    return result;
  }, [reports, searchTerm, activeClient]);

  const featured = filteredReports[0];
  const gridReports = filteredReports.slice(1);

  const showSearch = reports.length >= SEARCH_THRESHOLD;
  const showFilters = allClients.length > FILTERS_THRESHOLD;

  const formatDate = (dateString: string) =>
    new Date(`${dateString}T12:00:00`).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  return (
    <div className="reports-page">
      {/* Hero */}
      <div className="reports-hero" style={{ paddingTop: '220px', paddingBottom: '120px' }}>
        <span className="reports-hero-badge">Acesso restrito</span>
        <h1>Reports e apresentações</h1>
        <p>
          Materiais que produzimos sobre o Dinn e sobre os resultados com nossos clientes.
        </p>
        {showSearch && (
          <div className="reports-search">
            <input
              type="text"
              placeholder="Busque um report..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <span className="reports-search-icon">
              <Search size={20} />
            </span>
          </div>
        )}
      </div>

      {showFilters && (
        <div className="reports-filters">
          {allClients.map(client => (
            <button
              key={client}
              className={`reports-filter-btn ${activeClient === client ? 'active' : ''}`}
              onClick={() => setActiveClient(client)}
            >
              {client}
            </button>
          ))}
        </div>
      )}

      <div className="reports-container">
        {filteredReports.length === 0 ? (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">Nenhum report encontrado</h3>
            <p className="text-slate-500">Tente ajustar sua busca por outros termos ou clientes.</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeClient}-${searchTerm}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Destaque — report mais recente */}
              {featured && (
                <div
                  className={`reports-featured${gridReports.length === 0 ? ' reports-featured--only' : ''}`}
                >
                  <a href={featured.href} className="block w-full overflow-hidden rounded-xl">
                    <ReportCover report={featured} />
                  </a>
                  <div>
                    <span className="reports-featured-tag">{featured.category}</span>
                    <a href={featured.href} className="block">
                      <h2 className="reports-featured-title">{featured.title}</h2>
                    </a>
                    <p className="reports-featured-excerpt">{featured.excerpt}</p>

                    {featured.highlights && (
                      <div className="reports-highlights">
                        {featured.highlights.map(highlight => (
                          <div key={highlight.label} className="reports-highlight">
                            <div className="reports-highlight-value">{highlight.value}</div>
                            <div className="reports-highlight-label">{highlight.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="reports-featured-meta">{formatDate(featured.publishedAt)}</p>
                    <a href={featured.href} className="reports-featured-link">
                      Abrir apresentação →
                    </a>
                  </div>
                </div>
              )}

              {/* Grid */}
              {gridReports.length > 0 && (
                <div className="reports-grid">
                  {gridReports.map(report => (
                    <a key={report.slug} href={report.href} className="reports-card group">
                      <div
                        className="w-full aspect-video rounded-xl overflow-hidden"
                        style={{ marginBottom: '32px' }}
                      >
                        <ReportCover report={report} />
                      </div>
                      <div className="reports-card-meta">
                        <span className="reports-card-category">{report.category}</span>
                        <span>·</span>
                        <span>{formatDate(report.publishedAt)}</span>
                      </div>
                      <h3 className="reports-card-title">{report.title}</h3>
                      <p className="reports-card-excerpt">{report.excerpt}</p>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

/**
 * Capa gerada em CSS com a mesma paleta do deck (fundo #1F2328 + halo roxo),
 * evitando depender de uma imagem por report.
 */
function ReportCover({ report }: { report: Report }) {
  return (
    <div className="reports-cover">
      <div className="reports-cover-glow" />
      <div className="reports-cover-content">
        <span className="reports-cover-client">{report.client}</span>
        <span className="reports-cover-title">{report.title}</span>
      </div>
    </div>
  );
}
