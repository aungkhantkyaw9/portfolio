export const links = {
  demo: 'https://resolve-ai-helpdesk.vercel.app',
  repo: 'https://github.com/aungkhantkyaw9/resolve-ai-helpdesk',
  github: 'https://github.com/aungkhantkyaw9',
  linkedin: 'https://linkedin.com/in/aung-khant-kyaw-07a38aa4',
  email: 'mailto:aungkhantkyaw6294@gmail.com',
  // Put your final CV PDF in /public with exactly this file name.
  cv: '/Aung_Khant_Kyaw_CV.pdf',
};

export interface TraceStep {
  label: string;
  body: string;
  final?: boolean;
}

// A real exchange from testing Resolve: a refund request for an order delivered months ago.
export const traceSteps: TraceStep[] = [
  { label: 'Retrieved policy', body: 'doc: refund-policy.md' },
  { label: 'Tool call', body: 'lookup_order(orderId="TH-80010")' },
  {
    label: 'Result',
    body: 'status: delivered\nshippedDate: 2026-06-28\neta: 2026-07-01T14:00:00',
  },
  {
    label: 'Replied to customer',
    body: 'Declined: outside the 14-day window.',
    final: true,
  },
];

export interface Project {
  title: string;
  description: string;
  built: string[];
  stack: string[];
  demo?: string;
  repo?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
  caption?: string;
}

// To add a project, add an entry here. The first one is shown with its screenshot; later ones work the same way.
export const projects: Project[] = [
  {
    title: 'Resolve, an AI helpdesk agent',
    description:
      'A merchant helpdesk where an AI agent answers customer questions by retrieving the store\u2019s policies and calling tools for order lookup, inventory and refunds. A trace panel shows every step, so you can see why it answered the way it did.',
    built: [
      'A hand-written agent loop, with no framework. The model retrieves the relevant policy, calls tools for order lookup, inventory and refunds, and streams its reply over Server-Sent Events.',
      'A live trace panel that shows each step the agent took.',
      'Testing that went past the happy path: prompt injection, refunds outside the policy window, stale delivery dates and orders without tracking numbers. The results are in the README.',
      'A bug I found and fixed: a generic keyword sent refund questions to the shipping policy. The fix has unit tests.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'Vitest', 'Vercel', 'Render'],
    demo: links.demo,
    repo: links.repo,
    note: 'The demo runs on free tiers. The first request can take about a minute while the server wakes up, and the daily model quota is limited.',
    image: '/resolve.png',
    imageAlt:
      "Resolve's helpdesk: a conversation list, a chat where the agent declines a refund, and a trace panel listing the policy, tool call and result.",
    caption: 'The three panes: conversations, chat and the agent trace.',
  },
];

export interface Role {
  title: string;
  company: string;
  dates: string;
  summary: string;
}

export const roles: Role[] = [
  {
    title: 'Senior Fullstack Developer',
    company: 'Fairmart',
    dates: 'Mar 2023 – Feb 2026',
    summary:
      'Serverless catalog ingestion on AWS Lambda for 8,000+ product records, real-time price and stock sync across Shopee, Lazada and Google, and a Redux-based UI layer that cut duplicated code by 30%.',
  },
  {
    title: 'Fullstack Developer',
    company: 'Appvantage',
    dates: 'Sep 2022 – Jan 2023',
    summary: 'React, TypeScript and GraphQL for automotive and asset-finance portals.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Brycen Myanmar',
    dates: 'Jun 2021 – Sep 2022',
    summary:
      'The frontend for a large HR platform, a Java/J2EE payroll engine that turned a 2–3 day manual run into one structured cycle, and a Google Calendar-style scheduling engine in React.',
  },
  {
    title: 'Fullstack Developer',
    company: 'StudioAMK',
    dates: 'May 2018 – May 2021',
    summary:
      'A reseller portal on Node.js and MySQL, a Facebook Live engagement platform with WebSocket donations, and low-latency Socket.io messaging for corporate clients.',
  },
  {
    title: 'Fullstack Developer',
    company: 'Interwebbing Technology',
    dates: 'Jul 2015 – Apr 2018',
    summary:
      'Early React and Node.js adoption, a React Native point-of-sale app and a Cassandra-backed task manager.',
  },
  {
    title: 'Junior Developer',
    company: 'Acroquest Myanmar',
    dates: 'May 2014 – Jun 2015',
    summary: 'A Japanese healthcare web system in J2EE, with Selenium and JUnit test automation.',
  },
];

export const skills: { label: string; items: string }[] = [
  { label: 'Frontend', items: 'React, TypeScript, Redux, React Native, HTML5, CSS3, JavaScript (ES6+)' },
  { label: 'Backend', items: 'Node.js, Express, RESTful APIs, GraphQL, AWS Lambda, J2EE' },
  { label: 'AI and LLM', items: 'Gemini API function calling, tool-calling agents, policy retrieval, SSE streaming, prompt-injection testing' },
  { label: 'Data', items: 'MongoDB, MySQL, DynamoDB, Elasticsearch, Apache Cassandra' },
  { label: 'Cloud and tooling', items: 'AWS (S3, Lambda, CloudWatch), serverless architecture, Git, ESLint, Vercel, Render' },
  { label: 'Real-time', items: 'Socket.io, WebSockets, webhook-driven event processing' },
  { label: 'Testing', items: 'Vitest, Selenium, JUnit, unit and component testing' },
];
