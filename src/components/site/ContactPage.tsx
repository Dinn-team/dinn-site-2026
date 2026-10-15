import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, MailCheck } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { DEMO_URL } from '@/lib/links';
import { Select, type SelectOption } from '@/components/ui/Select';
import {
  buildPayload,
  isPersonalEmail,
  isValidEmail,
  readUtm,
  submitToHubSpot,
  type ContactValues,
} from '@/lib/contact-form';

type Errors = Partial<Record<'email' | 'company' | 'role' | 'decision' | 'consent', string>>;
type Status = 'idle' | 'sending' | 'done' | 'error';

const EMPTY: ContactValues = { email: '', company: '', role: '', decision: '', name: '' };

// Página /contato: formulário padrão que alimenta o HubSpot como primeira
// camada do funil (estágio "Captado"). Quatro campos obrigatórios, nome
// opcional, bloqueio de e-mail pessoal, consentimento e proteção simples
// contra robô (campo isca + tempo mínimo de preenchimento).
export function ContactPage() {
  const { t, lang } = useTranslation();
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [trap, setTrap] = useState('');
  const openedAt = useRef(Date.now());

  const roles = (t('contact.form.roles') as SelectOption[]) ?? [];
  const decisions = (t('contact.form.decisions') as SelectOption[]) ?? [];
  const steps = (t('contact.after.steps') as { title: string; text: string }[]) ?? [];
  const consentText = t('contact.form.consent') as string;

  const set = (key: keyof ContactValues) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key as keyof Errors]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const pick = (key: 'role' | 'decision') => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): Errors => {
    const er: Errors = {};
    if (!values.email.trim()) er.email = t('contact.errors.required') as string;
    else if (!isValidEmail(values.email)) er.email = t('contact.errors.emailInvalid') as string;
    else if (isPersonalEmail(values.email)) er.email = t('contact.errors.emailPersonal') as string;
    if (!values.company.trim()) er.company = t('contact.errors.required') as string;
    if (!values.role) er.role = t('contact.errors.requiredChoice') as string;
    if (!values.decision) er.decision = t('contact.errors.requiredChoice') as string;
    if (!consent) er.consent = t('contact.errors.consent') as string;
    return er;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) {
      const first = Object.keys(er)[0];
      document.getElementById(`ct-${first}`)?.focus();
      return;
    }
    // Robô: campo isca preenchido ou envio em menos de 3 s. Responde como se
    // tivesse dado certo, sem mandar nada ao HubSpot.
    if (trap || Date.now() - openedAt.current < 3000) {
      setStatus('done');
      return;
    }
    setStatus('sending');
    const utm = readUtm(window.location.search);
    // Página do próprio site de onde a pessoa veio ("fechamento@/plataforma").
    // Referrer de outro domínio (LinkedIn, buscador) não entra aqui: esse
    // vem pelos utm_* do link.
    try {
      if (document.referrer) {
        const ref = new URL(document.referrer);
        if (ref.host === window.location.host && ref.pathname !== window.location.pathname) {
          utm.content = `${utm.content}@${ref.pathname}`.slice(0, 120);
        }
      }
    } catch {
      /* referrer ilegível: segue só com a origem do link */
    }
    const payload = buildPayload(values, {
      lang,
      pageUri: window.location.href.split('#')[0].split('?')[0],
      utm,
      consentText,
    });
    const result = await submitToHubSpot(payload);
    setStatus(result.ok ? 'done' : 'error');
  };

  const fieldProps = (key: keyof Errors) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `ct-${key}-err` : undefined,
  });
  const err = (key: keyof Errors) =>
    errors[key] ? <p className="ct-error" id={`ct-${key}-err`}>{errors[key]}</p> : null;

  return (
    <div className="sp">
      <header className="sp-hero ct-hero">
        <div className="wrap ct-grid">
          <div className="ct-copy">
            <p className="sp-eyebrow">{t('contact.hero.eyebrow')}</p>
            <h1 className="sp-title"><Rich text={t('contact.hero.title') as string} /></h1>
            <p className="sp-lead">{t('contact.hero.lead')}</p>

            <ol className="ct-steps" aria-label={t('contact.after.title') as string}>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="ct-step-n" aria-hidden="true">{i + 1}</span>
                  <p><strong>{s.title}</strong><span>{s.text}</span></p>
                </li>
              ))}
            </ol>
          </div>

          <div className="ct-card">
            {status === 'done' ? (
              <div className="ct-done" role="status">
                <span className="ct-done-icon"><CheckCircle2 size={30} aria-hidden="true" /></span>
                <h2>{t('contact.done.title')}</h2>
                <p>{t('contact.done.text')}</p>
                <div className="ct-done-actions">
                  <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                    {t('contact.done.schedule')}
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <a className="ct-link" href="/">{t('contact.done.home')}</a>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate aria-labelledby="ct-form-title">
                <h2 id="ct-form-title" className="ct-form-title">{t('contact.form.title')}</h2>
                <p className="ct-form-lead">{t('contact.form.lead')}</p>

                <div className="ct-field">
                  <label htmlFor="ct-email">{t('contact.form.email')}</label>
                  <input
                    id="ct-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder={t('contact.form.emailPlaceholder') as string}
                    value={values.email}
                    onChange={set('email')}
                    {...fieldProps('email')}
                  />
                  {errors.email ? err('email') : <p className="ct-hint">{t('contact.form.emailHint')}</p>}
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-company">{t('contact.form.company')}</label>
                  <input
                    id="ct-company"
                    type="text"
                    autoComplete="organization"
                    value={values.company}
                    onChange={set('company')}
                    {...fieldProps('company')}
                  />
                  {err('company')}
                </div>

                <div className="ct-row">
                  <div className="ct-field">
                    <label htmlFor="ct-role">{t('contact.form.role')}</label>
                    <Select
                      id="ct-role"
                      value={values.role}
                      onChange={pick('role')}
                      options={roles}
                      placeholder={t('contact.form.choose') as string}
                      invalid={Boolean(errors.role)}
                      describedBy={errors.role ? 'ct-role-err' : undefined}
                    />
                    {err('role')}
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-decision">{t('contact.form.decision')}</label>
                    <Select
                      id="ct-decision"
                      value={values.decision}
                      onChange={pick('decision')}
                      options={decisions}
                      placeholder={t('contact.form.choose') as string}
                      invalid={Boolean(errors.decision)}
                      describedBy={errors.decision ? 'ct-decision-err' : undefined}
                      align="end"
                    />
                    {err('decision')}
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-name">
                    {t('contact.form.name')} <span className="ct-optional">{t('contact.form.optional')}</span>
                  </label>
                  <input id="ct-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} />
                </div>

                {/* campo isca: pessoas não veem; robôs costumam preencher */}
                <div className="ct-trap" aria-hidden="true">
                  <label htmlFor="ct-website">Website</label>
                  <input id="ct-website" type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
                </div>

                <div className="ct-consent">
                  <label>
                    <input
                      id="ct-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (errors.consent) setErrors((er) => ({ ...er, consent: undefined }));
                      }}
                      {...fieldProps('consent')}
                    />
                    <span>
                      {consentText}{' '}
                      <a href="/politicas-de-privacidade" target="_blank" rel="noopener noreferrer">{t('contact.form.privacy')}</a>
                    </span>
                  </label>
                  {err('consent')}
                </div>

                {status === 'error' && (
                  <p className="ct-error ct-error-box" role="alert">
                    {t('contact.errors.submit')}{' '}
                    <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">{t('contact.errors.submitLink')}</a>.
                  </p>
                )}

                <button type="submit" className="btn btn-primary btn-lg ct-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                  {status !== 'sending' && <ArrowRight size={18} aria-hidden="true" />}
                </button>
                <p className="ct-fine"><MailCheck size={14} aria-hidden="true" /> {t('contact.form.fine')}</p>
              </form>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
