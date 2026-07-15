import { ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { decorativeImages, profile } from '../data';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden rounded-t-[40px] bg-white text-[#0C0C0C] sm:rounded-t-[50px] md:rounded-t-[60px]">
      <div className="relative min-h-[58vh] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
        <FadeIn delay={0.1} x={-60} y={0} className="pointer-events-none absolute left-[2%] top-[12%] w-[90px] select-none opacity-90 sm:w-[130px] md:w-[160px]">
          <img src={decorativeImages.lego} alt="Decorative contact object" loading="lazy" draggable={false} />
        </FadeIn>
        <FadeIn delay={0.15} x={60} y={0} className="pointer-events-none absolute bottom-[12%] right-[3%] w-[90px] select-none opacity-90 sm:w-[130px] md:w-[170px]">
          <img src={decorativeImages.object} alt="Decorative contact object" loading="lazy" draggable={false} />
        </FadeIn>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <FadeIn y={40}>
            <h2 className="text-[clamp(3.4rem,11vw,150px)] font-black uppercase leading-[0.8] tracking-tight">
              Let&apos;s<br />Get in<br />Touch
            </h2>
          </FadeIn>
          <div className="w-full md:max-w-xl md:justify-self-end">
            <FadeIn delay={0.1} y={35}>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#0C0C0C]/45 sm:text-sm">
                Contact details
              </p>

              <div className="grid gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center justify-between gap-4 rounded-[24px] border border-[#0C0C0C]/12 bg-[#F5F5F3] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white hover:shadow-[0_18px_50px_rgba(12,12,12,0.16)] sm:rounded-[28px] sm:px-6 sm:py-5"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#0C0C0C]/10 bg-white transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10 sm:h-12 sm:w-12">
                      <Mail className="h-5 w-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] opacity-45">
                        Email
                      </span>
                      <span className="mt-1 block truncate text-sm font-black uppercase tracking-[0.08em] sm:text-base">
                        {profile.email}
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="tel:+601127041275"
                  className="group flex items-center justify-between gap-4 rounded-[24px] border border-[#0C0C0C]/12 bg-[#F5F5F3] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white hover:shadow-[0_18px_50px_rgba(12,12,12,0.16)] sm:rounded-[28px] sm:px-6 sm:py-5"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#0C0C0C]/10 bg-white transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10 sm:h-12 sm:w-12">
                      <Phone className="h-5 w-5" />
                    </span>

                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] opacity-45">
                        Phone
                      </span>
                      <span className="mt-1 block text-sm font-black uppercase tracking-[0.08em] sm:text-base">
                        +60 11-2704 1275
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="https://www.linkedin.com/in/shomeswaran/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-[24px] border border-[#0C0C0C]/12 bg-[#F5F5F3] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white hover:shadow-[0_18px_50px_rgba(12,12,12,0.16)] sm:rounded-[28px] sm:px-6 sm:py-5"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#0C0C0C]/10 bg-white transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10 sm:h-12 sm:w-12">
                      <Linkedin className="h-5 w-5" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] opacity-45">
                        LinkedIn
                      </span>
                      <span className="mt-1 block truncate text-sm font-black uppercase tracking-[0.08em] sm:text-base">
                        linkedin.com/in/shomeswaran
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <footer className="relative overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 pb-8 pt-14 text-[#D7E2EA] sm:rounded-t-[50px] sm:px-8 md:rounded-t-[60px] md:px-10 md:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center gap-4 opacity-95 sm:top-10">
          {[decorativeImages.moon, decorativeImages.object, decorativeImages.group, decorativeImages.lego].map((src, index) => (
            <img key={src} src={src} alt="" className={`h-12 w-12 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20 ${index % 2 ? 'translate-y-6' : ''}`} loading="lazy" draggable={false} />
          ))}
        </div>

        <div className="relative z-10 mt-20 flex items-end justify-between gap-6 sm:mt-24 md:mt-32">
          <FadeIn y={30}>
            <p className="max-w-[230px] text-xs font-light uppercase leading-snug tracking-[0.28em] text-[#D7E2EA]/65 sm:text-sm">
              Software developer portfolio website
            </p>
          </FadeIn>
          <FadeIn delay={0.1} y={30}>
            <ContactButton href="#top" label="Back To Top" />
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={50} className="relative z-10 mt-10 overflow-hidden">
          <h2 className="hero-heading whitespace-nowrap text-[clamp(4rem,17vw,220px)] font-black uppercase leading-none tracking-tight">
            {profile.fullName}
          </h2>
        </FadeIn>
      </footer>
    </section>
  );
}