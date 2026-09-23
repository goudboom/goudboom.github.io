// English UI copy. Source of truth for review: bron/TEKSTEN-EN.md.
// The Inspiratiebank stays Dutch: the English site links to it with a short English intro.
// Missing keys fall back to Dutch (see src/i18n/index.ts).

import type { Dict } from './nl';

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

export const en: DeepPartial<Dict> = {
  meta: {
    locale: 'en_GB',
  },
  a11y: {
    skipLink: 'Skip to content',
    menuOpen: 'Menu',
    menuClose: 'Close menu',
    logoLabel: 'Goudboom Adviesbureau, to the homepage',
    langSwitchLabel: 'Deze pagina in het Nederlands',
    mainNav: 'Main menu',
    breadcrumb: 'Breadcrumb',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    inspiration: 'Inspiratiebank',
    contact: 'About & contact',
  },
  cta: {
    lunch: 'Schedule an introductory lunch',
    lunchShort: 'Plan a lunch',
    call: 'Call now',
    lunchSubject: 'Introductory lunch',
    lunchBody: 'Hi Yuri, I would like to have lunch some time. Where things are stuck for us: …',
  },
  footer: {
    kvkLabel: 'Chamber of Commerce',
    linkedin: 'LinkedIn',
    privacy: 'Privacy',
  },
  services: {
    items: {
      projectManagement: {
        title: 'Project management',
        line: 'Getting stalled or delayed projects moving again, and making the result land in the organisation.',
        more: 'More about project management',
      },
      itConsultancy: {
        title: 'IT/IV consultancy & operations',
        line: 'From reactive firefighting to an operations team that gets a grip and keeps it.',
        more: 'More about IT/IV consultancy',
      },
      agileCoaching: {
        title: 'Agile coaching & product ownership',
        line: 'Teams that do more than "do Scrum": they deliver value predictably.',
        more: 'More about agile coaching',
      },
    },
  },
  inspiration: {
    randomButton: 'Give me random inspiration',
    randomMicrocopy: 'Something else to think about for a moment.',
    toOverview: 'To the Inspiratiebank',
  },
  home: {
    seo: {
      title: 'Goudboom Adviesbureau — complex IT and organisational issues',
      description:
        'Goudboom helps organisations with complex IT and organisational issues, from project management and consultancy to agile coaching.',
    },
    hero: {
      eyebrow: 'Slagkracht. Transformatie. Impact.',
      title: 'Complex IT and organisational issues, moving again.',
      text: 'Goudboom helps organisations with projects that have stalled, operations teams losing their grip and teams that no longer move forward. With structure where it is needed, agility where it is possible, and always an eye for what comes next.',
      proof: [
        'Over 9 years of experience',
        'Aviation, justice, healthcare and the public sector',
        'PRINCE2 · ITIL · SAFe',
      ],
    },
    recognize: {
      title: 'Does this sound familiar?',
      items: [
        'A project is months behind, and nobody knows exactly why any more.',
        'Client and supplier point at each other. The atmosphere has soured.',
        'Your team is firefighting instead of moving forward.',
        'Another consultant joins, and when they leave, the knowledge leaves with them.',
      ],
      closing:
        'I am Yuri van der Putten. Managers call me when things are stuck. I stay at the helm until it stands, not until the report is finished.',
    },
    services: {
      title: 'One problem, three angles',
    },
    approach: {
      title: 'How I work',
      steps: [
        {
          title: 'Getting acquainted.',
          text: 'Preferably over lunch, on me. You tell me where it hurts, I ask questions.',
        },
        {
          title: 'Plan of action.',
          text: 'A clear picture of the real problem, what "done" means and what the first step is.',
        },
        {
          title: 'Getting to work, with handover from day one.',
          text: 'I deliver and build the handover as I go, so that what I leave behind keeps standing.',
        },
      ],
    },
    vision: {
      title: 'The Goudboom vision',
      items: [
        {
          term: 'Enjoyment at work',
          text: 'Serious about enjoyment at work. Not as a bonus, but as a condition for change, improvement and innovation that people actually carry.',
        },
        {
          term: 'Foundation',
          text: 'Getting the basics right brings calm and room. It makes teams agile and gives people control over their work again. In control together, without regulating everything.',
        },
        {
          term: 'Continuity',
          text: 'What does a consultant leave behind? A solution that works and keeps working. That is why I make sure knowledge, ways of working and ownership land in the organisation.',
        },
      ],
      more: 'More about me',
      portraitAlt: 'Yuri van der Putten, owner of Goudboom Adviesbureau',
    },
    inspiration: {
      title: 'Inspiratiebank',
      text: 'Ideas, questions, frameworks and observations to look at work, teams and change differently. The Inspiratiebank is in Dutch.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'What does Goudboom Adviesbureau do?',
          a: 'Goudboom Adviesbureau gets complex IT and organisational issues moving again. Yuri van der Putten works as an interim project manager, IT/IV consultant and agile coach, and makes sure the result keeps standing after he leaves.',
        },
        {
          q: 'Which organisations do you work for?',
          a: 'For medium-sized and large organisations, mainly in the (semi-)public sector: among others aviation, justice, healthcare and public health.',
        },
        {
          q: 'When do you bring Goudboom in?',
          a: 'When a project is stuck or behind schedule, when suppliers and the organisation work past each other, or when an operations team needs to become more robust and predictable.',
        },
        {
          q: 'What is left behind after an assignment?',
          a: 'I build the handover from the start: clear processes, clear roles, embedded ways of working and teams that can continue on their own.',
        },
        {
          q: 'Do you work traditionally or agile?',
          a: 'Both. Traditional where it must be, agile where it can be. The approach follows the context, not the other way round.',
        },
        {
          q: 'Can I also hire you through an intermediary?',
          a: 'Yes. You can engage Goudboom Adviesbureau directly or through an intermediary.',
        },
        {
          q: 'How do I get in touch?',
          a: 'Call +31 6 508 74 235 or e-mail info@goudboom.nl. An introduction can also take place over lunch, on Goudboom.',
        },
      ],
    },
    closing: {
      title: 'Something stuck? Let us have lunch.',
    },
  },

  servicesOverview: {
    seo: {
      title: 'Services — project management, IT/IV consultancy and agile coaching',
      description:
        'Three angles on one problem: getting complex IT and organisational issues moving again, and making sure they keep working.',
    },
    title: 'One problem, three angles',
    intro: [
      'That something is needed is often clear. But what exactly? A jack of all trades?',
      'That is why the Goudboom services are described separately, although in practice they cannot be seen apart. A good project manager has a feel for technology and for people. An IT consultant has to switch between strategy and operations. An agile coach has to understand what is going on below the surface.',
    ],
    pairsIntro: 'The added value lies precisely in that combination:',
    pairs: [
      ['Technology', 'People'],
      ['Analytical', 'Involved'],
      ['Helicopter view', 'Results-driven'],
      ['Discipline', 'Creativity'],
      ['Strategic', 'Operational'],
    ],
    outro: 'Below you will find a short explanation of each service, with examples from practice.',
  },

  serviceLabels: {
    forWhom: 'Who it is for',
    helpWith: 'What I can help with',
    practice: 'From practice',
    situation: 'The situation',
    approach: 'My approach',
    result: 'The result',
    relevant: 'Relevant:',
    inspiration: 'Inspiration on this topic (in Dutch)',
  },

  servicePages: {
    projectManagement: {
      seo: {
        title: 'Interim project manager for stalled IT projects | Goudboom',
        description:
          'A project behind schedule or stuck? Clear goals, a realistic plan, suppliers held to agreements and a result that lands in the organisation.',
      },
      title: 'Project management',
      positioning: [
        'A good project does not start with the planning, but with the question why the project is needed. What is the problem? When is the result good enough? Who should benefit from it, and who has to make it possible?',
        'From there I bring structure: clear goals, a realistic plan, risks, decision-making and ownership. Where the situation calls for it, I work in short cycles and adjust based on progress and new insights. The goal is not only a project that is completed, but a result that actually lands in the organisation.',
      ],
      forWhom:
        'Managers with a project that is stuck, behind schedule, or in which too many suppliers and interests come together.',
      helpWith: [
        { label: null, text: 'Getting stalled or delayed projects moving again' },
        { label: null, text: 'Making scope, planning and milestones realistic again' },
        { label: null, text: 'Holding suppliers to clear agreements' },
        { label: null, text: 'Bringing several projects and interests under one direction' },
        { label: null, text: 'Making risks, budget and progress visible and manageable' },
        { label: null, text: 'Handing projects over to an operations team that can carry them' },
      ],
      cases: [
        {
          title: 'Two years stuck, completed in four months',
          situation:
            'A workplace migration in healthcare had been running for two years. Client and supplier stood opposed to each other, there was miscommunication, and knowledge had been lost.',
          approach:
            'I broke the project down into manageable parts (hardware, software, exceptions) and phases (preparation, transition, aftercare). We started with hardware, because everything else depended on it. By making concrete progress visible, trust returned and there was room for the next steps.',
          result:
            'Realistic deadlines, calm among the stakeholders, and a project that was completed within four months and handed over to the organisation.',
        },
        {
          title: 'A year behind, live nine months later',
          situation:
            'Within the safety domain of a large, heavily regulated organisation, several projects ran at the same time, including new systems for safety reports and permits. Several suppliers, four teams and seventeen services that had to keep running in the meantime. One project was a year behind.',
          approach:
            'Scope reduced to what was really needed, priorities made explicit and suppliers held to clear agreements. At the same time I guarded the line between project and operations, so the teams were not swallowed up by the issues of the day.',
          result:
            'The delayed project was delivered within nine months, with an operations team able to take over the result.',
        },
        {
          title: 'Two streams, one direction',
          situation:
            'At a public health organisation I set up a project organisation for, among other things, an Exchange migration, the introduction of Teams and a new telecom provider. Then covid hit: the service desk was working overtime because of the accelerated roll-out of working from home, and all priorities shifted.',
          approach:
            'Not choosing between project and crisis, but picking up both streams. All projects got a single overview in Jira, so it stayed clear what continued and what could wait. At the same time I coordinated the service desk during the peak.',
          result: 'The organisation could work from home, and the projects were completed.',
        },
      ],
      relevant: 'PRINCE2®',
      closing: 'Is your project stuck?',
    },

    itConsultancy: {
      seo: {
        title: 'IT/IV consultant, functional management and service management',
        description:
          'IT should support the work, not the other way round. From reactive firefighting to an operations team with direction that keeps standing after I leave.',
      },
      title: 'IT/IV consultancy & operations',
      subtitle: 'IT/IV consultancy, functional management and service management',
      positioning: [
        'IT should support the work, not the other way round. I help organisations bring technology, information provision, processes and business goals back in line with each other. In doing so I move between different worlds: business processes, information, software, infrastructure and suppliers. I analyse what is going on, bring interests together and translate complex issues into concrete choices and actions.',
        'In that role I am a quartermaster, a director and an adviser. The exact role differs per organisation and per question. Sometimes a team has to be set up again, sometimes information provision has to fit the organisation better, and sometimes what is needed most is direction. I take on the role that is needed at that moment to move forward together.',
      ],
      forWhom:
        'Organisations where operations are reactive, or where information provision, applications and suppliers do not fit together well.',
      helpWith: [
        {
          label: 'Direction and management:',
          text: 'information management, service management and service delivery, roadmap and portfolio management',
        },
        {
          label: 'Operations:',
          text: 'functional management, application management, ICT management and lifecycle management',
        },
        {
          label: 'Analysis and change:',
          text: 'business analysis, testing and acceptance, migration and implementation projects',
        },
        { label: 'Suppliers and chains:', text: 'holding suppliers and chain partners to clear agreements' },
      ],
      model: {
        title: 'The nine-square model: the position of functional management',
        caption:
          "Rijken's model connects the business, information and technology domains at strategic, tactical and operational level.",
        columns: ['Business domain', 'Information domain', 'Technology domain'],
        rows: [
          { level: 'Strategic', cells: ['Business policy', 'Information policy', 'ICT policy'] },
          { level: 'Tactical', cells: ['Process management', 'Information management', 'ICT management'] },
          { level: 'Operational', cells: ['Process operations', 'Functional management', 'Systems management'] },
        ],
        highlight: 'Functional management',
      },
      cases: [
        {
          title: 'Migration, everything on the table',
          situation:
            'A foundation wanted to move from remote desktop to an M365 workplace through a tender.',
          approach:
            'Not only migrating technically, but using the change together with management as a catalyst: addressing business processes and, with a group of pioneers, establishing a culture of collaboration and transparency. The project became a programme with long and short running projects, active stakeholder involvement and interim deliveries, within a well-considered technical framework (security first).',
          result: 'The tender won, room for new wishes, and discharge within time and budget.',
        },
        {
          title: 'Coordinate the coordinator',
          situation: 'A team with big challenges, and only 4 hours (0.1 FTE) available for the team.',
          approach: 'Gave a team member coordinating tasks, with tools and coaching to grow into that role.',
          result: 'The role was accepted, and order emerged from the chaos.',
        },
      ],
      relevant: 'BiSL · ITIL',
      closing: 'Is your team still firefighting?',
    },

    agileCoaching: {
      seo: {
        title: 'Agile coach, scrum master and product owner | Goudboom',
        description:
          'Teams that do more than "do Scrum": they deliver value predictably. Coaching at team and organisation level, and product ownership in complex chains.',
      },
      title: 'Agile coaching & product ownership',
      positioning: [
        'My experience with agile coaching lies mainly in information management and IT operations. That is exactly where dependencies, disruptions and shifting priorities are daily reality. Teams have to deal with that without reinventing their way of working with every change. That is why I help teams work more flexibly, more independently and more effectively.',
        'Where needed I also take on the role of product owner: guarding the product vision, setting sharp priorities and aligning stakeholders and suppliers, so the team works on the right things.',
      ],
      forWhom:
        'Teams that "do Scrum" but do not deliver, a new team that has to become predictable quickly, or a product stream in which several teams depend on each other.',
      helpWith: [
        { label: null, text: 'Introducing and embedding agile ways of working (Scrum, Kanban, Lean, SAFe)' },
        { label: null, text: 'Guiding teams towards self-organisation and predictability' },
        { label: null, text: 'A backlog, priorities and working agreements (DoR, DoD) that are actually followed' },
        { label: null, text: 'Actively managing dependencies between teams and suppliers' },
        { label: null, text: 'Visual management that gives insight' },
        { label: null, text: 'Facilitating training courses and workshops' },
        { label: null, text: 'Turning resistance into ownership' },
      ],
      cases: [
        {
          title: 'From islands to synergy',
          situation:
            'An operations department was not working together: no standards, no knowledge sharing, no synergy.',
          approach:
            'First taking the time for vision, mission and strategy. After that we introduced a shared way of working step by step: backlog, daily, refinement, retro, TOPdesk and Jira.',
          result: 'Within six months, from a sceptical attitude to collaboration and flow.',
        },
        {
          title: 'Pretending over performing',
          situation:
            'Development teams worked with Scrum, but it was mainly an IT party. The business was moderately satisfied.',
          approach:
            'The power of repetition and leading by example. A stripped-down definition of done that was actually applied, a modest definition of ready that was actually checked, and user stories that were understandable for all stakeholders.',
          result: 'A positive spiral: better processes, and therefore more valuable work.',
        },
      ],
      relevant: 'SAFe® Agilist · Professional Scrum Master I · Agile Scrum Product Owner',
      closing: 'Is your team not delivering what it promises?',
    },
  },

  contact: {
    seo: {
      title: 'About Yuri van der Putten and contact | Goudboom',
      description:
        'Interim project manager and IT/IV consultant based in Woerden. A complex challenge or too much pressure? Call or schedule an introductory lunch.',
    },
    hero: {
      title: 'Let us have lunch.',
      text: 'Call if it is urgent. Otherwise: schedule a lunch, on me, and tell me where it hurts.',
      callPrefix: 'Call',
      mailPrefix: 'E-mail',
    },
    when: {
      title: 'When to get in touch?',
      items: [
        'You have a complex challenge: a project that is stuck, absence or an escalation.',
        'There is too much pressure. Everyone feels it could be better, but nobody knows exactly how.',
        'You want to spar about a governance organisation, operations that need to get back into calm waters, costs that are spiralling, or a team that has to become more robust and independent.',
        'You feel like having lunch on me, to see whether we could mean something to each other.',
      ],
    },
    about: {
      title: 'About me',
      intro:
        'I am Yuri van der Putten: down to earth, constructively critical and with a healthy dose of humour. For over nine years I have been bringing order to projects, operations teams and teams where things were stuck. And I make sure it can continue without me afterwards.',
      portraitAlt: 'Yuri van der Putten in a suit',
      fresh: {
        title: 'A fresh pair of eyes',
        text: [
          'Call it reframing, constructively critical or a touch of joie de vivre: I look at things optimistically and from different angles. A nickname I am proud of is the "frisse blikopener": the one who opens up a fresh view.',
          'I always place information in the context of the larger, working whole. As a result I often see a solution or a way around that others do not see yet, and I can better oversee the consequences of choices. My intuition helps me with that, but I can also explain where it comes from.',
        ],
        photoAlt: 'Two dogs on the rocks by a Scottish loch',
      },
      colleague: {
        title: 'As a colleague',
        text: [
          'I have been told I am a nice colleague. Nobody has to take that at face value; hopefully it shows every time.',
        ],
        listIntro: 'What I bring in any case:',
        items: [
          'A healthy dose of humour',
          'Calm and perspective, especially when things get tense',
          'Knowledge I share instead of keep: as training coordinator I trained new consultants for years.',
          'An eye for serious themes that go beyond the assignment',
          'Enjoyment at work',
        ],
        photoAlt: 'Yuri walking with his child in a carrier through the hills of the Isle of Skye',
      },
      teaching: {
        title: 'Teaching is growing yourself',
        text: 'As a training coordinator at a secondment firm I gave trainees the programme "Succesvol in jouw opdracht": the tricks of the consultancy trade. What really sets you apart? How do you deliver value quickly, and how do you leave something valuable behind? I claim to know a lot; my audience then puts me through my paces. No training is the same, and I learn something every time.',
      },
      why: {
        title: 'Why Goudboom?',
        text: 'Gold and a tree. Gold stands for value, success and results. A tree stands for strength, growth and connection with its surroundings.',
      },
      slogan: {
        title: 'Slagkracht. Transformatie. Impact.',
        items: [
          {
            term: 'Slagkracht — the power to act.',
            text: 'The ability to actually get things done. Using potential, removing obstacles and getting people moving. So that a stronger team, a more skilled individual or a more robust process really can take on more.',
          },
          {
            term: 'Transformatie — transformation.',
            text: 'Change asks for more than a new plan. Growing complexity and unpredictability require people, teams and organisations to keep adapting. Not changing for the sake of change, but in order to move on.',
          },
          {
            term: 'Impact.',
            text: 'The result that remains when the investment stops. Time, money and energy have to lead somewhere. That is why impact is not only about results, but also about support, quality and what an organisation can continue on its own.',
          },
        ],
      },
      facts: {
        title: 'In short',
        experience: 'Over nine years of experience as an interim project manager, IT/IV consultant and agile coach',
        sectorsLabel: 'Sectors',
        sectors: [
          'aviation',
          'justice',
          'healthcare and public health',
          'social security',
          'retail',
          'defence',
          'IT services',
        ],
        location: 'Based in Woerden, working throughout the Netherlands',
      },
      credentials: {
        title: 'Education & certifications',
        intro: 'An overview of my relevant education and certifications.',
        educationTitle: 'Education',
        certificationsTitle: 'Certifications',
        fieldLabel: 'Field',
        certsLabel: 'Certifications',
        // Only the field names are translated; certification names are proper names.
        groups: [
          {
            field: 'Project and process management',
            items: ['PRINCE2® (2017)', 'Lean Six Sigma Green Belt (2023)', 'Lean Six Sigma Yellow Belt (2021)'],
          },
          {
            field: 'Agile',
            items: [
              'Professional Scrum Product Owner II (2026)',
              'Professional Agile Leadership – Evidence-Based Management (PAL-EBM) (2026)',
              'Professional Scrum Master II (2026)',
              'SAFe® Agilist (2026)',
              'Agile Scrum Product Owner (2022)',
              'DevOps Foundation (2020)',
              'Professional Scrum Master I (2017)',
            ],
          },
          {
            field: 'Information and service management',
            items: [
              'Functioneel Beheer Specialist – Business Information Management (2023)',
              'BiSL Foundation (2022)',
              'IREB® CPRE Foundation Level (2022)',
              'ITIL v3 (2017)',
              'TMap NEXT® Foundation Test Engineer (2017)',
            ],
          },
          {
            field: 'Microsoft, data and automation',
            items: [
              'PL-7001 Power Apps Canvas Apps (2026)',
              'PL-7002 Power Automate (2025)',
              'PL-900 Power Platform Fundamentals (2025)',
              'DA-100 Power BI Data Analyst Associate (2022)',
              'Microsoft 365 Certified: Teams Administrator Associate (2020)',
              'MCSA: Office 365 (2019)',
              'MCSA Windows 10 (2019)',
            ],
          },
          {
            field: 'Security and compliance',
            items: [
              'SC-400 Information Protection Administrator (2022)',
              'SC-900 Security, Compliance & Identity Fundamentals (2022)',
              'SC-300 Identity & Access Administrator (2021)',
              'ISO/IEC 27001 Information Security (2020)',
            ],
          },
          { field: 'Other', items: ['Elements of AI (2026)'] },
        ],
      },
    },
  },

  notFound: {
    seoTitle: 'Page not found | Goudboom Adviesbureau',
    title: 'This page does not exist (any more).',
    text: 'It may have moved during our transformation. Go back to the homepage or let the Inspiratiebank surprise you.',
    home: 'To Home',
  },
};
