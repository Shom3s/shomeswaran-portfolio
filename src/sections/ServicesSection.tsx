import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Globe2,
  Smartphone,
} from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const buildItems = [
  {
    number: '01',
    title: 'Mobile Applications',
    description:
      'Cross-platform mobile apps with clean interfaces, authentication, real-time data and smooth user experiences.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    icon: Smartphone,
  },
  {
    number: '02',
    title: 'Web Applications',
    description:
      'Responsive web systems with user accounts, dashboards, CRUD features and practical business workflows.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    icon: Globe2,
  },
  {
    number: '03',
    title: 'AI Integration',
    description:
      'Intelligent features such as image recognition, chatbots, automation and personalised recommendations.',
    technologies: ['Python', 'TensorFlow Lite', 'REST API'],
    icon: BrainCircuit,
  },
  {
    number: '04',
    title: 'Backend & Databases',
    description:
      'Secure and structured systems for authentication, data storage, APIs and real-time application features.',
    technologies: ['Firebase', 'Firestore', 'MySQL'],
    icon: Database,
  },
];

export function ServicesSection() {
  return (
    <section
      id="what-i-build"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn y={40} className="mb-14 sm:mb-16 md:mb-20">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#0C0C0C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0C0C0C]/55 sm:text-sm">
              Technical Capabilities
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-4xl text-[clamp(3.2rem,10vw,132px)] font-black uppercase leading-[0.82] tracking-[-0.055em] text-[#0C0C0C]">
              What I Build
            </h2>

            <p className="max-w-md text-base font-light leading-relaxed text-[#0C0C0C]/55 sm:text-lg">
              Practical software built with clean interfaces, reliable logic and
              technologies suited to the problem.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {buildItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.number}
                delay={index * 0.08}
                y={35}
                className="group"
              >
                <article className="relative flex min-h-[330px] h-full flex-col overflow-hidden rounded-[28px] border border-[#0C0C0C]/10 bg-[#F4F4F1] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#0C0C0C]/20 hover:bg-[#0C0C0C] hover:shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:p-8">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full border border-[#0C0C0C]/10 transition-all duration-500 group-hover:scale-125 group-hover:border-white/10" />

                  <div className="relative z-10 mb-12 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0C0C0C]/10 bg-white transition-colors duration-500 group-hover:border-white/10 group-hover:bg-white/10">
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        className="text-[#0C0C0C] transition-colors duration-500 group-hover:text-white"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-[#0C0C0C]/40 transition-colors duration-500 group-hover:text-white/40">
                        /{item.number}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-[#0C0C0C]/35 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                      />
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0C0C0C] transition-colors duration-500 group-hover:text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mb-7 max-w-xl text-sm font-light leading-relaxed text-[#0C0C0C]/55 transition-colors duration-500 group-hover:text-white/60 sm:text-base">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#0C0C0C]/10 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#0C0C0C]/65 transition-colors duration-500 group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-white/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}