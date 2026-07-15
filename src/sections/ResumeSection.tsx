import { Download, ExternalLink, FileText } from 'lucide-react';

const resumePath = '/resume/Shomeswaran_Software_Developer_Resume.pdf';

export function ResumeSection() {
    return (
        <section
            id="resume"
            className="relative overflow-hidden bg-[#0C0C0C] px-4 py-20 text-[#D7E2EA] sm:px-6 md:px-10 md:py-28"
        >
            {/* Soft dark background decoration */}
            <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/40 sm:text-sm">
                            Curriculum Vitae
                        </p>

                        <h2 className="text-[clamp(3.7rem,9vw,120px)] font-black uppercase leading-[0.82] tracking-tight">
                            Resume
                        </h2>
                    </div>

                    <p className="max-w-md text-base font-light leading-7 text-white/55 sm:text-lg">
                        View my education, technical skills, projects and software
                        development experience.
                    </p>
                </div>

                {/* Resume frame */}
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#111318] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:p-4">
                    {/* Top toolbar */}
                    <div className="mb-3 flex flex-col gap-3 rounded-[22px] border border-white/10 bg-[#171A20] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                        <div className="flex items-center gap-3">
                            <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-black">
                                <FileText className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-white">
                                    Shomeswaran — Software Developer
                                </p>
                                <p className="text-xs text-white/40">PDF Resume</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <a
                                href={resumePath}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                            >
                                Open PDF
                                <ExternalLink className="h-4 w-4" />
                            </a>

                            <a
                                href={resumePath}
                                download="Shomeswaran_Software_Developer_Resume.pdf"
                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/85"
                            >
                                Download
                                <Download className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Embedded PDF */}
                    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white">
                        <object
                            data={resumePath}
                            type="application/pdf"
                            className="h-[76vh] min-h-[620px] w-full bg-white md:h-[85vh]"
                            aria-label="Shomeswaran Software Developer Resume"
                        >
                            <div className="flex min-h-[620px] flex-col items-center justify-center gap-5 bg-white px-6 text-center text-black">
                                <div className="grid h-16 w-16 place-items-center rounded-full bg-black text-white">
                                    <FileText className="h-7 w-7" />
                                </div>

                                <div>
                                    <p className="text-xl font-semibold">
                                        Resume preview is not available
                                    </p>
                                    <p className="mt-2 max-w-md text-sm leading-6 text-black/50">
                                        Your browser cannot display the PDF inside this page.
                                    </p>
                                </div>

                                <a
                                    href={resumePath}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
                                >
                                    Open Resume PDF
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </object>
                    </div>
                </div>
            </div>
        </section>
    );
}