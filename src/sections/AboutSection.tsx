import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { ArrowUpRight, Github } from 'lucide-react';
import { decorativeImages, profile } from '../data';

export function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] select-none sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]">
        <img src={decorativeImages.moon} alt="Decorative moon icon" loading="lazy" draggable={false} />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] select-none sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]">
        <img src={decorativeImages.object} alt="Decorative 3D object" loading="lazy" draggable={false} />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] select-none sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]">
        <img src={decorativeImages.lego} alt="Decorative lego icon" loading="lazy" draggable={false} />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] select-none sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]">
        <img src={decorativeImages.group} alt="Decorative 3D group" loading="lazy" draggable={false} />
      </FadeIn>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading w-full text-center text-[clamp(3.5rem,10vw,130px)] font-black uppercase leading-[0.88] tracking-tight"
        >
          About me
        </FadeIn>

        <div className="mt-12 flex w-full flex-col items-center sm:mt-14 md:mt-16">
          <AnimatedText
            text={profile.about}
            className="mx-auto max-w-4xl px-2 text-center text-[clamp(1rem,1.65vw,1.3rem)] font-medium leading-[1.75] text-[#D7E2EA] sm:px-6"
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row md:mt-14">
            <ContactButton />

            <a
              href="https://github.com/Shom3s"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Shomeswaran's GitHub profile"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#D7E2EA]/30 bg-white/[0.04] px-7 text-sm font-bold uppercase tracking-[0.16em] text-[#D7E2EA] transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] sm:px-8"
            >
              <Github className="h-5 w-5" />
              GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}