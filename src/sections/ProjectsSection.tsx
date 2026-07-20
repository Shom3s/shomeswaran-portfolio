import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github } from 'lucide-react';
import {
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useRef,
} from 'react';
import type { MotionStyle } from 'framer-motion';
import { projects } from '../data';

type ProjectDetail = {
  description: string;
  technologies: string[];
  github: string;
};

type PortfolioProject = {
  number: string;
  name: string;
  category: string;
  images: string[];
};

/*
  Put all project screenshots inside:
  public/projects/

  Use these exact filenames:
  nutripulse.jpg
  farm2screen.jpg
  ipetro-virs.jpg
  retinal-disease-detection.jpg
  road-transport-authority.jpg
  library-management.jpg
  jpj-management.jpg
*/
const projectImagePaths: Record<string, string> = {
  '01': '/projects/nutripulse.jpg',
  '02': '/projects/farm2screen.jpg',
  '03': '/projects/ipetro-virs.jpg',
  '04': '/projects/retinal-disease-detection.jpg',
  '05': '/projects/road-transport-authority.jpg',
  '06': '/projects/library-management.jpg',
  '07': '/projects/jpj-management.jpg',
};

const additionalProjects: PortfolioProject[] = [
  {
    number: '02',
    name: 'Farm2Screen',
    category: 'Mobile Application',
    images: [projectImagePaths['02']],
  },
  {
    number: '03',
    name: 'IPETRO VIRS',
    category: 'Web Application',
    images: [projectImagePaths['03']],
  },
];

/*
  Final order:
  01 NutriPulse
  02 Farm2Screen
  03 IPETRO VIRS
  04 Retinal Disease Detection
  05 Road Transport Authority System
  06 Library Management System
  07 JPJ Management System
*/
const orderedProjects: PortfolioProject[] = [
  ...(projects[0]
    ? [
      {
        ...projects[0],
        number: '01',
        images: [projectImagePaths['01']],
      },
    ]
    : []),
  ...additionalProjects,
  ...projects
    .slice(1)
    .filter(
      (project) =>
        !project.name.toLowerCase().includes('exam result'),
    )
    .map((project, index) => {
      const number = String(index + 4).padStart(2, '0');

      return {
        ...project,
        number,
        images: [projectImagePaths[number]],
      };
    }),
];

const projectDetails: Record<string, ProjectDetail> = {
  '01': {
    description:
      'An AI-powered smart health monitoring and nutrition advisor concept that combines mobile app development, food recognition, IoT health data and personalised recommendations.',
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Health Connect'],
    github: 'https://github.com/Shom3s',
  },
  '02': {
    description:
      'A mobile pineapple marketplace that connects entrepreneurs with customers through dedicated portals, product management, shopping cart, checkout, order history, order-status tracking, secure authentication, real-time data and sales analytics.',
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Supabase Storage'],
    github: 'https://github.com/Shom3s/farm2screen',
  },
  '03': {
    description:
      'A web-based visual inspection reporting system based on API 510 requirements, with inspection data management, automated PDF and Microsoft Word report export, structured frontend and backend modules, database operations and live web deployment.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'SQL', 'API 510'],
    github: 'https://github.com/Shom3s',
  },
  '04': {
    description:
      'An image-based system concept developed to support early retinal disease screening by analysing fundus images and assisting healthcare-related decision making.',
    technologies: ['Python', 'TensorFlow', 'Image Processing', 'Medical AI'],
    github: 'https://github.com/Shom3s/Retinal-Disease-Detection',
  },
  '05': {
    description:
      'A menu-driven console system designed to manage vehicle owner records, data search, sorting and structured information processing.',
    technologies: ['C', 'Console Application', 'File Handling'],
    github: 'https://github.com/Shom3s/ROAD-TRANSPORT-AUTHORITY-SYSTEM',
  },
  '06': {
    description:
      'A system that manages book records, member details, borrowing activities, searching, sorting and data storage for library operations.',
    technologies: ['C', 'CSV Data Storage', 'Console Application'],
    github: 'https://github.com/Shom3s',
  },
  '07': {
    description:
      'A console-based vehicle management project that includes insert, delete, update, search, sorting and PUSPAKOM check features.',
    technologies: ['C', 'Console Application', 'File Handling'],
    github: 'https://github.com/Shom3s',
  },
};

const fallbackDetail: ProjectDetail = {
  description:
    'A software project created to solve a practical problem through clean interface design, reliable logic and maintainable code.',
  technologies: ['Software Development'],
  github: 'https://github.com/Shom3s',
};

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

/**
 * A CTA link that leans gently toward the cursor on hover — a small,
 * deliberate "signature" interaction rather than a decorative flourish.
 */
function MagneticLink({
  href,
  ariaLabel,
  reduceMotion,
  children,
}: {
  href: string;
  ariaLabel: string;
  reduceMotion: boolean;
  children: ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(event: ReactMouseEvent<HTMLAnchorElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-[#D7E2EA] bg-[#D7E2EA] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#0C0C0C] transition-colors duration-300 hover:bg-transparent hover:text-[#D7E2EA]"
    >
      {children}
    </motion.a>
  );
}

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
  totalCards: number;
};

function ProjectCard({
  project,
  index,
  totalCards,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const details = projectDetails[project.number] ?? fallbackDetail;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const cardOffset = `${index * 28}px`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 92%', 'end 12%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 30,
    mass: 0.28,
    restDelta: 0.001,
  });

  const cardScale = useTransform(
    smoothProgress,
    [0, 0.18, 0.76, 1],
    reduceMotion
      ? [1, 1, 1, 1]
      : [0.94, 1, 1, targetScale],
  );

  const cardY = useTransform(
    smoothProgress,
    [0, 0.2, 0.78, 1],
    reduceMotion ? [0, 0, 0, 0] : [90, 0, 0, -24],
  );

  const cardOpacity = useTransform(
    smoothProgress,
    [0, 0.12, 0.9, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.25, 1, 1, 0.78],
  );

  const cardRotateX = useTransform(
    smoothProgress,
    [0, 0.24, 1],
    reduceMotion ? [0, 0, 0] : [5, 0, -1.5],
  );

  const imageOpacity = useTransform(
    smoothProgress,
    [0, 0.16, 1],
    reduceMotion ? [1, 1, 1] : [0.55, 1, 1],
  );

  const contentY = useTransform(
    smoothProgress,
    [0, 0.22, 0.82, 1],
    reduceMotion ? [0, 0, 0, 0] : [44, 0, 0, -14],
  );

  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 1],
    reduceMotion ? [1, 1, 1] : [0.3, 1, 1],
  );

  const numberX = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [20, -14],
  );

  const progressScale = useTransform(
    smoothProgress,
    [0.04, 0.94],
    [0, 1],
  );

  // Pointer-driven tilt + spotlight, layered on top of the scroll-driven
  // motion above. Kept subtle and fully disabled under reduced motion.
  const pointerRotateY = useMotionValue(0);
  const springPointerRotateY = useSpring(pointerRotateY, {
    stiffness: 150,
    damping: 20,
    mass: 0.4,
  });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareBackground = useMotionTemplate`radial-gradient(560px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.07), transparent 60%)`;

  function handlePointerMove(event: ReactMouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    pointerRotateY.set((relX - 0.5) * 8);
    glareX.set(relX * 100);
    glareY.set(relY * 100);
  }

  function handlePointerLeave() {
    pointerRotateY.set(0);
  }

  return (
    <div
      ref={containerRef}
      className="relative mb-10 h-auto pb-4 md:mb-0 md:h-[94vh] md:pb-0"
    >
      <motion.article
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        whileHover={
          reduceMotion
            ? undefined
            : {
              boxShadow:
                '0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(215,226,234,0.25)',
            }
        }
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={
          {
            scale: cardScale,
            y: cardY,
            opacity: cardOpacity,
            rotateX: cardRotateX,
            rotateY: springPointerRotateY,
            transformPerspective: 1400,
            '--card-offset': cardOffset,
          } as MotionStyle & { '--card-offset': string }
        }
        className="group relative origin-top transform-gpu overflow-hidden rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.48)] will-change-transform sm:rounded-[42px] sm:p-5 md:sticky md:top-[calc(8rem+var(--card-offset))] md:rounded-[60px] md:p-8 md:shadow-[0_32px_100px_rgba(0,0,0,0.55)]"
      >
        <div className="absolute inset-x-8 top-0 z-30 h-[2px] overflow-hidden bg-white/10">
          <motion.div
            style={{ scaleX: progressScale }}
            className="h-full origin-left bg-[#D7E2EA]"
          />
        </div>

        <motion.div
          aria-hidden="true"
          style={{ background: glareBackground }}
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="grid overflow-hidden rounded-[24px] border border-white/10 bg-[#101216] sm:rounded-[34px] md:rounded-[48px] lg:h-[520px] lg:grid-cols-2 xl:h-[550px]">
          <div className="relative h-[280px] min-w-0 overflow-hidden border-b border-white/10 bg-[#0C0C0C] sm:h-[340px] lg:h-full lg:border-b-0 lg:border-r">
            <motion.img
              src={project.images[0]}
              alt={`${project.name} project preview`}
              loading="lazy"
              decoding="async"
              style={{
                opacity: imageOpacity,
              }}
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md sm:left-7 sm:top-7">
              {project.category}
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/65">
                Project {project.number} <span className="text-white/35">/ {String(totalCards).padStart(2, '0')}</span>
              </p>

              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md">
                Scroll
                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, 4, 0] }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </motion.span>
              </div>
            </div>
          </div>

          <motion.div
            style={{
              y: contentY,
              opacity: contentOpacity,
            }}
            className="relative flex min-w-0 transform-gpu flex-col justify-between overflow-hidden p-5 pb-6 will-change-transform sm:p-6 sm:pb-7 md:min-h-[390px] md:p-7 lg:h-full lg:min-h-0 lg:p-8 xl:p-9"
          >
            <div>
              <div className="mb-5 flex min-w-0 items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/38 sm:text-xs">
                    Selected project
                  </p>

                  <h3 className="max-w-full break-words text-[clamp(2rem,4.2vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tight text-[#D7E2EA]">
                    {project.name}
                  </h3>
                </div>

                <motion.span
                  style={{ x: numberX }}
                  className="shrink-0 text-[clamp(2.5rem,4.8vw,4.8rem)] font-black leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.14]"
                >
                  {project.number}
                </motion.span>
              </div>

              <p className="max-w-xl text-sm font-light leading-7 text-[#D7E2EA]/62 sm:text-base lg:text-[1.02rem]">
                {details.description}
              </p>

              <motion.div
                className="mt-6 flex flex-wrap gap-2"
                initial={reduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {details.technologies.map((technology) => (
                  <motion.span
                    key={technology}
                    variants={tagVariants}
                    className="rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs font-medium text-[#D7E2EA]/68 transition-colors duration-300 hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA]"
                  >
                    {technology}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-sm font-light leading-6 text-white/38">
                View the source code and implementation details on GitHub.
              </p>

              <MagneticLink
                href={details.github}
                ariaLabel={`Open ${project.name} GitHub repository`}
                reduceMotion={reduceMotion}
              >
                <Github className="h-5 w-5" />
                GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticLink>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'end 10%'],
  });

  const smoothSectionProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.3,
  });

  const headingY = useTransform(
    smoothSectionProgress,
    [0, 0.18],
    reduceMotion ? [0, 0] : [55, 0],
  );

  const headingOpacity = useTransform(
    smoothSectionProgress,
    [0, 0.12],
    reduceMotion ? [1, 1] : [0, 1],
  );

  const backgroundX = useTransform(
    smoothSectionProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['8%', '-18%'],
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 -mt-10 overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-24 text-[#D7E2EA] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-28 sm:pt-28 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-36 md:pt-32"
    >
      <motion.div
        aria-hidden="true"
        style={{ x: backgroundX }}
        className="pointer-events-none absolute left-0 top-[18%] whitespace-nowrap text-[28vw] font-black uppercase leading-none text-white/[0.018]"
      >
        Project · Build · Code
      </motion.div>

      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-white/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-40 h-96 w-96 rounded-full bg-white/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          style={{
            y: headingY,
            opacity: headingOpacity,
          }}
          className="mb-14 flex items-end justify-between gap-6 sm:mb-20"
        >
          <h2 className="hero-heading text-[clamp(4.2rem,11vw,150px)] font-black uppercase leading-[0.82] tracking-tight">
            Project
          </h2>

          <p className="hidden max-w-sm pb-2 text-right text-base font-light leading-7 text-white/48 md:block">
            Scroll to move, scale and reveal every project card.
          </p>
        </motion.div>

        <div className="relative">
          {orderedProjects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={orderedProjects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}