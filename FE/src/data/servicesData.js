export const servicesData = [
  {
    id: 'autonomous-agents',
    title: 'Autonomous AI Agents & Workflow Automation',
    icon: 'Bot',
    scope: 'Custom task-execution agent networks capable of autonomous scheduling, multi-step data reconciliation, and lead triage.',
    integrations: ['Slack', 'Email', 'HubSpot', 'Salesforce', 'Jira', 'Relational DBs'],
    safety: 'Custom output guardrails, deterministic JSON schema enforcement, fallback logic, and human oversight controls to eliminate hallucinations.',
    metrics: '70% Operational Time Saved'
  },
  {
    id: 'enterprise-rag',
    title: 'Enterprise RAG & Semantic Search Systems',
    icon: 'Cpu',
    scope: 'Hybrid retrieval setups combining sparse keyword matching (BM25) with dense vector embeddings for ultra-precise context recovery.',
    integrations: ['Unstructured PDFs', 'Notion Spaces', 'Confluence', 'Live SQL Databases'],
    safety: 'Intelligent document chunking, re-ranking algorithms (Cohere Rerank), prompt optimization, and semantic query caching.',
    metrics: '< 250ms Retrieval Latency'
  },
  {
    id: 'fullstack-web-cloud',
    title: 'Custom Full-Stack Web & Cloud Applications',
    icon: 'Code2',
    scope: 'End-to-end multi-tenant SaaS platforms, customer-facing web portals, and internal enterprise operating tools.',
    integrations: ['Next.js / React', 'Tailwind CSS', 'Node.js', 'Python FastAPI', 'Vercel / AWS'],
    safety: 'Granular role-based access control (RBAC), multi-factor authentication, tenant data segregation, and SOC2-ready audit logging.',
    metrics: 'SOC2-Ready Infrastructure'
  },
  {
    id: 'systems-architecture',
    title: 'Systems Architecture & Backend Engineering',
    icon: 'Zap',
    scope: 'Scalable RESTful endpoints, gRPC microservices, and real-time WebSocket communication layers.',
    integrations: ['Redis Pub/Sub', 'RabbitMQ', 'Apache Kafka', 'PostgreSQL', 'Qdrant'],
    safety: 'Relational database modeling, query optimization, indexing strategies, and read/write replica balancing.',
    metrics: '99.9% Uptime Guarantee'
  },
  {
    id: 'industrial-iot',
    title: 'Hardware, IoT & Industrial Telemetry',
    icon: 'Radio',
    scope: 'Edge-to-cloud telemetry pipelines, hardware signal processing, and device management networks.',
    integrations: ['RS-485', 'Modbus', 'MQTT', 'SNMP', 'CAN bus'],
    safety: 'Industrial dashboards providing real-time sensor visualization, automated alerts, and remote device command consoles.',
    metrics: 'Sub-50ms Hardware Telemetry'
  }
];
