import { ArrowLeft, ChevronDown, ChevronRight, CircleCheck, ImagePlus, LifeBuoy, Plus, Send, X, XCircle } from 'lucide-react';
import { useMemo } from 'react';
import { useDemo, type Def, type DemoProps } from './AppDemos';
import { localizeDef, useDemoT } from './demoI18n';
import { RFrame, RPage, RTop } from './RealKit';

// Suporte do Dinn, fiel ao app (prints de nov/2026): lista de pedidos, janela
// "Novo pedido" e a conversa com a Zoe. Dados fictícios.

const SUBJECT = 'Estoque da Drogaria Exemplo parado';
const DESC = 'O estoque da Drogaria Exemplo (CNPJ 00.000.000/0001-00) está parado desde segunda.';
const REPLY = 'Olá, obrigada por avisar. Conferi o cadastro da Drogaria Exemplo: a última leitura de estoque foi na segunda, às 08:12. O arquivo de estoque não chegou desde então. Peça ao responsável pelo PDV para reenviar. Depois eu confiro de novo.';
const ZOE = '/suporte/zoe-256.webp';

const TIPS = ['Nome e CNPJ do PDV (a loja)', 'Produto ou código de barras (EAN)', 'Print da tela mostrando o problema', 'Desde quando acontece', 'O que você esperava ver'];

const SUP_DEF: Def = {
  beats: [
    // Planos: tela inteira → "Novo pedido" → janela preenchida → conversa → resposta da Zoe.
    { wait: 1300 },
    { shot: 'new', z: 0.7, to: 'new', click: true, phase: 1, wait: 500 },
    { shot: 'dlg', z: 0.95, to: 'f-subj', click: true, type: ['subj', SUBJECT], wait: 200 },
    { to: 'f-desc', click: true, type: ['desc', DESC], phase: 2, wait: 500 },
    { to: 'send', click: true, phase: 3, wait: 1500, cam: { at: 'thread', z: 0.95 } },
    { phase: 4, wait: 2200 },
    { phase: 5, wait: 2800, cam: { at: 'thread', z: 1 } },
    { shot: 'wide', wait: 1500 },
  ],
  steps: [{ phase: 0, to: 'new' }, { phase: 2, to: 'dlg' }, { phase: 4, to: 'thread' }, { phase: 5, to: 'reply' }],
  final: 5,
};

// O laço do roteiro só reinicia quando o componente remonta. Por isso a troca de
// idioma remonta o miolo (key={lang}) com o roteiro já traduzido.
export function SupportDemo(props: DemoProps) {
  const { lang } = useDemoT();
  return <SupportDemoInner key={lang} {...props} />;
}

function SupportDemoInner({ step, def = SUP_DEF }: DemoProps) {
  const { t, lang } = useDemoT();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ldef = useMemo(() => localizeDef(def, t), [def, lang]);
  const { app, phase, typed, cur, tg } = useDemo(ldef, step);
  const SUBJECT_T = t(SUBJECT);
  const DESC_T = t(DESC);
  const subj = phase >= 2 ? SUBJECT_T : typed.subj ?? '';
  const desc = phase >= 3 ? DESC_T : typed.desc ?? (phase >= 2 ? DESC_T : '');
  const dlg = phase >= 1 && phase < 3;
  const thread = phase >= 3;
  return (
    <RFrame app={app} cur={cur} nav="support" label={t('Tela Suporte do Dinn: a pessoa abre um novo pedido, descreve o problema e a Zoe, assistente do Dinn, responde na conversa.')}>
      <RPage top={<RTop crumb={t('Suporte')} actions={false} />}>
        {!thread ? (
          <div className="rs-col">
            <div className="rs-head">
              <h3>{t('Suporte')}</h3>
              <p>{t('Tire dúvidas e resolva problemas com a Zoe, nossa assistente. Quando precisar, a equipe Dinn assume.')}</p>
              <span className="rs-new" {...tg('new')}><Plus size={17} />{t('Novo pedido')}</span>
            </div>
            <section className="rl-card rs-how">
              <h4><LifeBuoy size={18} />{t('Como abrir um bom pedido')}</h4>
              <p>{t('Quanto mais detalhes você der, mais rápido a gente resolve. Deixe à mão:')}</p>
              <ul>{TIPS.map((tip) => <li key={tip}><CircleCheck size={18} />{t(tip)}</li>)}</ul>
              <p className="rs-fine">{t('A Zoe consulta os dados da sua empresa, mas não altera nada. Quando a solução precisa de uma pessoa, ela encaminha o pedido para a equipe.')}</p>
            </section>
            <div className="rs-tabs"><span>{t('Em andamento')} <i>(0)</i></span><span className="on">{t('Aguardando você')} <i>(1)</i></span><span>{t('Encerrados')} <i>(0)</i></span></div>
            <div className="rl-card rs-ticket">
              <p><small>SAU-0001</small><u>{t('Aguardando sua resposta')}</u></p>
              <b>{t('Preço do Gastrolev na Rede Farmacore')}</b>
              <small>{t('Última atividade ontem')}</small>
              <ChevronRight size={18} />
            </div>
          </div>
        ) : (
          <div className="rs-col rs-thread" {...tg('thread')}>
            <p className="rs-back"><ArrowLeft size={16} />{t('Voltar para Suporte')}</p>
            <div className="rs-tt">
              <p><small>SAU-0002</small><span className="rl-badge rs-att">{t('Em atendimento')}</span></p>
              <span className="rs-end"><XCircle size={16} />{t('Encerrar pedido')}</span>
            </div>
            <h3>{SUBJECT_T}</h3>
            <div className="rl-card rs-chat">
              <p className="rs-date">{t('5 de novembro de 2026')}</p>
              <div className="rs-me rl-in"><p><b>{t('Você')}</b><small>14:18</small></p>{DESC_T}<small>✓ {t('Enviada')}</small></div>
              {phase === 4 && <p className="rs-think rl-in"><img src={ZOE} alt="" width={36} height={36} />{t('Pensando')} <i /><i /><i /></p>}
              {phase >= 5 && (
                <div className="rs-zoe rl-in" {...tg('reply')}>
                  <img src={ZOE} alt="" width={36} height={36} />
                  <p><b>Zoe</b><small>14:19</small></p>
                  <span>{t(REPLY)}</span>
                </div>
              )}
            </div>
            <div className="rs-reply">{t('Escreva sua resposta')}</div>
            <div className="rs-foot"><span className="rl-pill"><ImagePlus size={15} />{t('Anexar print')}</span><small>0/4000</small><span className="rs-send off"><Send size={15} />{t('Enviar')}</span></div>
          </div>
        )}
      </RPage>
      {dlg && (
        <>
          <div className="rl-veil" />
          <div className="rl-dlg" {...tg('dlg')}>
            <header><h3>{t('Novo pedido')}</h3><X size={18} /></header>
            <p className="rs-sub">{t('Conte o que está acontecendo. A Zoe responde aqui mesmo.')}</p>
            <label>{t('Assunto')}</label>
            <div className={`rs-field ${phase === 1 && typed.subj !== undefined ? 'focus' : ''}`} {...tg('f-subj')}>{subj || <span className="ph">{t('Resuma em uma frase')}</span>}</div>
            <label>{t('O que está acontecendo?')}</label>
            <div className={`rs-field rs-area ${typed.desc !== undefined && phase < 2 ? 'focus' : ''}`} {...tg('f-desc')}>{desc || <span className="ph">{t('Conte com detalhes')}</span>}</div>
            <small className="rs-count">{desc.length}/4000</small>
            <label>{t('Tipo de pedido (opcional)')}</label>
            <div className="rs-field rs-sel">{t('Não sei dizer')}<ChevronDown size={16} /></div>
            <label>{t('Print da tela')}</label>
            <span className="rl-pill rs-att-btn"><ImagePlus size={15} />{t('Anexar print')}</span>
            <small className="rs-hint">{t('PNG, JPG, WEBP ou GIF. Até 3 imagens. Reduzimos o tamanho sozinhos.')}</small>
            <footer><span className="rl-pill">{t('Cancelar')}</span><span className={`rs-send ${desc ? '' : 'off'}`} {...tg('send')}>{t('Enviar pedido')}</span></footer>
          </div>
        </>
      )}
    </RFrame>
  );
}
