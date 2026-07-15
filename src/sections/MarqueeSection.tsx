import { useEffect, useMemo, useRef, useState } from 'react';
import { Code2, GitBranch } from 'lucide-react';
import { codeCards, type CodeCard as CodeCardData } from '../data';

type TokenTone =
  | 'plain'
  | 'keyword'
  | 'string'
  | 'number'
  | 'boolean'
  | 'comment'
  | 'function';

type HighlightToken = {
  text: string;
  tone: TokenTone;
};

const tokenClass: Record<TokenTone, string> = {
  plain: 'text-[#D7DEE9]',
  keyword: 'text-[#C792EA]',
  string: 'text-[#C3E88D]',
  number: 'text-[#F78C6C]',
  boolean: 'text-[#FFCB6B]',
  comment: 'text-[#68758A] italic',
  function: 'text-[#82AAFF]',
};

const languageDot: Record<string, string> = {
  TypeScript: 'bg-[#3178C6]',
  JavaScript: 'bg-[#F7DF1E]',
  JSON: 'bg-[#A8B2C1]',
  Terminal: 'bg-[#45D483]',
};

function tokenizeLine(line: string): HighlightToken[] {
  if (line.trimStart().startsWith('//')) {
    return [{ text: line, tone: 'comment' }];
  }

  const pattern =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:const|let|var|function|return|while|if|else|for|new|type|interface|string|number|boolean)\b|\b(?:true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*(?=\s*\())/g;

  const tokens: HighlightToken[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(pattern)) {
    const index = match.index ?? 0;

    if (index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, index), tone: 'plain' });
    }

    const text = match[0];
    let tone: TokenTone = 'plain';

    if (/^["'`]/.test(text)) tone = 'string';
    else if (/^(true|false|null|undefined)$/.test(text)) tone = 'boolean';
    else if (/^\d/.test(text)) tone = 'number';
    else if (/^(const|let|var|function|return|while|if|else|for|new|type|interface|string|number|boolean)$/.test(text)) {
      tone = 'keyword';
    } else {
      tone = 'function';
    }

    tokens.push({ text, tone });
    lastIndex = index + text.length;
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), tone: 'plain' });
  }

  return tokens.length > 0 ? tokens : [{ text: line || ' ', tone: 'plain' }];
}

function EditorCard({ card }: { card: CodeCardData }) {
  const lines = card.code.split('\n');

  return (
    <article className="group relative h-[238px] w-[410px] min-w-[410px] overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#11141B] shadow-[0_24px_70px_rgba(0,0,0,0.48)] transition duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:shadow-[0_30px_90px_rgba(0,0,0,0.62)] sm:h-[258px] sm:w-[450px] sm:min-w-[450px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(61,110,255,0.13),transparent_34%)] opacity-80" />

      <header className="relative flex h-12 items-center border-b border-white/[0.07] bg-[#151922]/95 px-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-t-lg border-x border-t border-white/[0.06] bg-[#11141B] px-4 py-2 text-xs font-medium text-[#D8DFEA]">
          <Code2 className="h-3.5 w-3.5 text-[#77A7FF]" />
          <span>{card.file}</span>
        </div>

        <div className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#7E899A]">
          <span className={`h-1.5 w-1.5 rounded-full ${languageDot[card.language] ?? 'bg-white/60'}`} />
          {card.language}
        </div>
      </header>

      <div className="relative flex h-[154px] overflow-hidden py-4 sm:h-[174px]">
        <div className="select-none border-r border-white/[0.06] px-3 text-right font-mono text-[11px] leading-[21px] text-[#4E596B] sm:text-xs sm:leading-[22px]">
          {lines.map((_, index) => (
            <div key={index}>{String(index + 1).padStart(2, '0')}</div>
          ))}
        </div>

        <pre className="overflow-hidden px-4 font-mono text-[11px] leading-[21px] sm:text-xs sm:leading-[22px]">
          <code>
            {lines.map((line, lineIndex) => (
              <div key={`${card.file}-${lineIndex}`} className="min-h-[21px] whitespace-pre sm:min-h-[22px]">
                {tokenizeLine(line).map((token, tokenIndex) => (
                  <span key={`${lineIndex}-${tokenIndex}`} className={tokenClass[token.tone]}>
                    {token.text}
                  </span>
                ))}
              </div>
            ))}
          </code>
        </pre>
      </div>

      <footer className="relative flex h-9 items-center justify-between border-t border-white/[0.07] bg-[#0D1016] px-4 font-mono text-[10px] text-[#697588]">
        <span className="flex items-center gap-1.5">
          <GitBranch className="h-3 w-3" /> main
        </span>
        <span>UTF-8&nbsp;&nbsp; LF&nbsp;&nbsp; Spaces: 2</span>
      </footer>
    </article>
  );
}

function CodeRow({ cards }: { cards: CodeCardData[] }) {
  const repeatedCards = useMemo(() => [...cards, ...cards, ...cards], [cards]);

  return (
    <div className="flex w-max gap-3 sm:gap-4">
      {repeatedCards.map((card, index) => (
        <EditorCard key={`${card.file}-${index}`} card={card} />
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  const firstRow = codeCards.slice(0, 4);
  const secondRow = codeCards.slice(4, 8);

  useEffect(() => {
    let frame = 0;

    const updateOffset = () => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollProgress = window.innerHeight - rect.top;
        setOffset(scrollProgress * 0.2);
      });
    };

    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    window.addEventListener('resize', updateOffset, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0C0C0C] py-12 sm:py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[420px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(40,76,155,0.13),transparent_65%)]" />

      <div className="relative left-1/2 w-[124%] -translate-x-1/2 sm:w-[118%] lg:w-[112%]">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div
            style={{
              transform: `translate3d(${offset - 260}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            <CodeRow cards={firstRow} />
          </div>

          <div
            style={{
              transform: `translate3d(${-offset - 80}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            <CodeRow cards={secondRow} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0C0C0C] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0C0C0C] to-transparent sm:w-28" />
    </section>
  );
}