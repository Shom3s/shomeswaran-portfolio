import { useRef, useState } from 'react';
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion';
import {
    Award,
    ExternalLink,
    FileCheck2,
    GraduationCap,
    Sparkles,
} from 'lucide-react';

type Certificate = {
    title: string;
    issuer: string;
    year: string;
    session?: string;
    type: string;
    description: string;
    image: string;
    url?: string;
};

const certificates: Certificate[] = [
    {
        title: "Dean's Award",
        issuer: 'Universiti Teknikal Malaysia Melaka (UTeM)',
        year: '2025/2026',
        session: 'Semester 1',
        type: 'University Award',
        description:
            'Awarded for excellent academic achievement in the Bachelor of Computer Science (Software Development) with Honours programme.',
        image: '/certificates/deans-award-2025-2026-sem-1.jpg',
        url: '/certificates/deans-award-2025-2026-sem-1.jpg',
    },
    {
        title: "Dean's Award",
        issuer: 'Universiti Teknikal Malaysia Melaka (UTeM)',
        year: '2024/2025',
        session: 'Semester 2',
        type: 'University Award',
        description:
            'Recognised on the Dean’s List for excellent academic performance during Semester 2.',
        image: '/certificates/deans-award-2024-2025-sem-2.jpg',
        url: '/certificates/deans-award-2024-2025-sem-2.jpg',
    },
    {
        title: "Dean's Award",
        issuer: 'Universiti Teknikal Malaysia Melaka (UTeM)',
        year: '2024/2025',
        session: 'Semester 1',
        type: 'University Award',
        description:
            'Recognised on the Dean’s List for excellent academic performance during Semester 1.',
        image: '/certificates/deans-award-2024-2025-sem-1.jpg',
        url: '/certificates/deans-award-2024-2025-sem-1.jpg',
    },
    {
        title: "Dean's Award",
        issuer: 'Universiti Teknikal Malaysia Melaka (UTeM)',
        year: '2023/2024',
        session: 'Semester 2',
        type: 'University Award',
        description:
            'Recognised on the Dean’s List for excellent academic performance during Semester 2.',
        image: '/certificates/deans-award-2023-2024-sem-2.jpg',
        url: '/certificates/deans-award-2023-2024-sem-2.jpg',
    },
    {
        title: "Dean's Award",
        issuer: 'Universiti Teknikal Malaysia Melaka (UTeM)',
        year: '2023/2024',
        session: 'Semester 1',
        type: 'University Award',
        description:
            'Recognised on the Dean’s List for excellent academic performance during Semester 1.',
        image: '/certificates/deans-award-2023-2024-sem-1.jpg',
        url: '/certificates/deans-award-2023-2024-sem-1.jpg',
    },
    {
        title: 'Academic Transcript',
        issuer: 'Universiti Teknikal Malaysia Melaka (UTeM)',
        year: '2023–Present',
        type: 'Academic Record',
        description:
            'Academic record for the Bachelor of Computer Science (Software Development) with Honours programme.',
        image: '/certificates/academic-transcript.jpg',
        url: '/certificates/academic-transcript.jpg',
    },
    {
        title: 'Sijil Matrikulasi KPM',
        issuer: 'Kolej Matrikulasi Negeri Sembilan',
        year: '2023',
        type: 'Academic Certificate',
        description:
            'Completed the Physical Science Stream under the Ministry of Education Malaysia with a CGPA of 4.00.',
        image: '/certificates/sijil-matrikulasi-kpm.jpg',
        url: '/certificates/sijil-matrikulasi-kpm.jpg',
    },
    {
        title: 'Sijil Pencapaian Matrikulasi',
        issuer: 'Kolej Matrikulasi Negeri Sembilan',
        year: '2023',
        type: 'Academic Award',
        description:
            'Received the Anugerah Sijil Kepujian Pengarah for achieving a semester grade point average of 4.00.',
        image: '/certificates/sijil-pencapaian-matrikulasi.jpg',
        url: '/certificates/sijil-pencapaian-matrikulasi.jpg',
    },
    {
        title: 'MUET Certificate',
        issuer: 'Malaysian Examinations Council',
        year: '2022',
        session: 'Session 3',
        type: 'Language Certificate',
        description:
            'Achieved Band 4 in the Malaysian University English Test (MUET).',
        image: '/certificates/muet-band-4.jpg',
        url: '/certificates/muet-band-4.jpg',
    },
    {
        title: 'SPM Certificate',
        issuer: 'Lembaga Peperiksaan Malaysia',
        year: '2022',
        type: 'Academic Certificate',
        description: 'Sijil Pelajaran Malaysia (SPM) — Result: 8A 2B.',
        image: '/certificates/spm-certificate.jpg',
        url: '/certificates/spm-certificate.jpg',
    },
    {
        title: 'Anugerah Murid Cemerlang',
        issuer: 'SMK Dato Mohd Said',
        year: '2022',
        type: 'School Award',
        description:
            'Recognition for outstanding academic achievement during secondary school.',
        image: '/certificates/anugerah-murid-cemerlang.jpg',
        url: '/certificates/anugerah-murid-cemerlang.jpg',
    },
];

const highlights = [
    { value: '5×', label: "Dean's Award" },
    { value: '4.00', label: 'Matriculation CGPA' },
    { value: 'Band 4', label: 'MUET' },
    { value: '8A 2B', label: 'SPM' },
];

export function CertificatesSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 85%', 'end 25%'],
    });

    const glowX = useTransform(scrollYProgress, [0, 1], ['-20%', '110%']);

    return (
        <section
            ref={sectionRef}
            id="certificates"
            className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:px-8 sm:py-24 md:px-10 md:py-32"
        >
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#D7E2EA]/[0.05] blur-3xl"
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.15, 1],
                            opacity: [0.35, 0.65, 0.35],
                        }
                }
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-10 grid gap-7 md:mb-14 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 50 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <Sparkles className="h-4 w-4" />
                            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#D7E2EA]/55 sm:text-sm">
                                Certificates & Achievements
                            </p>
                        </div>

                        <h2 className="text-[clamp(3.6rem,9vw,132px)] font-black uppercase leading-[0.82] tracking-tight">
                            Credentials
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
                        Academic awards, examination certificates and university records
                        that reflect consistent achievement throughout my education.
                    </motion.p>
                </div>

                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10 grid grid-cols-2 overflow-hidden rounded-[26px] border border-white/10 bg-[#111318] md:grid-cols-4"
                >
                    {highlights.map((highlight, index) => (
                        <div
                            key={highlight.label}
                            className={`p-5 sm:p-6 ${index % 2 !== 0 ? 'border-l border-white/10' : ''
                                } ${index >= 2 ? 'border-t border-white/10 md:border-t-0' : ''} ${index > 0 ? 'md:border-l md:border-white/10' : ''
                                }`}
                        >
                            <p className="text-2xl font-semibold text-white sm:text-3xl">
                                {highlight.value}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45 sm:text-sm">
                                {highlight.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <div className="relative">
                    <div className="pointer-events-none absolute left-0 right-0 top-0 h-px overflow-hidden bg-[#D7E2EA]/10">
                        {!reduceMotion && (
                            <motion.div
                                className="absolute top-0 h-px w-40 bg-gradient-to-r from-transparent via-white to-transparent"
                                style={{ left: glowX }}
                            />
                        )}
                    </div>

                    <div className="grid gap-5 pt-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                        {certificates.map((certificate, index) => (
                            <CertificateCard
                                key={`${certificate.title}-${certificate.year}-${certificate.session ?? ''}`}
                                certificate={certificate}
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

type CertificateCardProps = {
    certificate: Certificate;
    index: number;
    reduceMotion: boolean;
};

function CertificateCard({
    certificate,
    index,
    reduceMotion,
}: CertificateCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageFailed, setImageFailed] = useState(false);

    const canOpen = Boolean(certificate.url && imageLoaded && !imageFailed);

    const card = (
        <motion.article
            initial={
                reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 65,
                        rotateX: 8,
                    }
            }
            whileInView={
                reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                    }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.75,
                delay: Math.min(index * 0.06, 0.36),
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={
                reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        transition: { duration: 0.25 },
                    }
            }
            className="group relative h-full overflow-hidden rounded-[28px] border border-[#D7E2EA]/12 bg-[#111318] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
        >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10 bg-[#E9EDF0]">
                {!imageFailed && (
                    <img
                        src={certificate.image}
                        alt={certificate.title}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageFailed(true)}
                        className={`h-full w-full object-contain p-2 transition duration-700 group-hover:scale-[1.025] ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                )}

                {(!imageLoaded || imageFailed) && (
                    <div className="absolute inset-0 grid place-items-center bg-[#0A0C10] p-5 text-center">
                        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(215,226,234,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(215,226,234,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
                        <div className="relative flex flex-col items-center">
                            <motion.div
                                aria-hidden="true"
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            rotate: [0, 4, -4, 0],
                                            scale: [1, 1.04, 1],
                                        }
                                }
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="grid h-20 w-20 place-items-center rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.06] shadow-[0_0_45px_rgba(215,226,234,0.08)]"
                            >
                                <Award className="h-9 w-9 text-[#D7E2EA]/85" />
                            </motion.div>
                            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/45">
                                Add file to public/certificates
                            </p>
                            <p className="mt-2 break-all font-mono text-[11px] text-white/30">
                                {certificate.image.replace('/certificates/', '')}
                            </p>
                        </div>
                    </div>
                )}

                <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
                    {certificate.type}
                </div>

                <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white/75 backdrop-blur-md">
                    {certificate.year}
                </div>
            </div>

            <div className="p-4 sm:p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/45">
                            {certificate.issuer}
                        </p>
                        <h3 className="text-2xl font-semibold leading-tight text-[#D7E2EA]">
                            {certificate.title}
                        </h3>
                        {certificate.session && (
                            <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                                {certificate.session}
                            </p>
                        )}
                    </div>

                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#D7E2EA]/14 bg-[#D7E2EA]/[0.05] transition duration-300 group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C]">
                        {canOpen ? (
                            <ExternalLink className="h-4 w-4" />
                        ) : certificate.type === 'University Award' ? (
                            <GraduationCap className="h-4 w-4" />
                        ) : (
                            <FileCheck2 className="h-4 w-4" />
                        )}
                    </div>
                </div>

                <p className="text-sm font-light leading-7 text-[#D7E2EA]/60">
                    {certificate.description}
                </p>

                {canOpen && (
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D7E2EA]">
                        View certificate
                        <ExternalLink className="h-4 w-4" />
                    </div>
                )}
            </div>

            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </motion.article>
    );

    if (!canOpen || !certificate.url) return card;

    return (
        <a
            href={certificate.url}
            target="_blank"
            rel="noreferrer"
            className="block h-full"
            aria-label={`View ${certificate.title}${certificate.session ? ` ${certificate.session}` : ''}`}
        >
            {card}
        </a>
    );
}