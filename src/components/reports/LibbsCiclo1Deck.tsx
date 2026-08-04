import { useCallback, useEffect, useRef, useState } from 'react';

const TOTAL = 5;
const TRANSITION_MS = 720;

const POINTS = [
  {
    n: '01',
    title: 'Confiabilidade das informações de estoque',
    body: 'O principal feedback estava relacionado à confiança nas informações do Dinn. Atualizamos o status dos PDVs e a classificação do índice FTI no modal da farmácia, deixando mais transparente a confiabilidade do estoque. A nova versão do modelo Dinn Andromeda foi feita justamente para aumentar essa precisão. Desde a implantação, em 8 de julho, não recebemos novos relatos sobre o tema.',
  },
  {
    n: '02',
    title: 'Localização de medicamentos e PDVs',
    body: 'Havia um limite de até 50 PDVs por consulta, criado para otimizar a performance da plataforma — o que em algumas regiões passava a impressão de que não existiam mais estabelecimentos ou produtos disponíveis. Corrigimos esse comportamento: hoje o usuário pode usar filtros mais completos para visualizar exatamente os PDVs desejados, tanto no mapa quanto na listagem.',
  },
  {
    n: '03',
    title: 'Problemas nas análises de mercado',
    body: 'Os casos de telas em branco e informações nulas já foram corrigidos. Eles estavam ligados à tecnologia do painel atual, que já está em processo de modernização. Estamos desenvolvendo uma nova versão do painel para eliminar esse tipo de inconsistência e oferecer uma experiência mais estável.',
  },
  {
    n: '04',
    title: 'Base cadastral',
    body: 'As inconsistências na cobertura de PDVs, cidades e estabelecimentos foram tratadas junto com a evolução do Localizador de Medicamentos, ampliando a cobertura e a qualidade dos resultados apresentados.',
  },
  {
    n: '05',
    title: 'Exportação de dados',
    body: 'As análises indicaram que os relatos estavam ligados, principalmente, a restrições de navegadores ou dispositivos (como tablets) que bloqueiam o download. Não identificamos um problema interno na funcionalidade de exportação do Dinn.',
  },
  {
    n: '06',
    title: 'Melhorias de usabilidade',
    body: 'Todas as sugestões de evolução recebidas foram incorporadas ao planejamento da nova versão do painel. Elas serão entregues junto com a atualização tecnológica mencionada, para uma navegação mais intuitiva e eficiente.',
  },
];

const COVER_BACKGROUND_IMAGE = [
  'radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,255,255,0.9), transparent 60%)',
  'radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,0.7), transparent 60%)',
  'radial-gradient(1.5px 1.5px at 40% 15%, rgba(255,255,255,0.8), transparent 60%)',
  'radial-gradient(1px 1px at 55% 35%, rgba(255,255,255,0.6), transparent 60%)',
  'radial-gradient(1.5px 1.5px at 70% 25%, rgba(255,255,255,0.9), transparent 60%)',
  'radial-gradient(1px 1px at 85% 10%, rgba(255,255,255,0.7), transparent 60%)',
  'radial-gradient(1px 1px at 15% 8%, rgba(255,255,255,0.6), transparent 60%)',
  'radial-gradient(1.5px 1.5px at 90% 40%, rgba(255,255,255,0.8), transparent 60%)',
  'radial-gradient(1px 1px at 5% 35%, rgba(255,255,255,0.5), transparent 60%)',
  'radial-gradient(1px 1px at 65% 8%, rgba(255,255,255,0.6), transparent 60%)',
  'radial-gradient(1px 1px at 35% 30%, rgba(255,255,255,0.5), transparent 60%)',
  'radial-gradient(1px 1px at 78% 18%, rgba(255,255,255,0.6), transparent 60%)',
  'radial-gradient(circle at 85% 15%, rgba(86,37,242,0.25), transparent 55%)',
  'linear-gradient(to bottom, #181b22 0%, #1c1f3a 32%, #241f42 55%, #1F2328 82%)',
].join(',');

const sectionBase: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 clamp(32px,8vw,120px)',
  boxSizing: 'border-box',
};

const eyebrow: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#8B6EF2',
};

export default function LibbsCiclo1Deck() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);
  const pointsRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, next));
    if (clamped === indexRef.current) return;
    indexRef.current = clamped;
    animatingRef.current = true;
    setIndex(clamped);
    window.setTimeout(() => {
      animatingRef.current = false;
    }, TRANSITION_MS);
  }, []);

  /**
   * O painel de ações (slide 4) rola por dentro. Só passamos para o próximo
   * slide quando esse scroll interno chega na borda.
   */
  const innerBlocksScroll = useCallback((target: EventTarget | null, direction: number) => {
    const el = pointsRef.current;
    if (!el || !(target instanceof Node) || !el.contains(target)) return false;

    const innerScrollable = el.scrollHeight > el.clientHeight + 2;
    if (!innerScrollable) return false;

    const atBoundary =
      direction > 0 ? el.scrollTop + el.clientHeight >= el.scrollHeight - 2 : el.scrollTop <= 2;

    return !atBoundary;
  }, []);

  // React registra onWheel como listener passivo, então preventDefault() seria
  // ignorado. Anexamos o listener nativo com { passive: false }.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      const direction = e.deltaY > 0 ? 1 : -1;
      if (innerBlocksScroll(e.target, direction)) return;

      e.preventDefault();
      if (animatingRef.current) return;
      if (e.deltaY > 8) go(indexRef.current + 1);
      else if (e.deltaY < -8) go(indexRef.current - 1);
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [go, innerBlocksScroll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        go(indexRef.current + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        go(indexRef.current - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  // Swipe vertical — sem isso o deck fica travado no primeiro slide no celular.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const start = touchStartY.current;
      touchStartY.current = null;
      if (start === null) return;

      const end = e.changedTouches[0]?.clientY;
      if (end === undefined) return;

      const delta = start - end;
      if (Math.abs(delta) < 48) return;

      const direction = delta > 0 ? 1 : -1;
      if (innerBlocksScroll(e.target, direction)) return;
      if (animatingRef.current) return;

      go(indexRef.current + direction);
    };

    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchend', onTouchEnd);
    };
  }, [go, innerBlocksScroll]);

  return (
    <div
      ref={rootRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#1F2328',
        fontFamily: "'Britti Sans','Helvetica Neue',sans-serif",
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          height: `${TOTAL * 100}vh`,
          transition: `transform ${TRANSITION_MS / 1000}s cubic-bezier(0.65,0,0.15,1)`,
          transform: `translateY(-${index * 100}vh)`,
        }}
      >
        {/* 01 — CAPA */}
        <section
          style={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box',
            backgroundColor: '#1F2328',
            backgroundImage: COVER_BACKGROUND_IMAGE,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '-160%',
              transform: 'translateX(-50%)',
              width: '220%',
              height: '160vh',
              borderRadius: '50%',
              background: '#1F2328',
              boxShadow: '0 -60px 140px rgba(124,92,252,0.32), inset 0 40px 80px rgba(0,0,0,0.4)',
              borderTop: '1px solid rgba(139,110,242,0.4)',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '0 clamp(32px,8vw,120px)',
              paddingBottom: '22vh',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#B39CFF',
                background: 'rgba(86,37,242,0.12)',
                border: '1px solid rgba(86,37,242,0.35)',
                borderRadius: '999px',
                padding: '6px 16px',
                marginBottom: '28px',
              }}
            >
              Relatório de ciclo · Libbs
            </div>
            <h1
              style={{
                fontSize: 'clamp(40px,6vw,84px)',
                fontWeight: 700,
                lineHeight: 1.04,
                margin: '0 0 24px 0',
                maxWidth: '14ch',
              }}
            >
              Dinn Report Libbs
              <br />
              <span style={{ color: '#8B6EF2' }}>1º Ciclo</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(16px,1.6vw,22px)',
                lineHeight: 1.6,
                color: '#B8BFC7',
                maxWidth: '44ch',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Análise construída a partir dos reports enviados pelos usuários Libbs, pelo formulário
              de pesquisa e pelo canal de suporte.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '48px',
                color: '#B8BFC7',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              <span>Role para começar</span>
              <span style={{ display: 'inline-block' }}>↓</span>
            </div>
          </div>
        </section>

        {/* 02 — DISTRIBUIÇÃO */}
        <section style={sectionBase}>
          <div style={{ width: '100%', maxWidth: '1100px' }}>
            <div style={{ ...eyebrow, marginBottom: '16px' }}>Distribuição dos feedbacks</div>
            <h2
              style={{
                fontSize: 'clamp(28px,3.4vw,44px)',
                fontWeight: 700,
                margin: '0 0 48px 0',
                maxWidth: '20ch',
              }}
            >
              Dos 17 feedbacks analisados, o que eles nos disseram
            </h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(40px,6vw,96px)',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: 'min(280px,38vw)',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  background:
                    'conic-gradient(#7C5CFC 0% 65%, #4C3796 65% 90%, #2A2F58 90% 100%)',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '18%',
                    borderRadius: '50%',
                    background: '#1F2328',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700 }}>17</div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#767E8A',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                    }}
                  >
                    feedbacks
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  minWidth: '280px',
                  flex: 1,
                }}
              >
                {[
                  {
                    color: '#7C5CFC',
                    value: '≈ 65%',
                    label: 'Melhorias ou correções de funcionalidades existentes',
                  },
                  {
                    color: '#4C3796',
                    value: '≈ 25%',
                    label: 'Qualidade dos dados (estoque e cadastro)',
                  },
                  { color: '#2A2F58', value: '≈ 10%', label: 'Problemas técnicos pontuais' },
                ].map(item => (
                  <div key={item.value} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '4px',
                        background: item.color,
                        marginTop: '6px',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '26px', fontWeight: 700 }}>{item.value}</div>
                      <div style={{ fontSize: '15px', color: '#B8BFC7', fontWeight: 300 }}>
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 — CSAT */}
        <section
          style={{
            ...sectionBase,
            background:
              'radial-gradient(circle at 15% 85%, rgba(86,37,242,0.22), transparent 55%), #1F2328',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(40px,7vw,110px)',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'min(300px,40vw)',
                aspectRatio: '1',
                borderRadius: '50%',
                background:
                  'conic-gradient(#7C5CFC 0% 67.1%, rgba(255,255,255,0.08) 67.1% 100%)',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '14%',
                  borderRadius: '50%',
                  background: '#1F2328',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ fontSize: 'clamp(40px,4.6vw,60px)', fontWeight: 700, lineHeight: 1 }}>
                  3,35
                </div>
                <div style={{ fontSize: '14px', color: '#767E8A', fontWeight: 600 }}>de 5,0</div>
              </div>
            </div>
            <div>
              <div style={{ ...eyebrow, marginBottom: '16px' }}>
                CSAT · Customer Satisfaction Score
              </div>
              <div
                style={{
                  fontSize: 'clamp(36px,4.4vw,56px)',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                67,1% de satisfação
              </div>
              <p
                style={{
                  fontSize: '17px',
                  color: '#B8BFC7',
                  fontWeight: 300,
                  maxWidth: '36ch',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Total de 17 respostas, com nota média de 3,35 de 5,0 — o ponto de partida deste
                ciclo de melhorias.
              </p>
            </div>
          </div>
        </section>

        {/* 04 — AÇÕES */}
        <section style={sectionBase}>
          <div
            style={{
              width: '100%',
              maxWidth: '920px',
              height: '82vh',
              marginTop: '64px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ ...eyebrow, marginBottom: '14px', flexShrink: 0 }}>Ações realizadas</div>
            <h2
              style={{
                fontSize: 'clamp(24px,2.8vw,36px)',
                fontWeight: 700,
                margin: '0 0 8px 0',
                flexShrink: 0,
              }}
            >
              O que fizemos com cada ponto levantado
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: '#B8BFC7',
                fontWeight: 300,
                margin: '0 0 28px 0',
                maxWidth: '60ch',
                flexShrink: 0,
              }}
            >
              Analisamos os feedbacks recebidos da equipe Libbs e compartilhamos abaixo as ações
              tomadas para cada ponto.
            </p>
            <div
              className="dr-scroll"
              ref={pointsRef}
              style={{
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingRight: '10px',
                paddingBottom: '90px',
              }}
            >
              {POINTS.map(point => (
                <div
                  key={point.n}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '22px 26px',
                    display: 'flex',
                    gap: '18px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#7C5CFC',
                      flexShrink: 0,
                      width: '32px',
                    }}
                  >
                    {point.n}
                  </div>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>
                      {point.title}
                    </div>
                    <div
                      style={{
                        fontSize: '14.5px',
                        color: '#B8BFC7',
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      {point.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — ENCERRAMENTO */}
        <section
          style={{
            ...sectionBase,
            textAlign: 'center',
            background:
              'radial-gradient(circle at 50% 100%, rgba(86,37,242,0.25), transparent 60%), #1F2328',
          }}
        >
          <div style={{ maxWidth: '760px' }}>
            <div style={{ ...eyebrow, marginBottom: '24px' }}>Obrigado, Libbs</div>
            <p
              style={{
                fontSize: 'clamp(20px,2.4vw,30px)',
                fontWeight: 300,
                lineHeight: 1.55,
                color: '#F2F2F4',
                margin: 0,
              }}
            >
              Agradecemos pelos feedbacks enviados. Eles foram fundamentais para direcionar as
              melhorias que já estão em produção e para a evolução contínua da plataforma Dinn.
            </p>
          </div>
        </section>
      </div>

      {/* Contador + volta para a listagem */}
      <div
        style={{
          position: 'fixed',
          top: '32px',
          left: 'clamp(24px,5vw,64px)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '12px',
          fontWeight: 600,
          color: '#767E8A',
          letterSpacing: '0.04em',
          zIndex: 20,
        }}
      >
        <a
          href="/reports"
          style={{ color: '#767E8A', textDecoration: 'none' }}
          aria-label="Voltar para a lista de reports"
        >
          ←
        </a>
        <span>
          <span style={{ color: '#fff' }}>Dinn</span> · Libbs ·{' '}
          {String(index + 1).padStart(2, '0')}/{String(TOTAL).padStart(2, '0')}
        </span>
      </div>

      {/* Navegação por pontos */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          right: 'clamp(20px,4vw,48px)',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 20,
        }}
      >
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir para a tela ${i + 1}`}
            aria-current={i === index}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index ? '#7C5CFC' : 'rgba(255,255,255,0.25)',
              transition: 'background 0.25s, transform 0.25s',
              transform: i === index ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Anterior / próximo */}
      <div
        style={{
          position: 'fixed',
          bottom: '32px',
          right: 'clamp(20px,4vw,48px)',
          display: 'flex',
          gap: '12px',
          zIndex: 20,
        }}
      >
        <button
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Tela anterior"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.03)',
            color: '#fff',
            fontSize: '18px',
            cursor: index === 0 ? 'default' : 'pointer',
            opacity: index === 0 ? 0.3 : 1,
          }}
        >
          ↑
        </button>
        <button
          onClick={() => go(index + 1)}
          disabled={index === TOTAL - 1}
          aria-label="Próxima tela"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.03)',
            color: '#fff',
            fontSize: '18px',
            cursor: index === TOTAL - 1 ? 'default' : 'pointer',
            opacity: index === TOTAL - 1 ? 0.3 : 1,
          }}
        >
          ↓
        </button>
      </div>
    </div>
  );
}
