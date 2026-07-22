import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Globe2,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

type BuildItem = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  accent: string;
  glow: string;
};

const buildItems: BuildItem[] = [
  {
    number: '01',
    title: 'Mobile Applications',
    eyebrow: 'Cross-platform development',
    description:
      'User-focused mobile applications with authentication, responsive interfaces, real-time data and cloud-connected workflows.',
    technologies: [
      'Flutter',
      'Dart',
      'React Native',
      'Firebase',
      'Supabase',
    ],
    icon: Smartphone,
    accent: 'from-[#8B5CF6] to-[#5B7CFA]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(124,58,237,0.18)]',
  },
  {
    number: '02',
    title: 'Web Applications',
    eyebrow: 'Modern frontend systems',
    description:
      'Responsive web platforms with dashboards, user accounts, CRUD operations, role-based access and business workflows.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind',
    ],
    icon: Globe2,
    accent: 'from-[#0EA5E9] to-[#22D3EE]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(14,165,233,0.18)]',
  },
  {
    number: '03',
    title: 'Backend & APIs',
    eyebrow: 'Application architecture',
    description:
      'Structured backend services for authentication, business logic, API integration and secure application communication.',
    technologies: ['FastAPI', 'Node.js', 'REST API', 'PHP', 'Python'],
    icon: Code2,
    accent: 'from-[#14B8A6] to-[#22C55E]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(20,184,166,0.18)]',
  },
  {
    number: '04',
    title: 'Databases & Cloud',
    eyebrow: 'Reliable data systems',
    description:
      'Database-driven solutions supporting real-time storage, structured information, authentication and scalable cloud services.',
    technologies: [
      'Firebase',
      'Firestore',
      'Supabase',
      'MySQL',
      'PostgreSQL',
      'SQL',
    ],
    icon: Database,
    accent: 'from-[#F59E0B] to-[#F97316]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(245,158,11,0.18)]',
  },
  {
    number: '05',
    title: 'AI & Machine Learning',
    eyebrow: 'Intelligent software',
    description:
      'AI-powered features including image classification, recommendation systems, automated analysis and conversational assistants.',
    technologies: [
      'Python',
      'Machine Learning',
      'NumPy',
      'Pandas',
      'Scikit-learn',
    ],
    icon: BrainCircuit,
    accent: 'from-[#EC4899] to-[#F43F5E]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(236,72,153,0.18)]',
  },
  {
    number: '06',
    title: 'Computer Vision',
    eyebrow: 'Image-based intelligence',
    description:
      'Image-processing and prediction workflows for recognition, medical-image analysis and visual decision-support systems.',
    technologies: [
      'Image Processing',
      'Computer Vision',
      'TensorFlow Lite',
      'Classification',
    ],
    icon: Blocks,
    accent: 'from-[#6366F1] to-[#A855F7]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(99,102,241,0.18)]',
  },
  {
    number: '07',
    title: 'IoT & Embedded Systems',
    eyebrow: 'Connected solutions',
    description:
      'Connected applications integrating microcontrollers, sensors, Bluetooth communication and real-time device data.',
    technologies: ['Arduino', 'ESP32', 'IoT', 'Bluetooth', 'C++'],
    icon: Cpu,
    accent: 'from-[#06B6D4] to-[#10B981]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(6,182,212,0.18)]',
  },
  {
    number: '08',
    title: 'Development & Delivery',
    eyebrow: 'Quality engineering',
    description:
      'Reliable development through version control, API testing, debugging, interface design, deployment and documentation.',
    technologies: [
      'Git',
      'GitHub',
      'Postman',
      'Docker',
      'VS Code',
      'Android Studio',
    ],
    icon: Wrench,
    accent: 'from-[#64748B] to-[#111827]',
    glow: 'group-hover:shadow-[0_28px_90px_rgba(15,23,42,0.18)]',
  },
];

export function ServicesSection() {
  return (
    <section
      id="what-i-build"
      className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      {/* Subtle background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-violet-200/15 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[35%] -z-10 h-[480px] w-[480px] rounded-full bg-cyan-200/15 blur-[150px]"
      />

      <div className="mx-auto max-w-7xl">
        <FadeIn y={45} className="mb-14 sm:mb-16 md:mb-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0C0C0C]/25" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0C0C0C]" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0C0C0C]/50 sm:text-sm">
              Technical Capabilities
            </p>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <h2 className="max-w-5xl text-[clamp(3.4rem,10vw,138px)] font-black uppercase leading-[0.78] tracking-[-0.065em] text-[#0C0C0C]">
              What I
              <span className="block bg-gradient-to-r from-[#0C0C0C] via-[#4B5563] to-[#0C0C0C] bg-clip-text text-transparent">
                Build
              </span>
            </h2>

            <div className="lg:pb-2">
              <p className="max-w-lg text-base font-light leading-relaxed text-[#0C0C0C]/60 sm:text-lg">
                Practical digital products across mobile, web, backend, AI,
                cloud and connected systems—built with purposeful technology
                and maintainable engineering.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="h-px w-16 bg-[#0C0C0C]/20" />

                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#0C0C0C]/40">
                  08 capabilities
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {buildItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.number}
                delay={index * 0.065}
                y={38}
                className="group h-full"
              >
                <article
                  className={[
                    'relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[30px]',
                    'border border-[#0C0C0C]/10 bg-[#F8F8F5] p-6',
                    'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    'hover:-translate-y-2 hover:border-transparent',
                    item.glow,
                    'sm:p-8 lg:p-9',
                  ].join(' ')}
                >
                  {/* Gradient outline */}
                  <div
                    aria-hidden="true"
                    className={[
                      'absolute inset-0 rounded-[30px] bg-gradient-to-br opacity-0',
                      'transition-opacity duration-700 group-hover:opacity-100',
                      item.accent,
                    ].join(' ')}
                  />

                  {/* Card surface */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[1px] rounded-[29px] bg-[#F8F8F5] transition-colors duration-700 group-hover:bg-[#0B0B0C]"
                  />

                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className={[
                      'absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br opacity-0 blur-3xl',
                      'transition-all duration-700 group-hover:scale-125 group-hover:opacity-25',
                      item.accent,
                    ].join(' ')}
                  />

                  {/* Corner decoration */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#0C0C0C]/10 transition-all duration-700 group-hover:scale-125 group-hover:border-white/10"
                  />

                  <div className="relative z-10 mb-14 flex items-start justify-between">
                    <div className="relative">
                      <div
                        className={[
                          'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 blur-xl',
                          'transition-opacity duration-500 group-hover:opacity-50',
                          item.accent,
                        ].join(' ')}
                      />

                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0C0C0C]/10 bg-white transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105 group-hover:border-white/10 group-hover:bg-white/10">
                        <Icon
                          size={25}
                          strokeWidth={1.65}
                          className="text-[#0C0C0C] transition-colors duration-500 group-hover:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-[#0C0C0C]/40 transition-colors duration-500 group-hover:text-white/40">
                        /{item.number}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0C0C0C]/10 transition-all duration-500 group-hover:rotate-45 group-hover:border-white/15 group-hover:bg-white/10">
                        <ArrowUpRight
                          size={17}
                          className="text-[#0C0C0C]/50 transition-colors duration-500 group-hover:text-white"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0C0C0C]/45 transition-colors duration-500 group-hover:text-white/50 sm:text-[11px]">
                      {item.eyebrow}
                    </p>

                    <h3 className="mb-4 text-2xl font-semibold tracking-[-0.035em] text-[#0C0C0C] transition-colors duration-500 group-hover:text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mb-7 max-w-xl text-sm font-light leading-relaxed text-[#0C0C0C]/65 transition-colors duration-500 group-hover:text-white/75 sm:text-base">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map(
                        (technology, technologyIndex) => (
                          <span
                            key={technology}
                            style={{
                              transitionDelay: `${technologyIndex * 35}ms`,
                            }}
                            className="rounded-full border border-[#0C0C0C]/10 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.11em] text-[#0C0C0C]/65 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-white/75 sm:text-[11px]"
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className={[
                      'absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r',
                      'transition-all duration-700 group-hover:w-full',
                      item.accent,
                    ].join(' ')}
                  />
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}