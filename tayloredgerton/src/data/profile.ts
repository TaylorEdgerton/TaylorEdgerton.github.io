export interface ExperienceEntry {
  date: string;
  role: string;
  organisation: string;
  websiteParagraphs: string[];
  resumeBullets: string[];
  tags: string[];
}

export interface EducationEntry {
  date: string;
  qualification: string;
  institution: string;
  websiteDescription: string;
  resumeDescription: string;
  tags: string[];
}

export interface ProjectEntry {
  label: string;
  title: string;
  href?: string;
  websiteParagraphs: string[];
  resumeDescription: string;
  tags: string[];
  includeOnResume: boolean;
  resumePriority?: number;
}

const text = (...lines: string[]): string => lines.join(' ');

export const profile = {
  name: 'Taylor Edgerton',
  currentRole: 'Senior Automation Engineer',
  focus: 'Platform & Integration Engineering',
  bio: text(
    'Designing and operating reliable platforms, integrations, and data systems',
    'for SCADA developers, operators, managers and critical infrastructure.',
  ),
  location: 'Brisbane, Australia - Remote',
  email: 'taylor@edgerton.com.au',
  github: 'https://github.com/TaylorEdgerton',
  linkedin: 'https://linkedin.com/in/taylor-edgerton',
  website: 'https://tayloredgerton.com.au',
  resume: '/assets/pdf/Taylor_Edgerton_Resume.pdf',
  about: [
    text(
      'Integrating, designing and deploying the systems around critical infrastructure',
      'making it secure, observable, and easier to operate. My experience covers',
      'SCADA, identity and access, APIs, data infrastructure, Kubernetes, and',
      'GitOps across on-premises and cloud-hosted environments.',
    ),
    text(
      'This has included deploying systems for two grid-scale battery projects,',
      'integrating a self-hosted identity platform for around 100 users, and',
      'developing a secure live-data and historian API serving nine solar and',
      'battery farms.',
    ),
    text(
      'Working on critical systems has taught me to think in terms of risk,',
      'rollback, reliability, and simplicity. I enjoy problem solving, systems, family,',
      'and the outdoors.',
    ),
  ],
  resumeSummary: text(
    'Platform and integration focused engineer with experience building',
    'critical-infrastructure systems across identity, APIs, Kubernetes, GitOps,',
    'observability, SCADA, and time-series data. Experienced in deploying and',
    'supporting systems across renewable energy assets, with an emphasis on',
    'reliability, secure access, and repeatable delivery.',
  ),
} as const;

export const experience: ExperienceEntry[] = [
  {
    date: '2026 — Present',
    role: 'Senior Automation Engineer',
    organisation: 'Cromarty Automation',
    websiteParagraphs: [
      text(
        'Developing and deploying an operational data platform for nine solar',
        'and battery sites, integrating Ignition SCADA, secure APIs, identity',
        'services, and time-series infrastructure.',
      ),
      text(
        'Working across deployment architecture, access control, observability,',
        'reliability, and the continued development of the platform.',
      ),
    ],
    resumeBullets: [
      text(
        'Developing and deploying an operational-data platform integrating',
        'Ignition SCADA, secure APIs, identity services, and TimescaleDB across',
        'nine solar and battery sites.',
      ),
      text(
        'Designed an OAuth2-secured data-access service providing controlled and',
        'auditable access to live and historical operational data.',
      ),
      text(
        'Working across deployment architecture, access control, observability,',
        'reliability, and continued platform development.',
      ),
    ],
    tags: [
      'Ignition',
      'Python',
      'Kubernetes',
      'PostgreSQL',
      'TimescaleDB',
      'OAuth2',
      'REST APIs',
    ],
  },
  {
    date: '2025 — 2026',
    role: 'Automation Engineer',
    organisation: 'Cromarty Automation',
    websiteParagraphs: [
      text(
        'Deployed SCADA runtime environments and containerised supporting',
        'services for two greenfield BESS projects.',
        'Delivered engineering work spanning SCADA platforms, deployment',
        'automation, integrations, and supporting services across more than 15',
        'renewable energy, battery storage, and gas assets, including on-call',
        'support for six operational assets.',
      ),
      text(
        'Led the design and implementation of more repeatable GitOps platform patterns',
        'around containerised services, reverse-proxied HTTPS, redundant Ignition',
        'gateways, database replication, and development environments. Worked on',
        'historian and data infrastructure across roughly 10 sites and more than',
        '1 TB of raw operational data, including TimescaleDB migration planning',
        'and hierarchical aggregates for reporting.',
      ),
    ],
    resumeBullets: [
      text(
        'Deployed SCADA runtime environments and containerised supporting',
        'services through GitOps workflows for two greenfield BESS projects.',
      ),
      text(
        'Delivered engineering work covering SCADA platforms, deployment',
        'automation, integrations, and supporting services across more than 15',
        'renewable energy, battery storage, and gas assets, including on-call',
        'support for six operational assets.',
      ),
      text(
        'Led repeatable platform patterns for containerised services,',
        'reverse-proxied HTTPS, redundant Ignition gateways, database replication,',
        'and development environments.',
      ),
      text(
        'Planned historian and TimescaleDB migrations across roughly 10 sites and',
        'more than 1 TB of raw operational data.',
      ),
    ],
    tags: [
      'Ignition',
      'Kubernetes',
      'Argo CD',
      'TimescaleDB',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    date: '2023 — 2025',
    role: 'OT Engineer',
    organisation: 'Cromarty Automation',
    websiteParagraphs: [
      text(
        'Worked across renewable energy, gas, and industrial assets representing',
        'more than 1 GW of generation capacity. Delivered AESCSF-aligned',
        'cybersecurity assessments across three sites and helped establish the',
        'initial security baselines, audit procedures, reporting, and remediation',
        'priorities for the portfolio.',
      ),
      text(
        'Also worked across SCADA upgrades, OPC UA and MQTT integrations, edge',
        'deployments, and technical documentation for operational stakeholders.',
      ),
    ],
    resumeBullets: [
      text(
        'Worked across renewable energy, gas, and industrial assets representing',
        'more than 1 GW of generation capacity.',
      ),
      text(
        'Delivered AESCSF-aligned cybersecurity assessments across three sites',
        'and helped establish security baselines, audit procedures, and',
        'remediation priorities.',
      ),
      text(
        'Delivered SCADA upgrades, OPC UA and MQTT integrations, edge deployments,',
        'and operational documentation.',
      ),
    ],
    tags: ['SCADA', 'OPC UA', 'MQTT', 'AESCSF'],
  },
];

export const education: EducationEntry[] = [
  {
    date: '2023',
    qualification: 'Bachelor of Information Technology',
    institution: 'Griffith University',
    websiteDescription: text(
      'Majored in Software Development, covering full-stack development, API',
      'integration, databases, and cybersecurity assessment. Received the',
      'Griffith Award for Academic Achievement with a GPA of 6.5 and a High',
      'Distinction for an industry-partnered UI/UX project with Optus.',
    ),
    resumeDescription: text(
      'Software Development major. Griffith Award for Academic Achievement',
      '(GPA 6.5); High Distinction for an industry-partnered UI/UX project',
      'with Optus.',
    ),
    tags: ['JavaScript', 'Python', 'Node.js', 'MySQL'],
  },
];

export const projects: ProjectEntry[] = [
  {
    label: 'Platform Integration',
    title: 'Operational Data Access Platform',
    websiteParagraphs: [
      text(
        'Designed and developed a secure data access layer for nine solar and',
        'battery sites, integrating live SCADA and historian database data with a',
        'self-hosted identity platform via REST APIs.',
      ),
      text(
        'Used OAuth2 to provide controlled, auditable access while keeping',
        'identity, application, and operational-data concerns separated.',
      ),
    ],
    resumeDescription: text(
      'Integrated live SCADA and historian database data with self-hosted identity, using',
      'OAuth2 to provide controlled and auditable access across nine solar and',
      'battery sites.',
    ),
    tags: ['Python', 'OAuth2', 'REST APIs', 'Ignition', 'TimescaleDB'],
    includeOnResume: true,
    resumePriority: 1,
  },
  {
    label: 'Identity',
    title: 'Self-Hosted Identity and Access Migration',
    websiteParagraphs: [
      text(
        'Proposed and implemented a migration from Okta to a self-hosted identity',
        'platform, covering roughly 100 user accounts and 7 public and internal',
        'applications.',
      ),
      text(
        'Worked across OIDC, SAML, MFA, group and claim preservation, custom',
        'authentication flows, and Entra domain routing. The migration reduced',
        'vendor dependency while providing more control over how users access',
        'critical systems and greater integration flexibility with services.',
      ),
    ],
    resumeDescription: text(
      'Migrated roughly 100 user accounts and 7 applications from Okta to a',
      'self-hosted identity platform across OIDC, SAML, MFA, claims, and Entra',
      'domain routing.',
    ),
    tags: ['OIDC', 'SAML', 'Authentik', 'Entra ID', 'MFA'],
    includeOnResume: true,
    resumePriority: 2,
  },
  {
    label: 'Platform',
    title: 'Kubernetes GitOps Platform',
    websiteParagraphs: [
      text(
        'Developed a more repeatable delivery platform for Ignition-based projects',
        'using Terraform, cloud-init, container patterns, and tenant-based',
        'Kubernetes environments with RBAC.',
      ),
      text(
        'Reduced ideal environment setup time from roughly 2–3 hours to around',
        '30 minutes and moved delivery towards a standard platform pattern',
        'instead of maintaining one-off environments.',
      ),
    ],
    resumeDescription: text(
      'Developed a Terraform and GitOps-based Kubernetes platform with tenant RBAC,',
      'reducing ideal environment setup from roughly 2–3 hours to around',
      '30 minutes.',
    ),
    tags: ['Kubernetes', 'Terraform', 'Argo CD', 'RBAC', 'Longhorn', 'Kustomize'],
    includeOnResume: true,
    resumePriority: 3,
  },
  {
    label: 'Data Infrastructure',
    title: 'Historian Aggregation and Retention Pipeline',
    websiteParagraphs: [
      text(
        'Planned and implemented a TimescaleDB migration path and Postgres upgrade for historian data',
        'across 9 historian databases, covering more than 200,000 data points and over',
        '1.5 TB of raw operational data. Involving automated backfilling raw data and aggregates through TimescaleDB jobs',
        'ensuring steady database load, avoiding downtime.'
      ),
      text(
        'Introduced hierarchical continuous aggregates and retention policies to',
        'support large-scale reporting while preserving the operational value of',
        'the raw data. Migration planning, rollback, and runbooks for avoiding',
        'data loss were a major part of the work.',
      ),
    ],
    resumeDescription: text(
      'Planned a TimescaleDB migration path, Postgres upgrade, and hierarchical aggregation pipeline',
      'for more than 200,000 data points and over 1.5 TB of historian data.',
    ),
    tags: [
      'TimescaleDB',
      'PostgreSQL',
      'Data Migration',
      'Continuous Aggregates',
    ],
    includeOnResume: false,
  },
  {
    label: 'Observability',
    title: 'Industrial Monitoring Stack',
    websiteParagraphs: [
      text(
        'Standardised metrics, logs, and tracing across development and site',
        'environments using Prometheus, Loki, Grafana Alloy, and OpenTelemetry.',
      ),
      text(
        'Brought time-filtered logs and metrics into one place, making it easier',
        'to investigate failures across applications, infrastructure, and site',
        'systems.',
      ),
    ],
    resumeDescription: text(
      'Standardised metrics, logs, and tracing across development and site',
      'systems using Prometheus, Loki, Grafana Alloy, and OpenTelemetry.',
    ),
    tags: ['Prometheus', 'Loki', 'Grafana Alloy', 'OpenTelemetry'],
    includeOnResume: false,
  },
  {
    label: 'Open Source',
    title: 'ARC — AI Connector for Ignition Designer',
    href: 'https://github.com/TaylorEdgerton/arc',
    websiteParagraphs: [
      text(
        'A read-only integration between AI clients and Ignition Designer, Developed',
        'using MCP and the Ignition SDK. ARC exposes structured project context',
        'so developers can document, inspect, troubleshoot and audit bindings, scripts, and project structure',
        'without manually navigating each part of the system.',
      ),
      text(
        'Designed around explicit access boundaries, review, and project',
        'understanding rather than automated unchecked code generation.',
      ),
    ],
    resumeDescription: text(
      'Developed a read-only MCP integration exposing structured Ignition Designer',
      'context with explicit access boundaries and review in mind.',
    ),
    tags: ['Java', 'MCP', 'Ignition SDK'],
    includeOnResume: false,
  },
  {
    label: 'Engineering Workflow',
    title: 'Method — Structured AI Delivery Workflow',
    websiteParagraphs: [
      text(
        'A structured workflow for using AI in software delivery without giving',
        'up engineering judgement. Method organises work around user stories,',
        'research, implementation plans, review gates, retained documentation,',
        'and proof of understanding.',
      ),
      text(
        'It is intended to improve delivery speed while limiting the understanding',
        'debt that develops when generated code moves faster than human',
        'comprehension.',
      ),
    ],
    resumeDescription: text(
      'Created a governed AI delivery workflow around research, planning, review',
      'gates, retained documentation, and proof of understanding.',
    ),
    tags: ['AI Agents', 'Engineering Governance', 'Developer Tooling'],
    includeOnResume: false,
  },
];

export const skillGroups = [
  {
    label: 'Platforms',
    skills: ['Kubernetes', 'Argo CD', 'Terraform', 'Docker', 'RBAC'],
  },
  {
    label: 'Integration',
    skills: ['REST APIs', 'OAuth2', 'OIDC', 'SAML', 'OPC UA', 'MQTT', 'MCP', 'Certificate Management', 'mTLS'],
  },
  {
    label: 'Data',
    skills: [
      'PostgreSQL',
      'TimescaleDB',
      'MySQL',
      'Data Migration',
      'Continuous Aggregates',
    ],
  },
  {
    label: 'Observability',
    skills: ['Prometheus', 'Loki', 'Grafana', 'Grafana Alloy', 'OpenTelemetry'],
  },
  {
    label: 'Development',
    skills: ['Python', 'Java', 'JavaScript', 'Node.js'],
  },
  {
    label: 'Critical Infrastructure',
    skills: [
      'Ignition',
      'Ignition SDK',
      'SCADA',
      'AESCSF',
      'Authentik',
      'Entra ID',
      'MFA',
    ],
  },
] as const;
