import { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, RotateCcw } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { DATE_LOCALE, type Lang } from '@/i18n/routes';
import { AppFrame } from '@/components/home/team-visuals';

// Cena do estoque em tempo real: localizar, escolher uma loja compatível,
// consultar agora, ver a resposta com o horário e orientar. É uma simulação
// rotulada: a resposta da loja é de exemplo, o horário é o do clique.
// Serve à home e à página do Localizador.

type Store = { name: string; dist: string; base: string; baseValue: string; eligible: boolean; live: string };
type Step = { title: string; text: string };
type State = { status: 'idle' | 'asking' | 'done'; at?: string };

export function RealtimeScene() {
  const { t, lang } = useTranslation();
  const stores = (t('realtime.stores') as Store[]) ?? [];
  const steps = (t('realtime.steps') as Step[]) ?? [];
  const legend = (t('realtime.legend') as { d1: string; est: string; live: string }) ?? { d1: '', est: '', live: '' };
  const [state, setState] = useState<Record<number, State>>({});
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach((id) => window.clearTimeout(id)), []);

  const ask = (i: number) => {
    setState((s) => ({ ...s, [i]: { status: 'asking' } }));
    const id = window.setTimeout(() => {
      const at = new Date().toLocaleTimeString(DATE_LOCALE[lang as Lang] ?? 'pt-BR', { hour: '2-digit', minute: '2-digit' });
      setState((s) => ({ ...s, [i]: { status: 'done', at } }));
    }, 900);
    timers.current.push(id);
  };

  const reset = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    setState({});
  };

  const values = Object.values(state);
  const anyDone = values.some((v) => v.status === 'done');
  const anyAsking = values.some((v) => v.status === 'asking');
  const active = anyDone ? 4 : anyAsking ? 2 : 1;

  return (
    <div className="rt">
      <ol className="rt-steps" aria-label={t('realtime.stepsLabel') as string}>
        {steps.map((s, i) => (
          <li key={s.title} className={i === active ? 'is-active' : i < active ? 'is-done' : ''} aria-current={i === active ? 'step' : undefined}>
            <span className="rt-step-n" aria-hidden="true">{i + 1}</span>
            <div>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="rt-demo">
        <AppFrame app={t('realtime.app') as string} tag={t('realtime.sim') as string}>
          <div className="rt-address">
            <MapPin size={16} aria-hidden="true" />
            <span><small>{t('realtime.address')}</small> Av. Exemplo, 100 · Campinas</span>
          </div>

          <ul className="rt-stores">
            {stores.map((s, i) => {
              const st = state[i] ?? { status: 'idle' };
              return (
                <li key={s.name} className={`rt-store ${st.status === 'done' ? 'is-live' : ''}`}>
                  <div className="rt-store-head">
                    <strong>{s.name}</strong>
                    <span className="rt-dist">{s.dist}</span>
                  </div>
                  <p className="rt-base">
                    <span className={`rt-chip ${s.base.startsWith('Estim') || s.base.startsWith('Estimated') ? 'is-est' : 'is-d1'}`}>{s.base}</span>
                    <span className="rt-val">{s.baseValue}</span>
                  </p>

                  {s.eligible ? (
                    st.status === 'idle' ? (
                      <button type="button" className="rt-ask" onClick={() => ask(i)}>
                        <Clock size={14} aria-hidden="true" />
                        {t('realtime.ask')}
                      </button>
                    ) : st.status === 'asking' ? (
                      <p className="rt-asking" role="status">{t('realtime.asking')}</p>
                    ) : (
                      <p className="rt-live" role="status">
                        <span className="rt-chip is-live">{t('realtime.answered')} · {t('realtime.at')} {st.at}</span>
                        <span className="rt-val">{s.live}</span>
                      </p>
                    )
                  ) : (
                    <p className="rt-na">{t('realtime.notEligible')}</p>
                  )}
                </li>
              );
            })}
          </ul>

          {anyDone ? (
            <p className="rt-orient">{t('realtime.orient')}</p>
          ) : (
            <p className="rt-hint">{t('realtime.hint')}</p>
          )}

          {values.length > 0 && (
            <button type="button" className="rt-reset" onClick={reset}>
              <RotateCcw size={12} aria-hidden="true" />
              {t('realtime.reset')}
            </button>
          )}
        </AppFrame>

        <ul className="rt-legend">
          <li><i className="is-d1" />{legend.d1}</li>
          <li><i className="is-est" />{legend.est}</li>
          <li><i className="is-live" />{legend.live}</li>
        </ul>
      </div>
    </div>
  );
}
