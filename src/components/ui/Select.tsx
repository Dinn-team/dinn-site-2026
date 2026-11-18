import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Check, ChevronDown } from 'lucide-react';

// Seletor próprio do site, no lugar do <select> nativo: a lista do navegador
// não aceita estilo (cantos retos, cor do sistema). Aqui o painel segue o mesmo
// visual dos menus do cabeçalho: fundo branco, cantos arredondados, sombra
// suave e destaque lilás. Padrão ARIA "select-only combobox": teclado completo
// (setas, Home, End, Enter, Espaço, Esc, letra inicial), leitor de tela e
// fechamento ao clicar fora.

export type SelectOption = { value: string; label: string };

export function Select({
  id,
  value,
  onChange,
  options,
  placeholder,
  invalid,
  describedBy,
  align = 'start',
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  invalid?: boolean;
  describedBy?: string;
  /** Lado em que o painel se alinha ao botão, quando for mais largo que ele. */
  align?: 'start' | 'end';
}) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typed = useRef({ text: '', at: 0 });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [up, setUp] = useState(false);

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : null;

  const openList = () => {
    // abre para cima quando falta espaço embaixo
    const r = rootRef.current?.getBoundingClientRect();
    if (r) setUp(window.innerHeight - r.bottom < 280 && r.top > window.innerHeight - r.bottom);
    setActive(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  };
  const close = () => setOpen(false);

  const choose = (index: number) => {
    const o = options[index];
    if (!o) return;
    onChange(o.value);
    close();
  };

  // fecha ao clicar ou tocar fora
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, [open]);

  // mantém a opção ativa visível na lista
  useEffect(() => {
    if (!open || active < 0) return;
    listRef.current?.children[active]?.scrollIntoView({ block: 'nearest' });
  }, [open, active]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) openList();
        else setActive((a) => Math.min(last, a + 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) openList();
        else setActive((a) => Math.max(0, a - 1));
        break;
      case 'Home':
        if (open) { e.preventDefault(); setActive(0); }
        break;
      case 'End':
        if (open) { e.preventDefault(); setActive(last); }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!open) openList();
        else choose(active);
        break;
      case 'Escape':
        if (open) { e.preventDefault(); e.stopPropagation(); close(); }
        break;
      case 'Tab':
        if (open) close();
        break;
      default:
        // letra inicial: pula para a próxima opção que começa com ela
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          const now = Date.now();
          typed.current.text = now - typed.current.at < 700 ? typed.current.text + e.key.toLowerCase() : e.key.toLowerCase();
          typed.current.at = now;
          const from = open ? active + 1 : selectedIndex + 1;
          const order = [...options.keys()].map((i) => (i + from) % options.length);
          const hit = order.find((i) => options[i].label.toLowerCase().startsWith(typed.current.text));
          if (hit !== undefined) {
            if (!open) openList();
            setActive(hit);
          }
        }
    }
  };

  return (
    <div ref={rootRef} className={`dd ${open ? 'is-open' : ''}`}>
      <button
        id={id}
        type="button"
        role="combobox"
        className="dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open && active >= 0 ? `${listId}-${active}` : undefined}
        aria-invalid={invalid ? true : undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onKeyDown}
      >
        <span className={selected ? 'dd-value' : 'dd-placeholder'}>{selected ? selected.label : placeholder}</span>
        <ChevronDown size={16} aria-hidden="true" className="dd-chevron" />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          className={`dd-panel ${up ? 'is-up' : ''} ${align === 'end' ? 'is-end' : ''}`}
        >
          {options.map((o, i) => (
            <li
              key={o.value}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={o.value === value}
              className={`dd-option ${i === active ? 'is-active' : ''} ${o.value === value ? 'is-selected' : ''}`}
              onMouseEnter={() => setActive(i)}
              // mousedown evita que o botão perca o foco antes do clique
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(i)}
            >
              <span>{o.label}</span>
              {o.value === value && <Check size={15} aria-hidden="true" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
