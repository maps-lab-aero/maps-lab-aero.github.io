export type Person = {
  name: string;
  role: string;
  lines: string[];
  email?: string;
  cv?: string;
  scholar?: string;
  photo?: string;
};

export type Project = {
  slug: string;
  title: string;
  dates: string;
  sponsor?: string;
  status: "current" | "past";
  summary: string;
  bullets: string[];
};

export type Publication = {
  year: number | "review";
  authors: string;
  title: string;
  venue: string;
  href?: string;
};

export type NewsItem = {
  date: string;
  text: string;
  href?: string;
  hrefLabel?: string;
};

export type Course = {
  code: string;
  title: string;
  description: string;
  objectives: string[];
};

export type SoftwareItem = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  links: { label: string; href: string }[];
  note?: string;
};

export const site = {
  name: "MAPS Lab",
  shortName: "MAPS",
  fullName:
    "Multidisciplinary Aerospace Propulsion Systems Design Laboratory",
  tagline: "Intelligent multidisciplinary design for aerospace propulsion",
  affiliation: "Department of Engineering",
  university: "Your University",
  affiliationUrl: "#affiliation",
  email: "lab@university.edu",
  address: "Engineering Building, Your University",
  copyrightYear: 2026,
  vision:
    "To shape the future of aerospace propulsion through intelligent multidisciplinary design, enabling cleaner, quieter, more efficient, and more reliable air transportation.",
  about: [
    "The Multidisciplinary Aerospace Propulsion Systems Design Laboratory (MAPS Lab) is part of the Department of Engineering at Your University.",
    "Our research focuses on the intelligent multidisciplinary design of aerospace propulsion systems — turbomachinery, propellers, and integrated powerplants — coupling aerodynamics, structures, heat transfer, acoustics, and controls.",
    "We develop high-fidelity analysis, adjoint-based optimization, and scientific AI so that propulsion design is faster, more robust, and ready for the next generation of air transportation.",
    "Our research is supported by national science and engineering agencies. See details of our research projects.",
  ],
  sponsors: ["National Science Foundation", "NASA", "Department of Energy"],
  interests: [
    "Aerospace propulsion systems",
    "Multidisciplinary design optimization",
    "Computational fluid dynamics",
    "Aeroacoustics and thermal management",
  ],
  collaborators: [
    "A. Chen, Partner University",
    "B. Okonkwo, National Laboratory",
    "C. Patel, Institute of Technology",
    "D. Rossi, Aerospace Center",
  ],
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/people", label: "People" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/education", label: "Education" },
  { to: "/software", label: "Software" },
  { to: "/openings", label: "Openings" },
] as const;

export const slides = [
  {
    id: "group",
    title: "The research group",
    caption: "Collaborative propulsion design, computation, and experiment",
  },
  {
    id: "flow",
    title: "High-fidelity flow",
    caption: "Adjoint-enabled CFD for aerodynamic design",
  },
  {
    id: "rotor",
    title: "Rotor and propeller",
    caption: "Aerostructural coupling for rotating systems",
  },
  {
    id: "heat",
    title: "Thermal management",
    caption: "Conjugate heat transfer for electric aircraft",
  },
  {
    id: "opt",
    title: "Design optimization",
    caption: "Gradient-based MDO across disciplines",
  },
  {
    id: "ai",
    title: "Scientific AI",
    caption: "Learning models that respect governing physics",
  },
];

export const news: NewsItem[] = [
  {
    date: "June 30, 2026",
    text: "The group received a CAREER award to develop autonomous AI agents for translational multidisciplinary design optimization.",
  },
  {
    date: "April 23, 2026",
    text: "A doctoral student successfully defended their dissertation and will join industry as a research engineer. Congratulations!",
  },
  {
    date: "January 5, 2026",
    text: "Our collaborative thermal-management paper has been accepted for publication in a leading heat-transfer journal.",
  },
  {
    date: "November 18, 2025",
    text: "A PhD student defended their dissertation on spacecraft trajectory and system co-optimization. Congratulations!",
  },
  {
    date: "September 17, 2025",
    text: "A new seed grant will support coupled system- and component-level multidisciplinary design of rotorcraft.",
  },
  {
    date: "July 14, 2025",
    text: "Our open-source design-optimization ecosystem project has been funded. Cheers!",
  },
  {
    date: "April 21, 2025",
    text: "One student passed the PhD final exam; two others passed their preliminary exams. Congratulations!",
  },
  {
    date: "April 8, 2025",
    text: "A doctoral student was awarded a prestigious graduate research fellowship.",
  },
  {
    date: "December 1, 2024",
    text: "A new project on wind-driven film-flow dynamics pertinent to icing phenomena has been funded.",
  },
  {
    date: "February 23, 2023",
    text: "The principal investigator was named a challenge scholar by the college.",
  },
];

export const people = {
  pi: [
    {
      name: "Alex Rivera",
      role: "Principal Investigator",
      lines: [
        "Associate Professor of Engineering",
        "Your University",
        "Computational design, adjoint methods, and scientific AI",
      ],
      email: "lab@university.edu",
    },
  ] satisfies Person[],
  postdocs: [
    {
      name: "Jordan Hale",
      role: "Postdoctoral researcher",
      lines: [
        "PhD, Your University",
        "M.S., Partner University",
        "Research topics — MDO, adjoint methods, and agentic AI",
      ],
    },
    {
      name: "Mei Lin",
      role: "Postdoctoral researcher",
      lines: [
        "PhD, Tsinghua University",
        "M.S., Harbin Institute of Technology",
        "Research topics — CFD, scientific AI, and icing simulations",
      ],
    },
  ] satisfies Person[],
  graduate: [
    {
      name: "Sam Ortega",
      role: "Ph.D. student",
      lines: [
        "B.S., Your University",
        "Research topic — Agentic AI and MDO for eVTOL aircraft",
      ],
    },
    {
      name: "Riley Cho",
      role: "Ph.D. student",
      lines: [
        "B.S., College of Charleston",
        "Research topics — Agentic AI for UAV multidisciplinary design",
        "Graduate research fellowship awardee",
      ],
    },
    {
      name: "Noah Adeyemi",
      role: "Ph.D. candidate",
      lines: [
        "M.S., Pennsylvania State University",
        "B.S., Wuhan University of Science and Technology",
        "Research topic — Field-inversion ML for unsteady airfoil flows",
      ],
    },
    {
      name: "Elena Voss",
      role: "M.S. student",
      lines: [
        "B.S., Your University",
        "Research topic — Machine learning methods for solving PDEs",
      ],
    },
  ] satisfies Person[],
  undergraduate: [
    {
      name: "Chris Barber",
      role: "Undergraduate researcher",
      lines: [
        "B.S., Your University",
        "Research topic — Aircraft aerodynamic design optimization",
      ],
    },
    {
      name: "Noa Madison",
      role: "B.S./M.S. concurrent program",
      lines: [
        "B.S., Your University",
        "Research topic — Wing aerodynamic shape optimization",
      ],
    },
  ] satisfies Person[],
  formerGraduate: [
    {
      name: "H. K.",
      role: "PhD student (2021–2026)",
      lines: [
        "Thesis — CFD-based design optimization for aerospace systems",
        "First stop — Research engineer in industry",
      ],
    },
    {
      name: "G. H.",
      role: "PhD student (2021–2025)",
      lines: [
        "Thesis — Coupled spacecraft trajectory and system co-optimization",
        "First stop — Research engineer in industry",
      ],
    },
    {
      name: "L. F.",
      role: "PhD student (2021–2025)",
      lines: [
        "Thesis — Efficient adjoint methods for steady and unsteady flow",
        "First stop — Postdoc with the group",
      ],
    },
    {
      name: "K. H.",
      role: "M.S. student (2023–2024)",
      lines: [
        "Thesis — High-fidelity aerostructural optimization of high-aspect-ratio wings",
        "First stop — Research engineer at a national laboratory",
      ],
    },
  ] satisfies Person[],
  formerUndergraduate: [
    {
      name: "M. D.",
      role: "Undergraduate research assistant (2025–2026)",
      lines: [
        "Research topic — Aircraft conceptual design optimization",
        "First stop — Research engineer in industry",
      ],
    },
    {
      name: "A. T.",
      role: "Undergraduate research assistant (2020–2022)",
      lines: [
        "Research topic — Design-optimization graphical interface",
        "First stop — Aerodynamics engineer in industry",
      ],
    },
  ] satisfies Person[],
};

export const peopleSections: { id: string; title: string; people: Person[] }[] =
  [
    { id: "pi", title: "Principal Investigator", people: people.pi },
    { id: "postdocs", title: "Postdocs", people: people.postdocs },
    { id: "graduate", title: "Graduate Students", people: people.graduate },
    {
      id: "undergraduate",
      title: "Undergraduate Students",
      people: people.undergraduate,
    },
    {
      id: "former-grad",
      title: "Former Graduate Students",
      people: people.formerGraduate,
    },
    {
      id: "former-undergrad",
      title: "Former Undergraduate Students",
      people: people.formerUndergraduate,
    },
  ];

export const projects: Project[] = [
  {
    slug: "career-ai-mdo",
    title:
      "CAREER: Autonomous AI Agents for Translational Multidisciplinary Design Optimization",
    dates: "9/2026 – 8/2031",
    sponsor: "NSF CAREER",
    status: "current",
    summary:
      "This project develops autonomous AI agents that plan, run, and interpret high-fidelity multidisciplinary design optimization studies, with the goal of making MDO a routine part of engineering practice.",
    bullets: [
      "Conversational agents that set up CFD and MDO studies from natural-language intent",
      "Tool-use loops that call adjoint solvers, check residuals, and propose design moves",
      "Curriculum and open tutorials that bring agentic MDO into the classroom",
    ],
  },
  {
    slug: "mars-rotorcraft",
    title:
      "Coupled System- and Component-level Multidisciplinary Design Optimization of Mars Rotorcraft",
    dates: "9/2025 – 8/2026",
    sponsor: "NASA EPSCoR",
    status: "current",
    summary:
      "We couple vehicle-level mission models with high-fidelity rotor aerodynamics and structures to design Mars rotorcraft that can fly in thin atmosphere with tight mass budgets.",
    bullets: [
      "System-level trajectory and power models linked to component CFD",
      "Aerostructural design of rotors under Martian Reynolds numbers",
      "Uncertainty-aware constraints for dust, density, and manufacturing",
    ],
  },
  {
    slug: "open-mdo",
    title:
      "Open Source Ecosystem for Large-scale Multidisciplinary Design Optimization",
    dates: "7/2025 – 6/2026",
    sponsor: "NSF POSE",
    status: "current",
    summary:
      "We are growing an open-source ecosystem around discrete-adjoint CFD so that research groups worldwide can perform large-scale MDO without proprietary stacks.",
    bullets: [
      "Packaging, documentation, and continuous integration for the core library",
      "Community tutorials spanning aircraft, automobiles, and energy devices",
      "Governance and contribution pathways for academic and industry users",
    ],
  },
  {
    slug: "turbine-icing",
    title:
      "Wind-Driven Water Film Flow Dynamics Pertinent to Wind Turbine Icing",
    dates: "12/2024 – 11/2027",
    sponsor: "NSF CBET",
    status: "current",
    summary:
      "An integrated numerical and experimental study of wind-driven water films on turbine blades, aimed at predicting runback, rivulets, and icing onset.",
    bullets: [
      "High-fidelity film-flow simulation with adjoint sensitivity",
      "Companion experiments for interfacial shear and film thickness",
      "Reduced models suitable for design under icing constraints",
    ],
  },
  {
    slug: "evtol-heat",
    title:
      "High-fidelity Multidisciplinary Design Optimization of Heat Exchangers for eVTOL Thermal Management",
    dates: "8/2023 – 8/2025",
    sponsor: "NASA EPSCoR",
    status: "current",
    summary:
      "Electric vertical-lift aircraft pack dense batteries and motors into tight airframes. We optimize heat exchangers with conjugate heat transfer and discrete adjoints.",
    bullets: [
      "Modular conjugate-heat-transfer optimization framework",
      "Shape design of U-bend passages and cold plates",
      "Coupling to vehicle-level thermal-management architectures",
    ],
  },
  {
    slug: "unsteady-mdo",
    title:
      "Enabling Large-scale MDO with Unsteady Simulations: A Hybrid Pseudo-spectral Approach",
    dates: "9/2022 – 8/2026",
    sponsor: "NSF CMMI",
    status: "current",
    summary:
      "Unsteady aerodynamics is expensive to differentiate. We develop hybrid time-spectral and time-accurate adjoints so that gust, stall, and rotor problems become tractable MDO objectives.",
    bullets: [
      "Duality-preserving adjoints for segregated Navier–Stokes solvers",
      "Field-inversion machine learning for time-resolved unsteady flow",
      "Demonstrations on airfoil dynamic stall and urban air mobility",
    ],
  },
  {
    slug: "propeller-wing",
    title: "High-fidelity MDO considering propeller–wing interaction",
    dates: "5/2021 – 5/2022",
    sponsor: "Industry",
    status: "past",
    summary:
      "Distributed propulsion couples propeller wakes to wing aerodynamics. This project built an adjoint pipeline for simultaneous propeller and wing design.",
    bullets: [
      "Coupled wing–propeller aerodynamic optimization",
      "Wake-resolved CFD with mesh deformation",
      "Aerostructural propeller benchmarks in hover",
    ],
  },
  {
    slug: "mdo-vehicles",
    title: "Multidisciplinary design optimization for sea, land, and air vehicles",
    dates: "6/2016 – 8/2020",
    sponsor: "Prior appointment",
    status: "past",
    summary:
      "A multi-year effort to apply discrete-adjoint MDO across aircraft, automobiles, and ships, establishing the core methods the group still builds on.",
    bullets: [
      "Discrete adjoint with a popular open-source CFD package",
      "Python coupling to OpenMDAO for architecture-level MDO",
      "Applications from transonic wings to hull forms",
    ],
  },
];

export const publications: Publication[] = [
  {
    year: "review",
    authors: "G. Harris, R. Falck, E. Aretskin-Hariton, A. Rivera",
    title:
      "Large Scale Trajectory Optimization for Low Thrust Spacecraft using Analytical Gradients",
    venue: "Journal of Spacecraft and Rockets",
  },
  {
    year: "review",
    authors: "R. Cho, H. Koyuncuoglu, A. Dhulipalla, H. Hu, A. Rivera",
    title:
      "High-fidelity Aerostructural Design Optimization of UAV Propellers with Experimental Validations",
    venue: "Aerospace Science and Technology",
  },
  {
    year: "review",
    authors: "M. Lin, A. Rivera, H. Hu",
    title: "Transformer-Diffusion Modeling of Unsteady Flow over an Iced Airfoil",
    venue: "AIAA Journal",
  },
  {
    year: 2026,
    authors: "N. Adeyemi, J. Hale, M. Lin, A. Sharma, A. Rivera",
    title:
      "Field Inversion Machine Learning for Time-Resolved Unsteady Flows in Airfoil Dynamic Stall",
    venue: "AIAA Journal, 2026",
    href: "https://doi.org/10.2514/1.J000000",
  },
  {
    year: 2026,
    authors: "S. Ortega, J. Hale, R. Cho, M. Leader, A. Rivera",
    title:
      "A Modular Conjugate Heat Transfer Optimization Framework for Thermal Management of Electric Aircraft",
    venue: "International Journal of Heat and Mass Transfer, 2026",
  },
  {
    year: 2026,
    authors: "J. Hale, A. Rivera",
    title:
      "Agentic AI for Conversational Aerodynamic Analysis and Optimization of Airfoils and Wings",
    venue: "AIAA SciTech Forum, 2026",
  },
  {
    year: 2025,
    authors: "J. Hale, A. Rivera",
    title: "A Duality-Preserving Adjoint Method for Segregated Navier-Stokes Solvers",
    venue: "Journal of Computational Physics, 2025",
  },
  {
    year: 2025,
    authors: "S. Choi, O. Abdelkhalik, A. Rivera",
    title:
      "Multidisciplinary Optimization of End-to-End Mars Aerobraking Trajectory and Spacecraft Design",
    venue: "Advances in Space Research, 2025",
  },
  {
    year: 2024,
    authors: "J. Hale, A. Rivera",
    title:
      "Field inversion machine learning augmented turbulence modeling for time-accurate unsteady flow",
    venue: "Physics of Fluids, 2024",
  },
  {
    year: 2024,
    authors: "G. Harris, A. Rivera, O. Abdelkhalik",
    title:
      "Control Co-Design Optimization of Spacecraft Trajectory and System for Interplanetary Missions",
    venue: "Journal of Spacecraft and Rockets, 2024",
  },
  {
    year: 2023,
    authors: "J. Wang, H. Hu, A. Rivera",
    title:
      "A Machine Learning Study to Predict Wind-Driven Water Runback Characteristics",
    venue: "Physics of Fluids, 2023",
  },
  {
    year: 2022,
    authors: "A. Rivera et al.",
    title:
      "Simultaneous wing shape and actuator parameter optimization using the adjoint method",
    venue: "Aerospace Science and Technology, 2022",
  },
];

export const courses: Course[] = [
  {
    code: "Eng 3620",
    title: "Engineering Systems Integration",
    description:
      "Emphasis on the impact of component interfaces in engineering systems. Students learn how changes in variables associated with individual components impact system performance, including implicit disciplinary interactions, uncertainty, and trade-offs among component attributes.",
    objectives: [
      "Formulate engineering design optimization problems",
      "Explain the pros and cons of various optimization algorithms",
      "Solve single-disciplinary optimization problems analytically",
      "Extend design optimization to multiple disciplines or components",
      "Use computers to solve optimization problems numerically",
    ],
  },
  {
    code: "Eng 4630 / 5630",
    title: "Introduction to Multidisciplinary Design Optimization",
    description:
      "Introduction to the theory and methods of MDO, including system coupling, system sensitivity methods, decomposition methods, MDO formulations (MDF, IDF, AAO), and MDO search methods.",
    objectives: [
      "Compute a system’s performance using numerical simulations",
      "Write codes to optimize a system’s performance, subject to constraints",
      "Identify the best optimization algorithm and analysis tools for MDO problems",
      "Write a project proposal for an MDO problem of interest",
      "Solve the MDO problem, analyze results, and write a project report",
    ],
  },
];

export const educationNotes = {
  undergrad:
    "We supervise undergraduate researchers each year. Each student meets with the group to identify a topic, conduct a brief literature review, learn to run analyses and optimization on high-performance computing systems, and evaluate simulation results. Students attend group meetings to share progress and discuss challenges. Projects are closely integrated with ongoing group initiatives.",
  outreach:
    "We collaborate with university outreach programs for middle-school students. Graduate students and the PI share career paths and current research, then lead a hands-on activity — for example folding and flight-testing paper airplanes — to connect design, experiment, and iteration.",
};

export const software: SoftwareItem[] = [
  {
    name: "DAOpt",
    tagline: "Discrete adjoint optimization for high-fidelity MDO",
    description:
      "The group develops an efficient discrete-adjoint method to perform high-fidelity multidisciplinary design optimization. The framework uses a popular open-source CFD package for multiphysics analysis and exposes a Python interface for architecture-level coupling.",
    features: [
      "Jacobian-free discrete adjoint with competitive speed, scalability, and accuracy",
      "Convenient Python interface to couple with OpenMDAO",
      "Applications across aircraft, automobiles, wind turbines, and medical devices",
    ],
    links: [
      { label: "Code", href: "https://github.com/" },
      { label: "Documentation", href: "#" },
      { label: "Paper", href: "#" },
    ],
    note: "The project began in 2016 and became open source in 2019. We gratefully acknowledge industrial and agency sponsors for continued support.",
  },
];

export const openings = {
  intro:
    "We are always interested in working with motivated students and researchers who want to shape the future of aerospace propulsion through intelligent multidisciplinary design.",
  positions: [
    {
      title: "Ph.D. students",
      body: "Openings are available for doctoral students with a background in aerospace, mechanical, or computational engineering. Experience with CFD, optimization, or scientific computing is helpful but not required. Applicants should be curious, independent, and comfortable writing software.",
    },
    {
      title: "Postdoctoral researchers",
      body: "We periodically recruit postdocs in adjoint methods, scientific machine learning, and multidisciplinary design. A strong publication record and experience with large-scale simulation are expected.",
    },
    {
      title: "Undergraduate researchers",
      body: "Undergraduate students at the university can join for academic-year or summer research. Typical projects last one or two semesters and often lead to a conference paper.",
    },
  ],
  howTo: `Email a CV, unofficial transcript, and a short note on research interests to ${"lab@university.edu"}. Please put “MAPS Lab application” in the subject line.`,
};

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function publicationsByYear() {
  const review = publications.filter((p) => p.year === "review");
  const years = [
    ...new Set(
      publications.filter((p) => p.year !== "review").map((p) => p.year as number),
    ),
  ].sort((a, b) => b - a);
  return [
    ...(review.length ? [{ label: "Under review", items: review }] : []),
    ...years.map((year) => ({
      label: String(year),
      items: publications.filter((p) => p.year === year),
    })),
  ];
}
