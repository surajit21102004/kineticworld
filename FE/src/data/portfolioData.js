export const portfolioData = [
  {
    id: 'case-fintech-rag',
    title: 'Hybrid RAG Knowledge Engine for Fintech Compliance',
    category: 'Enterprise RAG & Search',
    client: 'Apex Financial Services',
    timeline: '6-Week Delivery Sprint',
    impact: '92% Latency Reduction',
    bottleneck: 'Compliance analysts manually searched through thousands of multi-page regulatory PDFs, leading to slow response times (45+ min per lookup) and high risk of oversight.',
    pipeline: '[Data Source: Regulatory PDFs / SQL] → [Chunking & Ingestion] → [Qdrant & Redis Cache] → [Cohere Rerank] → [Claude 3.5 Agent] → [Compliance Console]',
    architecture: 'Python (FastAPI), Qdrant Vector DB, LlamaIndex, Redis, Cohere Rerank, Next.js, AWS ECS.',
    tags: ['FinTech', 'Python', 'FastAPI', 'Qdrant', 'Cohere Rerank', 'Claude 3.5'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    metrics: [
      '92% Latency Reduction: Search times dropped from 45 minutes to under 3.5 seconds.',
      '$140,000 Annual Token Savings via prompt caching & chunk pruning.',
      '100% Private VPC Deployment ensuring zero external model data retention.'
    ]
  },
  {
    id: 'case-multi-agent-audit',
    title: 'Multi-Agent Support & Document Processing Engine',
    category: 'Autonomous AI Agents',
    client: 'Global Logistics Group',
    timeline: '4-Week Delivery Sprint',
    impact: '70% Reduction in Processing Time',
    bottleneck: 'Manual invoice extraction, document verification, and customer ticket categorization caused a critical 48-hour operational backlog.',
    pipeline: '[Inbound Invoice PDFs] → [Whisper OCR / Vision Parser] → [LangGraph Agent Orchestrator] → [Human-in-the-Loop Review] → [ERP Sync]',
    architecture: 'Node.js Express, LangChain/LangGraph, Redis Message Queues, React Tailwind, PostgreSQL.',
    tags: ['Logistics', 'LangGraph', 'Redis Queues', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    metrics: [
      '70% processing time reduction across 40,000 monthly invoices.',
      '400+ engineering hours saved monthly in automated data reconciliation.',
      '99.8% precision with human-in-the-loop fallback verification.'
    ]
  },
  {
    id: 'case-health-intake',
    title: 'Clinical Document Extraction & NLP Engine',
    category: 'Enterprise Knowledge',
    client: 'Pulse Care Networks',
    timeline: '8-Week Delivery Sprint',
    impact: '85% Admin Time Saved',
    bottleneck: 'Doctors spent 3+ hours daily manually typing patient notes from faxed records into electronic health record systems.',
    pipeline: '[Fax / Audio Record] → [Whisper AI Transcription] → [Medical Entity Extraction Agent] → [FHIR API Integration] → [EHR Storage]',
    architecture: 'Python, PyTorch, Whisper AI, FastAPI, PostgreSQL, Supabase, Tailwind React.',
    tags: ['Healthcare', 'Whisper AI', 'NLP', 'Supabase', 'Python'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    metrics: [
      '120,000+ patient records processed in the first 90 days of deployment.',
      'HIPAA & SOC2 compliant end-to-end data encryption.',
      'Saved clinicians an average of 2.2 hours per shift.'
    ]
  },
  {
    id: 'case-predictive-ecom',
    title: 'SmartCart Predictive Recommendation & Inventory Agent',
    category: 'Cloud & Distributed Systems',
    client: 'Veloce Commerce',
    timeline: '5-Week Delivery Sprint',
    impact: '$3.2M Added ARR',
    bottleneck: 'Static e-commerce recommendation engines failed to adjust in real-time to micro-trends, causing high cart abandonment.',
    pipeline: '[User Stream Events] → [Kafka Event Bus] → [PyTorch Recommendation Model] → [Redis Vector Cache] → [Personalized Checkout API]',
    architecture: 'React, Node.js Microservices, Apache Kafka, PyTorch, Redis, AWS Lambda.',
    tags: ['E-Commerce', 'PyTorch', 'Kafka', 'AWS Lambda', 'Redis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    metrics: [
      '38.4% increase in Average Order Value (AOV).',
      '< 45ms sub-second API recommendation latency at 15,000 req/min.',
      'Automated inventory forecasting reduced overstock costs by $420k.'
    ]
  },
  {
    id: 'case-iot-telemetry',
    title: 'Industrial IoT & Edge Telemetry Gateway',
    category: 'Hardware & IoT Telemetry',
    client: 'Apex Industrial Dynamics',
    timeline: '7-Week Delivery Sprint',
    impact: '< 50ms Telemetry Latency',
    bottleneck: 'Remote mining machinery lacked real-time edge monitoring, leading to undetected component friction and unplanned downtime.',
    pipeline: '[Industrial Sensors] → [RS-485 / Modbus Drivers] → [Edge Gateway Engine] → [MQTT Stream] → [React Telemetry Console]',
    architecture: 'C++ Edge Drivers, Python Gateway, MQTT Broker, Node.js, TimescaleDB, React Dashboard.',
    tags: ['IoT', 'Modbus', 'MQTT', 'C++', 'TimescaleDB', 'React'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    metrics: [
      'Sub-50ms hardware signal processing across 2,500 active machine sensors.',
      'Zero downtime failures over 12 months of continuous field operations.',
      'Automated predictive maintenance alerts prevented 3 catastrophic outages.'
    ]
  }
];
