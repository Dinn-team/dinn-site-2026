import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Download, X } from 'lucide-react';
import { Select, type SelectOption } from '@/components/ui/Select';
import {
  buildStudyPayload,
  isPersonalEmail,
  isValidEmail,
  readHutk,
  submitToHubSpot,
  type StudyLeadValues,
} from '@/lib/contact-form';
import { originFields, readJourney } from '@/lib/journey';

// Modal de download do estudo completo. Uma ilha por página: qualquer botão com
// `data-study-download` abre o modal (os botões saem prontos no HTML do build).
//
// Quatro campos (nome, empresa, função e e-mail corporativo). O botão de baixar só
// fica ativo com os quatro válidos. O envio vai para o mesmo formulário do HubSpot do
// /contato (fluxo de atendimento nível 1 da Lia), marcado como "Relatórios e Estudos de
// Mercado". Com o HubSpot aceitando, o PDF baixa no aparelho da pessoa.

type Lang = 'pt' | 'en' | 'es';

export type StudyDownloadLabels = {
  title: string;
  lead: string;
  name: string;
  company: string;
  role: string;
  rolePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  language: string;
  submit: string;
  sending: string;
  consent: string;
  doneTitle: string;
  doneText: string;
  again: string;
  error: string;
  close: string;
  langNames: Record<Lang, string>;
  errors: { required: string; requiredChoice: string; emailInvalid: string; emailPersonal: string };
};

type FileInfo = { file: string; title: string };

type Props = {
  lang: Lang;
  slug: string;
  files: Record<Lang, FileInfo>;
  roles: SelectOption[];
  labels: StudyDownloadLabels;
};

type Status = 'idle' | 'sending' | 'done' | 'error';

const EMPTY: StudyLeadValues = { name: '', company: '', role: '', email: '' };
const LANGS: Lang[] = ['pt', 'en', 'es'];

function emailError(value: string, errors: StudyDownloadLabels['errors']): string {
  if (!value.trim()) return errors.required;
  if (!isValidEmail(value)) return errors.emailInvalid;
  if (isPersonalEmail(value)) return errors.emailPersonal;
  return '';
}

function startDownload(href: string) {
  const a = document.createElement('a');
  a.href = href;
  a.download = href.split('/').pop() ?? 'dinn-estudo.pdf';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function StudyDownload({ lang, slug, files, roles, labels }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openedAt = useRef(0);
  const [values, setValues] = useState<StudyLeadValues>(EMPTY);
  const [fileLang, setFileLang] = useState<Lang>(lang);
  const [emailTouched, setEmailTouched] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [trap, setTrap] = useState('');

  // Qualquer botão da página com `data-study-download` abre o modal.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('[data-study-download]');
      if (!target) return;
      event.preventDefault();
      openedAt.current = Date.now();
      if (status !== 'done') setStatus('idle');
      dialogRef.current?.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [status]);

  const close = () => dialogRef.current?.close();

  const emailMsg = emailError(values.email, labels.errors);
  const valid = Boolean(values.name.trim() && values.company.trim() && values.role && !emailMsg);
  const href = files[fileLang].file;

  const set = (key: keyof StudyLeadValues) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!valid || status === 'sending') return;
    // Robô: campo isca preenchido ou envio em menos de 3 s. Nada vai ao HubSpot.
    if (trap || Date.now() - openedAt.current < 3000) {
      setStatus('done');
      return;
    }
    setStatus('sending');
    const origin = originFields(readJourney(), {
      path: window.location.pathname,
      search: window.location.search,
      referrer: document.referrer,
      host: window.location.host,
    });
    const consentText = labels.consent.replace(/<[^>]+>/g, '');
    const payload = buildStudyPayload(values, {
      lang,
      pageUri: window.location.href.split('#')[0].split('?')[0],
      slug,
      title: files.pt.title,
      fileLang,
      consentText,
      utm: origin.campaign,
      hutk: readHutk(),
      journey: origin,
    });
    const result = await submitToHubSpot(payload);
    // Sem o GUID do formulário (só no computador de quem desenvolve), o download segue
    // para dar para testar a tela. Em produção o envio precisa dar certo.
    const devBypass = !result.ok && result.reason === 'not-configured' && import.meta.env.DEV;
    if (result.ok || devBypass) {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', 'generate_lead', {
        form: 'estudos_de_mercado',
        lead_content: `estudo:${slug}`,
        lead_channel: [origin.campaign.source || 'site', origin.campaign.medium || 'organic'].join('/'),
      });
      startDownload(href);
      setStatus('done');
      return;
    }
    setStatus('error');
  };

  const showEmailError = emailTouched && Boolean(emailMsg);

  return (
    <dialog
      ref={dialogRef}
      className="sm-dl"
      aria-labelledby="sm-dl-title"
      onClick={(e) => {
        // Clique fora da caixa (no fundo escuro) fecha.
        if (e.target === dialogRef.current) close();
      }}
    >
      <div className="sm-dl-box">
        <button type="button" className="sm-dl-close" onClick={close} aria-label={labels.close}>
          <X size={20} aria-hidden="true" />
        </button>

        {status === 'done' ? (
          <div className="ct-done" role="status">
            <span className="ct-done-icon"><CheckCircle2 size={30} aria-hidden="true" /></span>
            <h2 id="sm-dl-title">{labels.doneTitle}</h2>
            <p>{labels.doneText}</p>
            <div className="ct-done-actions">
              <a className="btn btn-primary" href={href} download>
                <Download size={17} aria-hidden="true" />
                {labels.again}
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <h2 id="sm-dl-title" className="ct-form-title">{labels.title}</h2>
            <p className="sm-dl-study">{files[lang].title}</p>
            <p className="ct-form-lead">{labels.lead}</p>

            <div className="ct-row">
              <div className="ct-field">
                <label htmlFor="sm-name">{labels.name}</label>
                <input id="sm-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} required />
              </div>
              <div className="ct-field">
                <label htmlFor="sm-company">{labels.company}</label>
                <input id="sm-company" type="text" autoComplete="organization" value={values.company} onChange={set('company')} required />
              </div>
            </div>

            <div className="ct-field">
              <label htmlFor="sm-role" id="sm-role-label">{labels.role}</label>
              <Select
                id="sm-role"
                value={values.role}
                onChange={(role) => setValues((v) => ({ ...v, role }))}
                options={roles}
                placeholder={labels.rolePlaceholder}
              />
            </div>

            <div className="ct-field">
              <label htmlFor="sm-email">{labels.email}</label>
              <input
                id="sm-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={labels.emailPlaceholder}
                value={values.email}
                onChange={set('email')}
                onBlur={() => setEmailTouched(true)}
                aria-invalid={showEmailError || undefined}
                aria-describedby={showEmailError ? 'sm-email-err' : undefined}
                required
              />
              {showEmailError && <p id="sm-email-err" className="ct-error">{emailMsg}</p>}
            </div>

            <fieldset className="sm-dl-langs">
              <legend>{labels.language}</legend>
              <div className="ct-chips" role="radiogroup">
                {LANGS.map((code) => (
                  <label key={code} className={`ct-chip ${fileLang === code ? 'is-on' : ''}`}>
                    <input type="radio" name="sm-lang" value={code} checked={fileLang === code} onChange={() => setFileLang(code)} />
                    {labels.langNames[code]}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="ct-trap" aria-hidden="true">
              <label htmlFor="sm-website">Website</label>
              <input id="sm-website" type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
            </div>

            {status === 'error' && (
              <p className="ct-error ct-error-box" role="alert">{labels.error}</p>
            )}

            <button type="submit" className="btn btn-primary btn-lg ct-submit" disabled={!valid || status === 'sending'}>
              {status === 'sending' ? labels.sending : labels.submit}
              {status !== 'sending' && <ArrowRight size={18} aria-hidden="true" />}
            </button>

            {/* Texto fixo do dicionário do site (com o link da política), não vem do visitante. */}
            <p className="sm-dl-consent" dangerouslySetInnerHTML={{ __html: labels.consent }} />
          </form>
        )}
      </div>
    </dialog>
  );
}
