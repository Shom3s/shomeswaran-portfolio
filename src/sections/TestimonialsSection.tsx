import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  School,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type EducationItem = {
  period: string;
  institution: string;
  qualification: string;
  result: string;
  description: string;
  icon: LucideIcon;
  current?: boolean;
};

const education: EducationItem[] = [
  {
    period: '2017 — 2022',
    institution: 'SMK Dato Mohd Said',
    qualification: 'Sijil Pelajaran Malaysia (SPM)',
    result: 'Result: 8A 2B',
    description:
      'Built a strong academic foundation and developed an early interest in technology and problem-solving.',
    icon: School,
  },
  {
    period: '2022 — 2023',
    institution: 'Kolej Matrikulasi Negeri Sembilan (KMNS)',
    qualification: 'Physical Science Stream',
    result: 'CGPA 4.00 · MUET Band 4.0',
    description:
      'Strengthened analytical thinking through mathematics, physics, chemistry and structured problem-solving.',
    icon: BookOpen,
  },
  {
    period: '2023 — 2027',
    institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    qualification: 'Bachelor of Computer Science (Software Development)',
    result: 'CGPA 3.89',
    description:
      'Focused on software engineering, mobile and web development, databases, artificial intelligence and real-world system projects.',
    icon: GraduationCap,
    current: true,
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 78%', 'end 35%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.35,
  });

  const glowY = useTransform(smoothProgress, [0, 1], ['0%', '96%']);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D7E2EA]/[0.05] blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
              scale: [1, 1.18, 1],
              opacity: [0.45, 0.72, 0.45],
            }
        }
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 55 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D7E2EA]/55 sm:text-sm">
              Academic Journey
            </p>
            <h2 className="text-[clamp(3.6rem,10vw,145px)] font-black uppercase leading-[0.82] tracking-tight">
              Education
            </h2>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-xl text-[clamp(1rem,1.7vw,1.35rem)] font-light leading-relaxed text-[#D7E2EA]/65 md:justify-self-end"
          >
            My academic path from secondary school to a degree in software
            development, shaped by consistent results and continuous technical
            growth.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Inactive timeline track */}
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-[#D7E2EA]/12 md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline fills while the user scrolls through the section */}
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-[27px] top-0 w-px origin-top bg-gradient-to-b from-[#D7E2EA]/30 via-[#D7E2EA] to-[#D7E2EA]/35 shadow-[0_0_18px_rgba(215,226,234,0.45)] md:left-1/2 md:-translate-x-1/2"
            style={{ scaleY: reduceMotion ? 1 : smoothProgress }}
          />

          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[22px] z-20 h-3 w-3 rounded-full bg-white shadow-[0_0_22px_7px_rgba(215,226,234,0.45)] md:left-1/2 md:-translate-x-1/2"
              style={{ top: glowY }}
            />
          )}

          <div className="space-y-10 md:space-y-16">
            {education.map((item, index) => (
              <TimelineItem
                key={item.institution}
                item={item}
                index={index}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type TimelineItemProps = {
  item: EducationItem;
  index: number;
  reduceMotion: boolean;
};

function TimelineItem({ item, index, reduceMotion }: TimelineItemProps) {
  const Icon = item.icon;
  const placeCardOnLeft = index % 2 === 0;
  const cardStartX = placeCardOnLeft ? -90 : 90;
  const periodStartX = placeCardOnLeft ? 70 : -70;

  return (
    <div className="relative grid grid-cols-[56px_1fr] gap-4 md:grid-cols-[1fr_76px_1fr] md:gap-8">
      <div
        className={`hidden md:flex ${placeCardOnLeft ? 'justify-end' : 'items-center justify-end'
          }`}
      >
        {placeCardOnLeft ? (
          <AnimatedEducationCard
            item={item}
            startX={cardStartX}
            delay={index * 0.12}
            reduceMotion={reduceMotion}
          />
        ) : (
          <AnimatedPeriodLabel
            period={item.period}
            startX={periodStartX}
            delay={index * 0.12 + 0.08}
            reduceMotion={reduceMotion}
          />
        )}
      </div>

      <div className="relative z-10 flex justify-center">
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.35, rotate: -90 }
          }
          whileInView={
            reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }
          }
          viewport={{ once: true, amount: 0.75 }}
          transition={{
            duration: 0.65,
            delay: index * 0.1,
            type: 'spring',
            stiffness: 180,
            damping: 16,
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.12, rotate: 4 }}
          className="group grid h-14 w-14 place-items-center rounded-full border border-[#D7E2EA]/35 bg-[#0C0C0C] shadow-[0_0_0_8px_rgba(215,226,234,0.04)] transition-colors duration-300 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] md:h-[68px] md:w-[68px]"
        >
          <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.8} />
        </motion.div>
      </div>

      <div className="min-w-0 md:flex md:items-center">
        <div className="hidden md:block md:w-full">
          {placeCardOnLeft ? (
            <AnimatedPeriodLabel
              period={item.period}
              startX={periodStartX}
              delay={index * 0.12 + 0.08}
              reduceMotion={reduceMotion}
            />
          ) : (
            <AnimatedEducationCard
              item={item}
              startX={cardStartX}
              delay={index * 0.12}
              reduceMotion={reduceMotion}
            />
          )}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 55, y: 22 }}
          whileInView={
            reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            delay: index * 0.11,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="md:hidden"
        >
          <EducationCard item={item} />
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedPeriodLabel({
  period,
  startX,
  delay,
  reduceMotion,
}: {
  period: string;
  startX: number;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: startX }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <PeriodLabel period={period} />
    </motion.div>
  );
}

function AnimatedEducationCard({
  item,
  startX,
  delay,
  reduceMotion,
}: {
  item: EducationItem;
  startX: number;
  delay: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: startX, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <EducationCard item={item} />
    </motion.div>
  );
}

function PeriodLabel({ period }: { period: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D7E2EA]/65 backdrop-blur-sm">
      <CalendarDays className="h-4 w-4" />
      {period}
    </div>
  );
}

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <motion.article
      whileHover={{ y: -7, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group relative w-full max-w-xl overflow-hidden rounded-[28px] border border-[#D7E2EA]/20 bg-[#111318] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:border-[#D7E2EA]/45 sm:rounded-[34px] sm:p-7 md:p-8"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D7E2EA]/[0.05] blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-[#D7E2EA]/[0.1]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 md:hidden">
          <PeriodLabel period={item.period} />
          {item.current && <CurrentBadge />}
        </div>

        {item.current && (
          <div className="mb-5 hidden justify-end md:flex">
            <CurrentBadge />
          </div>
        )}

        <h3 className="text-[clamp(1.35rem,2.3vw,2rem)] font-black uppercase leading-tight tracking-tight">
          {item.institution}
        </h3>

        <p className="mt-3 text-sm font-medium uppercase leading-relaxed tracking-[0.12em] text-[#D7E2EA]/65 sm:text-base">
          {item.qualification}
        </p>

        <div className="my-6 h-px bg-[#D7E2EA]/12" />

        <div className="mb-4 flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.08 }}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#D7E2EA] text-[#0C0C0C]"
          >
            <Award className="h-5 w-5" />
          </motion.div>
          <p className="text-base font-bold uppercase tracking-wide sm:text-lg">
            {item.result}
          </p>
        </div>

        <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/60 sm:text-base">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

function CurrentBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#D7E2EA] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0C0C0C]">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0C0C0C]" />
      Current
    </span>
  );
}