import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';

type AnimatedTextProps = {
  text: string;
  className?: string;
};

type AnimatedCharProps = {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
};

function AnimatedChar({
  char,
  progress,
  start,
  end,
}: AnimatedCharProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({
  text,
  className,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalCharacters = Math.max(text.length - 1, 1);
  const tokens = text.split(/(\s+)/);

  let characterIndex = 0;

  return (
    <p ref={ref} className={className}>
      {tokens.map((token, tokenIndex) => {
        if (/^\s+$/.test(token)) {
          characterIndex += token.length;

          return (
            <span key={`space-${tokenIndex}`} aria-hidden="true">
              {' '}
            </span>
          );
        }

        const wordStartIndex = characterIndex;
        characterIndex += token.length;

        return (
          <span
            key={`word-${tokenIndex}-${token}`}
            className="inline-block whitespace-nowrap"
          >
            {Array.from(token).map((char, charIndex) => {
              const globalIndex = wordStartIndex + charIndex;
              const start = globalIndex / totalCharacters;
              const end = Math.min(1, start + 0.16);

              return (
                <AnimatedChar
                  key={`${char}-${globalIndex}`}
                  char={char}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}