export const profile = {
  fullName: 'Shomeswaran',
  shortName: 'Shomes',
  role: 'Software Developer',
  email: 'shomezwaran@gmail.com',
  heroLine: 'a software developer driven by building clean, fast and unforgettable digital projects',
  about:
    "I’m a software developer focused on building mobile applications, web systems, AI-powered solutions, and IoT-connected platforms. I turn ideas into reliable digital products through clean interfaces, strong logic, secure databases, and smooth user experiences. My goal is to create practical software that solves real problems, performs efficiently, and is easy to use. ",
};

export type CodeCard = {
  file: string;
  language: string;
  code: string;
};

export const codeCards: CodeCard[] = [
  {
    file: 'profile.ts',
    language: 'TypeScript',
    code: `const developer = {
  name: "Shomeswaran",
  role: "Software Developer",
  location: "Malaysia",
  status: "Open to opportunities"
};`,
  },
  {
    file: 'stack.ts',
    language: 'TypeScript',
    code: `const stack: string[] = [
  "Flutter",
  "Firebase",
  "JavaScript",
  "PHP",
  "MySQL",
  "Python"
];`,
  },
  {
    file: 'build.ts',
    language: 'TypeScript',
    code: `function buildProduct(idea: string) {
  return {
    ui: "Clean and responsive",
    logic: "Reliable",
    database: "Well structured",
    result: "Working software"
  };
}`,
  },
  {
    file: 'focus.json',
    language: 'JSON',
    code: `{
  "currentFocus": [
    "Mobile development",
    "AI integration",
    "Backend systems"
  ],
  "alwaysLearning": true
}`,
  },
  {
    file: 'workflow.js',
    language: 'JavaScript',
    code: `const workflow = [
  "Plan",
  "Design",
  "Develop",
  "Test",
  "Improve"
];

ship(workflow);`,
  },
  {
    file: 'mindset.js',
    language: 'JavaScript',
    code: `while (problem.exists) {
  analyze(problem);
  build(solution);
  test(solution);
  improve(solution);
}

return "Never stop learning";`,
  },
  {
    file: 'terminal.sh',
    language: 'Terminal',
    code: `$ whoami
Shomeswaran

$ role
Software Developer

$ status
Ready to build`,
  },
  {
    file: 'availability.ts',
    language: 'TypeScript',
    code: `const availability = {
  internship: true,
  collaboration: true,
  freelance: true,
  coffee: "always"
};`,
  },
];

export const services = [
  {
    number: '01',
    name: 'App Development',
    description:
      'Development of clean mobile applications with authentication, database connection, dashboards, notifications and smooth user flows.',
  },
  {
    number: '02',
    name: 'Web Systems',
    description:
      'Building responsive web systems with login, registration, CRUD modules, admin panels and practical business workflows.',
  },
  {
    number: '03',
    name: 'UI Engineering',
    description:
      'Creating modern interfaces with strong layout, typography, animations and responsive behaviour for mobile and desktop screens.',
  },
  {
    number: '04',
    name: 'Database Design',
    description:
      'Designing structured databases, relationships, secure data rules and efficient queries for reliable application performance.',
  },
  {
    number: '05',
    name: 'Debugging',
    description:
      'Finding errors, improving code structure, fixing broken flows and polishing existing projects so they work better and feel complete.',
  },
];

export const projects = [
  {
    number: '01',
    name: 'NutriPulse',
    category: 'Mobile App',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    // TODO: replace placeholder image with a real screenshot of the retinal-disease-detection UI
    number: '02',
    name: 'Retinal Disease Detection',
    category: 'AI Project',
    images: [
      'https://placehold.co/1280x900/101216/D7E2EA?font=montserrat&text=Retinal+Disease+Detection',
    ],
  },
  {
    // TODO: replace placeholder image with a real screenshot
    number: '03',
    name: 'Exam Result Management System',
    category: 'Web System',
    images: [
      'https://placehold.co/1280x900/101216/D7E2EA?font=montserrat&text=Exam+Result+Management+System',
    ],
  },
  {
    // TODO: replace placeholder image with a real screenshot
    number: '04',
    name: 'Road Transport Authority System',
    category: 'Console System',
    images: [
      'https://placehold.co/1280x900/101216/D7E2EA?font=montserrat&text=Road+Transport+Authority+System',
    ],
  },
  {
    // TODO: replace placeholder image with a real screenshot
    number: '05',
    name: 'Library Management System',
    category: 'Library System',
    images: [
      'https://placehold.co/1280x900/101216/D7E2EA?font=montserrat&text=Library+Management+System',
    ],
  },
  {
    // TODO: replace placeholder image with a real screenshot
    number: '06',
    name: 'JPJ Management System',
    category: 'Management System',
    images: [
      'https://placehold.co/1280x900/101216/D7E2EA?font=montserrat&text=JPJ+Management+System',
    ],
  },
];

export const testimonials = [
  {
    name: 'Project Mentor',
    role: 'App Review',
    text: 'He builds with clear logic, clean screens and practical features that are easy to test and understand.',
  },
  {
    name: 'Team Member',
    role: 'Group Project',
    text: 'A reliable developer who can handle UI, database flow, debugging and final project polishing under pressure.',
  },
  {
    name: 'Client Style',
    role: 'Web System',
    text: 'The final interface feels modern, responsive and simple for users while still keeping the backend organised.',
  },
  {
    name: 'Reviewer',
    role: 'Portfolio',
    text: 'Strong attention to animation, spacing and user experience gives the project a professional visual impact.',
  },
];

export const decorativeImages = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
  portrait: '/images/avatar.png',
};