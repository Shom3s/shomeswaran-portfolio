import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { FadeIn } from '../components/FadeIn';

type Skill = {
    name: string;
    icon: string;
    invert?: boolean;
};

type SkillRow = {
    label: string;
    skills: Skill[];
    duration: number;
    reverse?: boolean;
};

const languages: Skill[] = [
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
        name: 'Dart',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
    },
    {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    },
    {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    },
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    },
];

const frameworks: Skill[] = [
    {
        name: 'Flutter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
        name: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    },
    {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    },
];

const tools: Skill[] = [
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        invert: true,
    },
    {
        name: 'Android Studio',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
    },
    {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    },
];

const rows: SkillRow[] = [
    {
        label: 'Languages',
        skills: languages,
        duration: 32,
    },
    {
        label: 'Frameworks & Platforms',
        skills: frameworks,
        duration: 32,
        reverse: true,
    },
    {
        label: 'Development Tools',
        skills: tools,
        duration: 32,
    },
];

function SkillCard({ skill }: { skill: Skill }) {
    return (
        <article className="group flex h-[126px] w-[148px] shrink-0 flex-col items-center justify-center gap-3.5 rounded-[22px] border border-black/[0.08] bg-white px-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-black/[0.14] hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] sm:h-[140px] sm:w-[166px] sm:rounded-[26px]">
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-black/[0.07] bg-[#F6F7F9] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white sm:h-16 sm:w-16">
                <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                />
            </div>

            <span className="text-center text-sm font-semibold text-[#111111]/70 transition-colors duration-300 group-hover:text-[#111111] sm:text-base">
                {skill.name}
            </span>
        </article>
    );
}

function SkillSet({
    skills,
    hidden = false,
}: {
    skills: Skill[];
    hidden?: boolean;
}) {
    return (
        <div
            className="flex shrink-0 gap-3 pr-3"
            aria-hidden={hidden ? true : undefined}
        >
            {skills.map((skill, index) => (
                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
            ))}
        </div>
    );
}

function SlidingRow({ row }: { row: SkillRow }) {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const [copies, setCopies] = useState(2);

    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) return undefined;

        const updateCopies = () => {
            const cardWidth = window.matchMedia('(min-width: 640px)').matches
                ? 170
                : 150;
            const gap = 12;
            const baseSetWidth = row.skills.length * (cardWidth + gap);
            const requiredCopies = Math.max(
                2,
                Math.ceil(viewport.clientWidth / baseSetWidth) + 1,
            );

            setCopies((current) =>
                current === requiredCopies ? current : requiredCopies,
            );
        };

        updateCopies();

        const resizeObserver = new ResizeObserver(updateCopies);
        resizeObserver.observe(viewport);
        window.addEventListener('resize', updateCopies);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateCopies);
        };
    }, [row.skills.length]);

    const repeatedSkills = useMemo(
        () => Array.from({ length: copies }, () => row.skills).flat(),
        [copies, row.skills],
    );

    const animationStyle = {
        '--slide-duration': `${row.duration}s`,
        animationDirection: row.reverse ? 'reverse' : 'normal',
    } as CSSProperties;

    return (
        <div className="relative">
            <div className="mb-4 flex items-center gap-4 px-1 sm:px-2">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#111111]/45 sm:text-sm">
                    {row.label}
                </span>
                <span className="h-px flex-1 bg-black/[0.08]" />
            </div>

            <div ref={viewportRef} className="overflow-hidden py-2">
                <div
                    className="skills-marquee-track flex w-max"
                    style={animationStyle}
                >
                    <SkillSet skills={repeatedSkills} />
                    <SkillSet skills={repeatedSkills} hidden />
                </div>
            </div>
        </div>
    );
}

export function TechnicalSkillsSection() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-white px-5 pb-28 pt-16 sm:px-8 sm:pb-32 sm:pt-20 md:px-10 md:pb-40 md:pt-24"
        >
            <style>{`
        @keyframes skills-marquee-slide {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .skills-marquee-track {
          animation-name: skills-marquee-slide;
          animation-duration: var(--slide-duration, 16s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          backface-visibility: hidden;
          transform: translateZ(0);
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>

            <div className="mx-auto max-w-7xl">
                <div className="mb-12 grid gap-7 md:mb-16 md:grid-cols-[1fr_0.65fr] md:items-end">
                    <FadeIn
                        as="h2"
                        y={40}
                        className="text-[clamp(3.4rem,10vw,135px)] font-black uppercase leading-[0.82] tracking-tight text-[#0C0C0C]"
                    >
                        Technical
                        <br />
                        Skills
                    </FadeIn>

                    <FadeIn
                        delay={0.12}
                        y={28}
                        className="max-w-xl text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C]/60 md:justify-self-end"
                    >
                        Languages, frameworks and development tools I use to turn ideas into functional software.
                    </FadeIn>
                </div>

                <FadeIn y={34}>
                    <div className="relative space-y-5 sm:space-y-6">
                        <div className="pointer-events-none absolute -left-20 top-6 h-48 w-48 rounded-full bg-black/[0.025] blur-3xl" />
                        <div className="pointer-events-none absolute -right-20 bottom-6 h-48 w-48 rounded-full bg-black/[0.025] blur-3xl" />

                        {rows.map((row, index) => (
                            <div
                                key={row.label}
                                className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#F7F8FA] px-3 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:rounded-[34px] sm:px-5 sm:py-7 md:px-6"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.95),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.65),transparent_55%)]" />
                                <div className="relative">
                                    <SlidingRow row={row} />
                                </div>

                                <span className="pointer-events-none absolute right-5 top-4 text-5xl font-black text-black/[0.035] sm:text-6xl">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}